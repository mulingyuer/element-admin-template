/*
 * @Author: mulingyuer
 * @Date: 2025-01-17 10:01:42
 * @LastEditTime: 2025-01-17 10:07:10
 * @LastEditors: mulingyuer
 * @Description: 外链
 * @FilePath: \element-admin-template\src\router\route-modules\outbound-link.ts
 * 怎么可能会有bug！！！
 */
import type { RouteRecordRaw } from "vue-router";

export default {
	path: "https://github.com/mulingyuer/element-admin-template",
	name: "OutboundLink",
	component: h("div"),
	meta: {
		auth: "public",
		title: "Github仓库",
		icon: "ri-github-fill",
		sort: 40
	}
} as RouteRecordRaw;
