import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig, loadEnv } from "vite";
import { analyzer } from "vite-bundle-analyzer";
import removeConsole from "vite-plugin-remove-console";
import vueDevTools from "vite-plugin-vue-devtools";
import legacy from "@vitejs/plugin-legacy";
import browserslist from "browserslist";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import { optimize } from "svgo";

// 净化svg
const sanitizeSvg = (svg: string) => {
	const result = optimize(svg, {
		plugins: [
			{ name: "preset-default" },
			{
				name: "removeAttrs",
				params: {
					attrs: ["width", "height", "class"]
				}
			}
		]
	});

	return result.data;
};

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
				resolvers: [
					ElementPlusResolver({
						importStyle: "sass"
					}),
					IconsResolver({
						prefix: "i",
						enabledCollections: ["ep", "ri", "custom-brand", "custom-ui"]
					})
				],
				dts: "types/components.d.ts"
			}),
			Icons({
				autoInstall: true,
				compiler: "vue3",
				scale: 1,
				defaultClass: "iconify",
				// 自定义图标
				customCollections: {
					// 多色图标
					"custom-brand": FileSystemIconLoader("./src/assets/icons/brand", sanitizeSvg),
					// 单色图标
					"custom-ui": FileSystemIconLoader("./src/assets/icons/ui", sanitizeSvg)
				},
				iconCustomizer(collection, _icon, props) {
					if (collection === "custom-ui") {
						props.fill = "currentColor";
					}
				}
			}),
			mode === "analyze" ? analyzer() : undefined,
			// 兼容性
			legacy({
				modernTargets: browserslist.loadConfig({ path: cwdPath }),
				modernPolyfills: true,
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
          @use "@/styles/element-plus/theme-light.scss" as *;
          @use "@/styles/element-plus/theme-dark.scss" as *;
          @use "@/styles/_variables.scss" as *;
          @use "@/styles/_mixins.scss" as *;
					`
				}
			}
		},
		build: {
			// target: ["es2015"],
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
