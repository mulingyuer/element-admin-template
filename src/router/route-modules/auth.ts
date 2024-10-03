/*
 * @Author: mulingyuer
 * @Date: 2024-09-26 17:28:28
 * @LastEditTime: 2024-09-29 15:50:55
 * @LastEditors: mulingyuer
 * @Description: auth模块路由
 * @FilePath: \spirit-app-microservice-admin\src\router\route-modules\auth.ts
 * 怎么可能会有bug！！！
 */
import type { RouteRecordRaw } from "vue-router";

export default {
	path: "/auth",
	component: () => import("@/layout/blank-layout/index.vue"),
	meta: {
		isHide: true
	},
	children: [
		{
			path: "/auth/login",
			name: "Login",
			component: () => import("@/views/login/index.vue"),
			meta: {
				title: "登录",
				auth: "guest"
			}
		}
	]
} as RouteRecordRaw;
