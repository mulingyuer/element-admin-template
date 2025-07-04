import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig, loadEnv } from "vite";
import { analyzer } from "vite-bundle-analyzer";
import removeConsole from "vite-plugin-remove-console";
import vueDevTools from "vite-plugin-vue-devtools";
import { ViteCustomIconsPlugin } from "./vite-plugins/vite-custom-icons";
import legacy from "@vitejs/plugin-legacy";
import browserslist from "browserslist";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const cwdPath = process.cwd();
	const viteEnv = loadEnv(mode, cwdPath) as ImportMetaEnv;

	return {
		/** 路由的 baseURL，控制 BASE_URL 环境变量 */
		base: viteEnv.VITE_APP_BASE_URL,
		plugins: [
			vue(),
			vueDevTools(),
			// 打包移除log和debugger
			removeConsole({
				custom: ["debugger", "console.log()"]
			}),
			ViteCustomIconsPlugin({
				include: ["/assets/icons/custom/"]
			}),
			AutoImport({
				imports: ["vue", "vue-router", "pinia", "@vueuse/core"],
				resolvers: [
					ElementPlusResolver({
						importStyle: "sass"
					})
				],
				dts: "types/auto-imports.d.ts",
				eslintrc: {
					enabled: true,
					filepath: "./.eslintrc-auto-import.json",
					globalsPropValue: true
				}
			}),
			Components({
				extensions: ["vue", "md"],
				include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
				resolvers: [
					ElementPlusResolver({
						importStyle: "sass"
					})
				],
				dts: "types/components.d.ts"
			}),
			mode === "analyze" ? analyzer() : undefined,
			// 兼容性
			legacy({
				modernTargets: browserslist.loadConfig({ path: cwdPath }),
				renderLegacyChunks: false
			})
		],
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url))
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
          @use '@/styles/element-plus/theme-light' as *;
          @use '@/styles/element-plus/theme-dark' as *;
          @use '@/styles/variables' as *;
          @use '@/styles/mixins' as *;
          `,
					api: "modern-compiler"
				}
			}
		},
		build: {
			target: ["es2015"],
			rollupOptions: {
				output: {
					manualChunks: {
						"vue-vendor": ["vue", "vue-router", "pinia", "pinia-plugin-persistedstate"],
						ui: ["element-plus", "@element-plus/icons-vue", "nprogress"],
						utils: ["@vueuse/core", "axios", "axios-retry", "dayjs"]
					}
				}
			}
		},
		server: {
			host: true
			// port: 5173
		}
	};
});
