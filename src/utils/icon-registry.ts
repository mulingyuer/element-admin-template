/*
 * @Author: mulingyuer
 * @Date: 2026-04-12 00:00:00
 * @LastEditTime: 2026-04-12 00:00:00
 * @LastEditors: mulingyuer
 * @Description: 图标注册表，将字符串 key 映射到图标组件
 * @FilePath: \element-admin-template\src\utils\icon-registry.ts
 * 怎么可能会有bug！！！
 */
import type { Component } from "vue";
import RiDashboard3Line from "~icons/ri/dashboard-3-line";
import RiFlaskLine from "~icons/ri/flask-line";
import RiGithubFill from "~icons/ri/github-fill";
import RiGithubLine from "~icons/ri/github-line";
import RiWindowLine from "~icons/ri/window-line";
import RiCalendarCloseLine from "~icons/ri/calendar-close-line";

const iconRegistry = {
	"ri/dashboard-3-line": RiDashboard3Line,
	"ri/flask-line": RiFlaskLine,
	"ri/github-fill": RiGithubFill,
	"ri/github-line": RiGithubLine,
	"ri/window-line": RiWindowLine,
	"ri/calendar-close-line": RiCalendarCloseLine
} as const satisfies Record<string, Component>;

/** 图标注册表的 key 类型 */
export type IconKey = keyof typeof iconRegistry;

/** 根据 key 获取图标组件 */
export function getIconComponent(key: IconKey): Component | undefined {
	return iconRegistry[key];
}
