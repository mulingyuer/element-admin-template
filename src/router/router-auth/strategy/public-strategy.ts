/*
 * @Author: mulingyuer
 * @Date: 2026-04-11 16:46:54
 * @LastEditTime: 2026-04-11 16:47:25
 * @LastEditors: mulingyuer
 * @Description: 公开路由策略
 * @FilePath: \element-admin-template\src\router\router-auth\strategy\public-strategy.ts
 * 怎么可能会有bug！！！
 */
import { RouterAuthContext } from "../context";
import type { AuthStrategy } from "../types";

export class PublicStrategy implements AuthStrategy {
	execute(_context: RouterAuthContext): boolean {
		// 公开路由，直接通过
		return true;
	}
}
