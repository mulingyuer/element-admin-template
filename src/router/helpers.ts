/*
 * @Author: mulingyuer
 * @Date: 2024-09-26 17:54:10
 * @LastEditTime: 2025-12-17 16:12:04
 * @LastEditors: mulingyuer
 * @Description: 路由辅助函数
 * @FilePath: \element-admin-template\src\router\helpers.ts
 * 怎么可能会有bug！！！
 */
import type { Router, RouteRecordRaw } from "vue-router";
import { createWebHistory, createWebHashHistory } from "vue-router";
import { useAppStore } from "@/stores";

/** 获取所有路由模块并转成routes数组并排序 */
export function getModulesRoutes(globData: Record<string, any>): RouteRecordRaw[] {
	const modulesRoutes: RouteRecordRaw[] = [];

	Object.keys(globData).forEach((key: string) => {
		const value = globData[key].default;
		if (Array.isArray(value)) {
			modulesRoutes.push(...value);
		} else {
			modulesRoutes.push(value);
		}
	});

	// 排序路由
	return sortRoutes(modulesRoutes);
}

/** 路由排序 */
export function sortRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
	return routes
		.toSorted((next, pre) => Number(next.meta?.sort) - Number(pre.meta?.sort))
		.map((item) => {
			if (item.children) sortRoutes(item.children);
			return item;
		});
}

/** 根据路由生成菜单 */
export function generateMenu(routes: RouteRecordRaw[]): AdminApp.Menu[] {
	const menus: AdminApp.Menu[] = [];

	routes.forEach((route) => {
		if (route.meta?.isHide) return;

		const menu: AdminApp.Menu = {
			path: route.path,
			name: (route.name as string) ?? "",
			title: route.meta?.title ?? "",
			icon: route.meta?.icon ?? void 0
		};

		if (route.children && route.children.length > 0) {
			menu.children = generateMenu(route.children);
		}

		menus.push(menu);
	});

	return menus;
}

/** 初始化路由 */
export function initRoutes(
	router: Router,
	routes: RouteRecordRaw[],
	appStore: ReturnType<typeof useAppStore>
) {
	// 添加静态路由
	routes.forEach((route) => {
		route.children?.length ? router.addRoute(route) : router.addRoute("Root", route);
	});

	// 初始化菜单
	const menus = generateMenu(routes);
	appStore.setMenuList(menus);

	// 标记初始化路由完成
	appStore.setInitRoute(true);
}

/** 根据VITE_APP_GITHUB_PREVIEW变量创建路由记录
 *  这个方法会在VITE_APP_GITHUB_PREVIEW为true时创建hash记录，用于github demo预览
 *  你可以去除这个方法自己固定路由记录，不会有任何影响
 */
export function createRouterHistory(base?: string) {
	const isGithubPreview = import.meta.env.VITE_APP_GITHUB_PREVIEW === "true";
	if (isGithubPreview) {
		return createWebHashHistory(base);
	}
	return createWebHistory(base);
}
