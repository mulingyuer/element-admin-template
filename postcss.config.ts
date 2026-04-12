/*
 * @Author: mulingyuer
 * @Date: 2025-07-04 11:05:41
 * @LastEditTime: 2026-04-11 16:27:15
 * @LastEditors: mulingyuer
 * @Description: postcss配置文件
 * @FilePath: \element-admin-template\postcss.config.ts
 * 怎么可能会有bug！！！
 */
import postcssPresetEnv from "postcss-preset-env";

export default {
	plugins: [
		postcssPresetEnv({
			// 自动添加前缀
			autoprefixer: {
				grid: true
			},
			features: {
				"cascade-layers": false
			}
		})
	]
};
