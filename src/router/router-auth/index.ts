/*
 * @Author: mulingyuer
 * @Date: 2026-04-11 16:46:54
 * @LastEditTime: 2026-04-11 16:49:24
 * @LastEditors: mulingyuer
 * @Description: 路由鉴权
 * @FilePath: \element-admin-template\src\router\router-auth\index.ts
 * 怎么可能会有bug！！！
 */
import { StrategyMap } from "./strategy";
import { RouterAuthContext } from "./context";
import type { AuthType } from "./types";
export type * from "./types";
export * from "./utils";
export { RouterAuthContext };

import type { RouteLocationRaw } from "vue-router";

/**
 * 执行策略链
 * @param strategies 策略类型数组
 * @param context 路由鉴权上下文
 * @returns 验证通过返回 true，否则返回重定向路由或 false
 */
export function executeStrategies(
	strategies: AuthType[],
	context: RouterAuthContext
): boolean | RouteLocationRaw {
	for (const strategyType of strategies) {
		const strategy = StrategyMap[strategyType];
		if (!strategy) {
			console.warn(`[RouterAuth] 未知的策略类型: ${strategyType}`);
			continue;
		}

		const result = strategy.execute(context);
		if (result !== true) {
			// 策略未通过，返回重定向路由，结束for循环
			return result;
		}
	}

	// 全部策略通过
	return true;
}
