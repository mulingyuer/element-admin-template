/*
 * @Author: mulingyuer
 * @Date: 2024-09-26 17:38:16
 * @LastEditTime: 2025-12-17 15:57:41
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
		icon: "RiDashboard_3Line",
		auth: "required",
		affix: true,
		sort: 10
	}
} as RouteRecordRaw;
