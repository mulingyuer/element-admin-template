/*
 * @Author: mulingyuer
 * @Date: 2026-04-11 16:46:54
 * @LastEditTime: 2026-04-11 16:47:56
 * @LastEditors: mulingyuer
 * @Description: 必须登录的策略
 * @FilePath: \element-admin-template\src\router\router-auth\strategy\required-strategy.ts
 * 怎么可能会有bug！！！
 */
import { RouterAuthContext } from "../context";
import type { AuthStrategy } from "../types";
import type { RouteLocationRaw } from "vue-router";

export class RequiredStrategy implements AuthStrategy {
	execute(context: RouterAuthContext): boolean | RouteLocationRaw {
		const { isLogin, to } = context;

		if (!isLogin) {
			// 未登录，返回登录页面路由
			return { name: "Login", query: { redirect: to.fullPath } };
		}

		// 已登录，允许继续
		return true;
	}
}
