/*
 * @Author: mulingyuer
 * @Date: 2024-09-25 14:53:53
 * @LastEditTime: 2024-09-27 15:54:51
 * @LastEditors: mulingyuer
 * @Description: element-plus
 * @FilePath: \spirit-app-microservice-admin\src\plugins\element-plus.ts
 * 怎么可能会有bug！！！
 */
import * as ElementPlusIcons from "@element-plus/icons-vue";
import type { App } from "vue";
import "element-plus/theme-chalk/display.css";

export const ElementPlusPlugin = {
	install(app: App) {
		// 全局注册ElementPlus图标
		for (const [key, component] of Object.entries(ElementPlusIcons)) {
			app.component(key, component);
		}
	}
};
