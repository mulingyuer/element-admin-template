/*
 * @Author: mulingyuer
 * @Date: 2025-12-17 14:07:44
 * @LastEditTime: 2026-04-12 20:19:36
 * @LastEditors: mulingyuer
 * @Description: 图标映射，用于存放一些不方便传递组件类型的图标。比如：路由参数中的图标、NavTab中的图标
 * @FilePath: \element-admin-template\src\constant\icon-map.ts
 * 怎么可能会有bug！！！
 */
import RiSwap_2Line from "~icons/ri/swap-2-line";
import RiArrowUpCircleLine from "~icons/ri/arrow-up-circle-line";

export const ICON_MAP = {
	RiSwap_2Line,
	RiArrowUpCircleLine
} as const;

export type IconMapKeys = keyof typeof ICON_MAP;
