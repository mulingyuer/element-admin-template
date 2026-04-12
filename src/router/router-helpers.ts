/*
 * @Author: mulingyuer
 * @Date: 2024-09-26 17:54:10
 * @LastEditTime: 2026-04-12 16:00:00
 * @LastEditors: mulingyuer
 * @Description: 路由辅助函数
 * @FilePath: \element-admin-template\src\router\router-helpers.ts
 * 怎么可能会有bug！！！
 */
import { createWebHistory, createWebHashHistory } from "vue-router";

/** 根据VITE_APP_GITHUB_PREVIEW变量创建路由记录
 *  这个方法会在VITE_APP_GITHUB_PREVIEW为true时创建hash记录，用于github demo预览
 *  你可以去除这个方法自己固定路由记录，不会有任何影响
 */
export function createRouterHistory(base?: string) {
	const isGithubPreview = import.meta.env.VITE_APP_GITHUB_PREVIEW === "true";
	if (isGithubPreview) {
		return createWebHashHistory(base);
	}
	return createWebHistory(base);
}
