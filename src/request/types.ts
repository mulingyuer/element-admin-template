/*
 * @Author: mulingyuer
 * @Date: 2024-09-25 16:21:59
 * @LastEditTime: 2024-09-25 16:21:59
 * @LastEditors: mulingyuer
 * @Description: 请求类型
 * @FilePath: \spirit-app-microservice-admin\src\request\types.ts
 * 怎么可能会有bug！！！
 */
import type { AxiosRequestConfig } from "axios";

/** 请求配置 */
export interface RequestConfig extends AxiosRequestConfig {
	/** 是否允许失败重试 */
	enableRetry?: boolean;
}
