/*
 * @Author: mulingyuer
 * @Date: 2025-12-17 14:11:40
 * @LastEditTime: 2025-12-17 16:06:21
 * @LastEditors: mulingyuer
 * @Description: 模态框管理类型
 * @FilePath: \element-admin-template\src\composables\useModal\types.ts
 * 怎么可能会有bug！！！
 */
import type { Component } from "vue";

/** 弹窗持久化配置 */
export interface PersistentOptions {
	/** 手动指定唯一 key（推荐） */
	key?: string;
	/** 根据 props 动态生成 key */
	keyGenerator?: (props: Record<string, any>) => string;
	/** 全局单例模式（整个应用只有一个实例，无论 props 是什么） */
	singleton?: boolean;
}

/** 打开弹窗参数 */
export interface OpenOptions {
	/** 弹窗组件 */
	component: Component;
	/** props */
	props?: Record<string, any>;
	/** 是否常驻 */
	persistent?: boolean | PersistentOptions;
}

/** 弹窗实例 */
export type ModalInstance<T = any> = {
	modalId: symbol;
	visible: boolean;
	component: Component;
	props?: Record<string, any>;
	resolve: undefined | ((value: T) => void);
	reject: undefined | ((reason?: any) => void);
};

/** 受控的弹窗组件基础props */
export interface BaseModalProps {
	modalId: symbol;
}

/** 受控的弹窗组件基础emit事件 */
export interface BaseModalEmit {
	confirm: [val: any];
	cancel: [reason?: any];
}
