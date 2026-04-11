/*
 * @Author: mulingyuer
 * @Date: 2024-09-27 17:26:54
 * @LastEditTime: 2026-04-11 17:07:44
 * @LastEditors: mulingyuer
 * @Description: 路由守卫
 * @FilePath: \element-admin-template\src\router\guard.ts
 * 怎么可能会有bug！！！
 */
// import { useAppStore } from "@/stores";
import { NProgress } from "@/utils/nprogress";
import type { Router } from "vue-router";
// import { initRoutes } from "./helpers";
// import { modulesRoutes } from "./route-modules";
import { RouterAuthContext, executeStrategies } from "./router-auth";

export async function createRouterGuard(router: Router) {
	// const appStore = useAppStore();

	/** 路由守卫 */
	router.beforeEach((to, from) => {
		/** 进度条 */
		NProgress.start();

		/** 初始化路由 */
		// if (!appStore.isInitRoute) {
		// 	initRoutes(router, modulesRoutes, appStore);
		// 	return { path: to.fullPath, replace: true, query: to.query, hash: to.hash };
		// }

		/** 鉴权策略 */
		const strategies = to.meta.auth ?? ["required"];
		const context = new RouterAuthContext(to, from);
		const result = executeStrategies(strategies, context);

		if (result !== true) {
			return result;
		}

		return true;
	});

	router.afterEach((_to, _from) => {
		/** 进度条 */
		NProgress.done();
	});

	// Workaround for https://github.com/vitejs/vite/issues/11804
	router.onError((err: any, to: any) => {
		if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
			if (sessionStorage.getItem("eat:dynamic-reload")) {
				console.error("动态导入出错，刷新页面后问题仍未解决", err);
			} else {
				console.warn("刷新页面以修复动态导入错误");
				sessionStorage.setItem("eat:dynamic-reload", "true");
				location.assign(`${import.meta.env.BASE_URL}/${to.fullPath.replace(/^\//, "")}`);
			}
		} else {
			console.error(err);
		}
	});

	router.isReady().then(() => {
		sessionStorage.removeItem("eat:dynamic-reload");
	});
}
