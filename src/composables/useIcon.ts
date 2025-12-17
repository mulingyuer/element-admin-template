/*
 * @Author: mulingyuer
 * @Date: 2024-10-11 17:11:35
 * @LastEditTime: 2025-12-17 14:10:03
 * @LastEditors: mulingyuer
 * @Description: 函数式组件中使用icon的hook
 * @FilePath: \element-admin-template\src\composables\useIcon.ts
 * 怎么可能会有bug！！！
 */
import type { Component } from "vue";
import { ElIcon, type IconProps } from "element-plus";

export type UseIconProps = IconProps & { [x: string]: any };

export function useIcon(iconComponent: Component, props?: UseIconProps) {
	return h(ElIcon, props, { default: () => h(iconComponent) });
}
