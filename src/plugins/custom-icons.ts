/*
 * @Author: mulingyuer
 * @Date: 2025-01-21 11:19:37
 * @LastEditTime: 2025-01-21 16:55:47
 * @LastEditors: mulingyuer
 * @Description: 自定义图标组件
 * @FilePath: \element-admin-template\src\plugins\custom-icons.ts
 * 怎么可能会有bug！！！
 */
import type { App } from "vue";
import { toCamelCase } from "@/utils/tools";

/** 获取svg组件 */
function getSvgComponents() {
	const modules = import.meta.glob("/src/assets/icons/custom/*.svg", { eager: true });
	const svgComponents: Record<string, any> = {};

	for (const path in modules) {
		const componentName = toCamelCase(`Custom-${path.split("/").pop()?.replace(".svg", "")}`);

		svgComponents[componentName] = (modules[path] as any)?.default || modules[path];
	}

	return svgComponents;
}

export const CustomIconsPlugin = {
	install(app: App) {
		const components = getSvgComponents();

		for (const key in components) {
			app.component(key, components[key]);
		}
	}
};
