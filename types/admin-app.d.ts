/*
 * @Author: mulingyuer
 * @Date: 2024-09-27 17:02:33
 * @LastEditTime: 2024-09-30 11:08:18
 * @LastEditors: mulingyuer
 * @Description: 应用全局类型定义
 * @FilePath: \spirit-app-microservice-admin\types\admin-app.d.ts
 * 怎么可能会有bug！！！
 */

declare namespace AdminApp {
	/** 菜单数据类型 */
	interface Menu {
		path: string;
		name: string;
		title: string;
		icon?: string;
		children?: Menu[];
	}
	/** navTab数据类型 */
	interface NavTabData {
		fullPath: string;
		name?: string;
		title?: string;
		icon?: string;
		/** 是否固定（不允许关闭） */
		affix?: boolean;
	}
}
