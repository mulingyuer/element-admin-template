/*
 * @Author: mulingyuer
 * @Date: 2026-04-11 16:46:54
 * @LastEditTime: 2026-04-11 16:48:18
 * @LastEditors: mulingyuer
 * @Description: 策略入口
 * @FilePath: \element-admin-template\src\router\router-auth\strategy\index.ts
 * 怎么可能会有bug！！！
 */
import type { AuthType, AuthStrategy } from "../types";
import { PublicStrategy } from "./public-strategy";
import { GuestStrategy } from "./guest-strategy";
import { RequiredStrategy } from "./required-strategy";

export const StrategyMap: Record<AuthType, AuthStrategy> = {
	public: new PublicStrategy(),
	guest: new GuestStrategy(),
	required: new RequiredStrategy()
};
