/*
 * @Author: mulingyuer
 * @Date: 2024-09-29 09:13:25
 * @LastEditTime: 2024-09-30 17:15:32
 * @LastEditors: mulingyuer
 * @Description:
 * @FilePath: \spirit-app-microservice-admin\src\router\route-modules\test1.ts
 * 怎么可能会有bug！！！
 */
import type { RouteRecordRaw } from "vue-router";
// import { Config } from "@icon-park/vue-next";

export default {
	path: "/test1",
	name: "Test1",
	component: () => import("@/views/test/test1.vue"),
	meta: {
		title: "测试1",
		icon: "ri-arrow-up-circle-line",
		sort: 2
	}
} as RouteRecordRaw;
