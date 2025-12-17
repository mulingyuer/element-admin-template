/*
 * @Author: mulingyuer
 * @Date: 2025-12-17 14:28:05
 * @LastEditTime: 2025-12-17 14:28:06
 * @LastEditors: mulingyuer
 * @Description: 请求全局类型
 * @FilePath: \element-admin-template\types\request.d.ts
 * 怎么可能会有bug！！！
 */

/** 请求结果的结构 */
declare interface RequestResult<T = any> {
	data: T;
	/** 消息 */
	message: string;
	/** 状态码 */
	code: number;
}
