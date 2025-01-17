/*
 * @Author: mulingyuer
 * @Date: 2024-09-26 17:38:16
 * @LastEditTime: 2025-01-17 10:06:47
 * @LastEditors: mulingyuer
 * @Description: 仪表盘
 * @FilePath: \element-admin-template\src\router\route-modules\dashboard.ts
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
		affix: true,
		sort: 10
	}
} as RouteRecordRaw;
