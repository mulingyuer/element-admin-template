/*
 * @Author: mulingyuer
 * @Date: 2026-04-11 16:46:54
 * @LastEditTime: 2026-04-11 16:49:49
 * @LastEditors: mulingyuer
 * @Description: 路由鉴权相关工具函数
 * @FilePath: \element-admin-template\src\router\router-auth\utils.ts
 * 怎么可能会有bug！！！
 */
import type { RouteLocationNormalized, RouteLocationNormalizedLoaded } from "vue-router";
import type { AuthType } from "./types";

/** 兼容各种环境下的路由对象结构 */
export type RouterAuthRouteLike =
	| RouteLocationNormalized
	| RouteLocationNormalizedLoaded
	| { meta: { auth?: AuthType[] } };

/**
 * 获取路由的鉴权配置，未配置时默认要求登录 (["required"])
 */
export function getRouteAuths(route: RouterAuthRouteLike): AuthType[] {
	return route.meta?.auth ?? ["required"];
}

/**
 * 检查路由是否包含指定的鉴权类型
 */
export function hasRouteAuth(route: RouterAuthRouteLike, auth: AuthType): boolean {
	const auths = getRouteAuths(route);
	return auths.includes(auth);
}

/** 判断是否为公开访问路由 (public) */
export function isPublicRoute(route: RouterAuthRouteLike): boolean {
	return hasRouteAuth(route, "public");
}

/** 判断是否为访客路由 (guest) */
export function isGuestRoute(route: RouterAuthRouteLike): boolean {
	return hasRouteAuth(route, "guest");
}

/** 判断当前路由是否为必须登录的页面（required） */
export function isLoginRequiredRoute(route: RouterAuthRouteLike): boolean {
	return hasRouteAuth(route, "required");
}
