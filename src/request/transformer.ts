/*
 * @Author: mulingyuer
 * @Date: 2026-01-13 11:30:17
 * @LastEditTime: 2026-01-13 14:15:52
 * @LastEditors: mulingyuer
 * @Description: 响应数据转换器（解包）
 * @FilePath: \element-admin-template\src\request\transformer.ts
 * 怎么可能会有bug！！！
 */
import type { AxiosResponse } from "axios";
import type { RequestResult } from "./types";

export class ResponseTransformer {
	/** 核心解包转换逻辑
	 *  TODO: 请根据自己项目的接口返回格式修改
	 */
	static transform<T>(response: AxiosResponse<RequestResult<T>>): T | any {
		if (!response || !response.data) return null;
		const { unpack } = response.config;

		// 如果配置为不解包，返回原始包装对象
		if (unpack === false) return response.data;

		// 默认解包：返回业务 data 字段
		return response.data.data;
	}
}
