/*
 * @Author: mulingyuer
 * @Date: 2025-02-08 19:54:09
 * @LastEditTime: 2025-12-17 15:58:06
 * @LastEditors: mulingyuer
 * @Description: iframe页面路由
 * @FilePath: \element-admin-template\src\router\route-modules\iframe.ts
 * 怎么可能会有bug！！！
 */
import type { RouteRecordRaw } from "vue-router";

export default [
	{
		path: "/iframe",
		component: () => import("@/layout/admin-layout/index.vue"),
		meta: {
			title: "iframe页面",
			icon: "RiWindowLine",
			sort: 40
		},
		children: [
			{
				path: "/iframe/github",
				component: () => import("@/views/iframe/index.vue"),
				meta: {
					title: "github",
					icon: "RiGithubLine",
					iframeLink: "https://mulingyuer.github.io/element-admin-template/#"
				}
			}
		]
	}
] as RouteRecordRaw[];
