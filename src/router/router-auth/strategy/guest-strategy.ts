/*
 * @Author: mulingyuer
 * @Date: 2026-04-11 16:46:54
 * @LastEditTime: 2026-04-11 16:47:07
 * @LastEditors: mulingyuer
 * @Description: 访客路由策略
 * @FilePath: \element-admin-template\src\router\router-auth\strategy\guest-strategy.ts
 * 怎么可能会有bug！！！
 */
import { RouterAuthContext } from "../context";
import type { AuthStrategy } from "../types";

import type { RouteLocationRaw } from "vue-router";

export class GuestStrategy implements AuthStrategy {
	execute(context: RouterAuthContext): boolean | RouteLocationRaw {
		const { isLogin } = context;

		if (isLogin) {
			// 已登录用户访问访客页面，返回首页路由
			return { name: "Dashboard" };
		}

		// 未登录，允许访问
		return true;
	}
}
