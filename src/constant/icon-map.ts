/*
 * @Author: mulingyuer
 * @Date: 2025-12-17 14:07:44
 * @LastEditTime: 2025-12-17 16:07:24
 * @LastEditors: mulingyuer
 * @Description: 图标映射，用于存放一些不方便传递组件类型的图标。比如：路由参数中的图标、NavTab中的图标
 * @FilePath: \element-admin-template\src\constant\icon-map.ts
 * 怎么可能会有bug！！！
 */
import RiCalendarCloseLine from "~icons/ri/calendar-close-line";
import RiSwap_2Line from "~icons/ri/swap-2-line";
import RiDashboard_3Line from "~icons/ri/dashboard-3-line";
import RiWindowLine from "~icons/ri/window-line";
import RiGithubLine from "~icons/ri/github-line";
import RiGithubFill from "~icons/ri/github-fill";
import RiArrowUpCircleLine from "~icons/ri/arrow-up-circle-line";
import RiFlaskLine from "~icons/ri/flask-line";

export const ICON_MAP = {
	RiCalendarCloseLine,
	RiSwap_2Line,
	RiDashboard_3Line,
	RiWindowLine,
	RiGithubLine,
	RiGithubFill,
	RiArrowUpCircleLine,
	RiFlaskLine
} as const;

export type IconMapKeys = keyof typeof ICON_MAP;
