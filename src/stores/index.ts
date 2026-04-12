/*
 * @Author: mulingyuer
 * @Date: 2024-09-25 11:43:53
 * @LastEditTime: 2026-04-12 22:33:42
 * @LastEditors: mulingyuer
 * @Description: 数据仓库
 * @FilePath: \element-admin-template\src\stores\index.ts
 * 怎么可能会有bug！！！
 */
import type { App } from "vue";
import { createPinia } from "pinia";
import { createPiniaPluginStorage } from "@erlihs/pinia-plugin-storage";

export const store = createPinia();
store.use(
	createPiniaPluginStorage({
		namespace: import.meta.env.VITE_APP_LOCAL_KEY_PREFIX
	})
);

export const piniaStore = {
	install(app: App<Element>) {
		app.use(store);
	}
};

export * from "./modules";
