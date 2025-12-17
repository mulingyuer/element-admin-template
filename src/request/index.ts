/*
 * @Author: mulingyuer
 * @Date: 2024-09-25 16:18:08
 * @LastEditTime: 2025-12-17 14:26:21
 * @LastEditors: mulingyuer
 * @Description: 请求封装
 * @FilePath: \element-admin-template\src\request\index.ts
 * 怎么可能会有bug！！！
 */
import { instance } from "./core";
import type { AxiosRequestConfig } from "axios";
export { isNetworkError } from "./helper";

/** 请求函数 */
export function request<T>(config: AxiosRequestConfig): Promise<T> {
	return instance.request(config).then((response) => {
		if (!response?.data) return null;

		// 非解包数据
		const { unpack } = response.config;
		if (!unpack) return response.data;

		// 解包处理
		const { data } = response.data as RequestResult;

		return data;
	});
}
