/*
 * @Author: mulingyuer
 * @Date: 2026-04-12 00:00:00
 * @LastEditTime: 2026-04-12 17:52:53
 * @LastEditors: mulingyuer
 * @Description: 菜单模块入口
 * @FilePath: \element-admin-template\src\utils\menus\index.ts
 * 怎么可能会有bug！！！
 */
import { generateMenu, sortMenus } from "./menu-helpers";
import { customMenus } from "./custom-menus";
import { routes } from "@/router/routes";
import { useAppStore } from "@/stores";

/** 构建完整菜单列表（路由菜单 + 外链菜单） */
function generateMenuList(): AdminApp.Menu[] {
	const routeMenus = generateMenu(routes);
	console.log("🚀 ~ customMenus:", customMenus);

	return sortMenus([...routeMenus, ...customMenus]);
}

/** 初始化菜单 */
export function initMenus() {
	const appStore = useAppStore();
	const menuList = generateMenuList();

	appStore.setMenuList(menuList);
}
