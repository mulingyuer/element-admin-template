/*
 * @Author: mulingyuer
 * @Date: 2024-09-26 14:55:57
 * @LastEditTime: 2026-04-11 16:58:08
 * @LastEditors: mulingyuer
 * @Description: 路由类型
 * @FilePath: \element-admin-template\types\router.d.ts
 * 怎么可能会有bug！！！
 */
import type { AuthType } from "@/router/router-auth";
import type { IconMapKeys } from "@/constant/icon-map";

declare module "vue-router" {
	/** 路由配置项 */
	interface RouteMeta {
		/** 页面标题 */
		title?: string;
		/** 页面图标 */
		icon?: IconMapKeys;
		/** 是否隐藏菜单 */
		isHide?: boolean;
		/** 菜单排序 */
		sort?: number;
		/** 是否开启keepAlive */
		keepAlive?: boolean;
		/** 是否是访客页面 */
		auth?: AuthType[];
		/** 是否固定（不允许关闭） */
		affix?: boolean;
		/** 外链地址 */
		iframeLink?: string;
		/** 布局，指定layout名称或者false不使用布局，默认布局：default */
		layout?: string | false;
	}
}

export {};
