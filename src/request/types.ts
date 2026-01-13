/*
 * @Author: mulingyuer
 * @Date: 2026-01-13 11:31:21
 * @LastEditTime: 2026-01-13 12:12:14
 * @LastEditors: mulingyuer
 * @Description: 类型定义
 * @FilePath: \element-admin-template\src\request\types.ts
 * 怎么可能会有bug！！！
 */

/** 成功业务数据的通用结果包装
 * TODO: 请根据自己项目的接口返回格式修改
 */
export interface RequestResult<T = any> {
	code: number;
	data: T;
	message: string;
}
