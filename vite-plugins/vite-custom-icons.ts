/*
 * @Author: mulingyuer
 * @Date: 2025-01-21 15:45:20
 * @LastEditTime: 2025-07-03 16:58:20
 * @LastEditors: mulingyuer
 * @Description: 将自定义svg转换成组件
 * @FilePath: \element-admin-template\vite-plugins\vite-custom-icons.ts
 * 怎么可能会有bug！！！
 */
// 插件参考：https://github.com/jpkleemans/vite-svg-loader
import { readFileSync } from "fs";
import { compileTemplate } from "vue/compiler-sfc";
import { optimize as optimizeSvg } from "svgo";
import type { Config } from "svgo";
import * as vite7 from "vite";

export interface CustomIconsPluginOptions {
	/** 指定目录 */
	include?: string[];
}

export function ViteCustomIconsPlugin(
	options: CustomIconsPluginOptions = {}
): vite7.Plugin<any> | vite7.Plugin<any>[] {
	const { include } = options;
	const exclude = ["node_modules", "public"];
	const svgRegex = /\.svg$/;
	const ERROR_MESSAGE_TEMPLATE = (id: string) => `${id} 无法被custom-icons读取，请检查文件是否正确`;
	const SVGO_OPTIONS: Config = {
		plugins: [
			{ name: "removeDimensions" },
			{ name: "removeUselessStrokeAndFill" },
			{
				name: "removeAttrs",
				params: {
					attrs: ["class"]
				}
			},
			{
				name: "addAttributesToSVGElement",
				params: {
					attributes: ['fill="currentColor"']
				}
			}
		]
	};

	return {
		name: "custom-icons",
		enforce: "pre",
		async load(id: string) {
			// 如果不是svg文件，直接跳过
			if (!id.match(svgRegex)) return;
			// 忽略
			if (exclude.some((item) => id.includes(item))) return;
			// 如果不是指定目录，直接跳过
			if (include && !include.some((item) => id.includes(item))) return;

			const [path] = id.split("?", 2);
			let svg = readFileSync(path, "utf-8");

			if (!svg) {
				console.warn(ERROR_MESSAGE_TEMPLATE(id));
				return;
			}

			// 将阿里巴巴矢量图里面携带的fill替换成currentColor
			svg = svg.replace(/fill=".*?"/g, 'fill="currentColor"');

			// 优化
			svg = optimizeSvg(svg, { ...SVGO_OPTIONS, path }).data;

			// To prevent compileTemplate from removing the style tag
			svg = svg.replace(/<style/g, '<component is="style"').replace(/<\/style/g, "</component");

			const { code } = compileTemplate({
				id: JSON.stringify(id),
				source: svg,
				filename: path,
				transformAssetUrls: false
			});

			return `${code}\nexport default { render: render }`;
		}
	};
}
