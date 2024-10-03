/*
 * @Author: mulingyuer
 * @Date: 2024-09-26 17:38:16
 * @LastEditTime: 2024-09-30 17:17:33
 * @LastEditors: mulingyuer
 * @Description: 仪表盘
 * @FilePath: \spirit-app-microservice-admin\src\router\route-modules\dashboard.ts
 * 怎么可能会有bug！！！
 */
import type { RouteRecordRaw } from "vue-router";

export default {
	path: "/dashboard",
	name: "Dashboard",
	component: () => import("@/views/dashboard/index.vue"),
	meta: {
		title: "仪表盘",
		icon: "ri-dashboard-3-line",
		auth: "required",
		affix: true
	}
} as RouteRecordRaw;
