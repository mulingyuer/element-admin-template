/*
 * @Author: mulingyuer
 * @Date: 2026-04-11 16:46:54
 * @LastEditTime: 2026-04-11 17:18:57
 * @LastEditors: mulingyuer
 * @Description: 数据上下文
 * @FilePath: \element-admin-template\src\router\router-auth\context.ts
 * 怎么可能会有bug！！！
 */
import { useUserStore } from "@/stores";
import type { RouteLocationNormalized } from "vue-router";

/** 路由鉴权数据上下文 */
export class RouterAuthContext {
	/** 是否已登录 */
	isLogin: boolean;

	constructor(
		public to: RouteLocationNormalized,
		public form: RouteLocationNormalized
	) {
		const userStore = useUserStore();

		this.isLogin = userStore.isLogin;
	}
}
