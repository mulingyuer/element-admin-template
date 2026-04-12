/*
 * @Author: mulingyuer
 * @Date: 2026-04-12 00:00:00
 * @LastEditTime: 2026-04-12 00:00:00
 * @LastEditors: mulingyuer
 * @Description: 根据路由生成菜单
 * @FilePath: \element-admin-template\src\menu\generate-menu.ts
 * 怎么可能会有bug！！！
 */
import type { RouteRecordRaw } from "vue-router";

/** 解析路径 */
function resolvePath(parent: string, child: string): string {
	if (child.startsWith("/")) return child;
	if (!child) return parent;
	return `${parent}/${child}`.replace(/\/+/g, "/");
}

/** 菜单排序 */
export function sortMenus(menus: AdminApp.Menu[]): AdminApp.Menu[] {
	return menus.toSorted((a, b) => {
		const sortA = a.sort ?? Number.POSITIVE_INFINITY;
		const sortB = b.sort ?? Number.POSITIVE_INFINITY;
		return sortA - sortB;
	});
}

/**
 * 根据路由生成菜单
 *
 * 规则：
 * - isLayout: true 的路由为布局包装器，穿透到 children
 * - 有 meta.title 的路由为菜单项
 * - 无 meta.title 的路由对菜单透明，提升 children
 * - meta.isHide 为 true 的路由不生成菜单
 */
export function generateMenu(routes: RouteRecordRaw[], parentPath = ""): AdminApp.Menu[] {
	const menus: AdminApp.Menu[] = [];

	for (const route of routes) {
		// 隐藏的路由不生成菜单
		if (route.meta?.isHide) continue;

		const currentPath = resolvePath(parentPath, route.path);

		// 布局包装器 —— 穿透到 children
		if (route.meta?.isLayout) {
			if (route.children?.length) {
				menus.push(...generateMenu(route.children, currentPath));
			}
			continue;
		}

		// 有 title = 菜单项
		if (route.meta?.title) {
			const menu: AdminApp.Menu = {
				path: currentPath,
				name: (route.name as string) ?? "",
				title: route.meta.title,
				icon: route.meta.icon ?? void 0,
				sort: route.meta.sort
			};

			if (route.children?.length) {
				const children = generateMenu(route.children, currentPath);
				if (children.length) menu.children = children;
			}

			menus.push(menu);
			continue;
		}

		// 无 title —— 对菜单透明，提升 children
		if (route.children?.length) {
			menus.push(...generateMenu(route.children, currentPath));
		}
	}

	return sortMenus(menus);
}
