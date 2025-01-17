/*
 * @Author: mulingyuer
 * @Date: 2024-09-29 09:14:56
 * @LastEditTime: 2025-01-17 10:07:03
 * @LastEditors: mulingyuer
 * @Description:
 * @FilePath: \element-admin-template\src\router\route-modules\test2.ts
 * 怎么可能会有bug！！！
 */
import type { RouteRecordRaw } from "vue-router";

export default {
	path: "/test2",
	component: () => import("@/layout/admin-layout/index.vue"),
	meta: {
		title: "测试",
		icon: "ri-flask-line",
		sort: 30
	},
	children: [
		{
			path: "/test2/",
			name: "Test2",
			component: () => import("@/views/test/test2.vue"),
			meta: {
				title: "测试2",
				icon: "ri-flask-line",
				sort: 1
			}
		},
		{
			path: "/test2/test3",
			name: "Test3",
			component: () => import("@/views/test/test3.vue"),
			meta: {
				title: "测试3",
				icon: "ri-flask-line",
				sort: 2
			}
		}
	]
} as RouteRecordRaw;
