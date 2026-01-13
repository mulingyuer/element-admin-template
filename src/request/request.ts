/*
 * @Author: mulingyuer
 * @Date: 2026-01-13 11:29:57
 * @LastEditTime: 2026-01-13 15:27:58
 * @LastEditors: mulingyuer
 * @Description: axios 实例封装
 * @FilePath: \element-admin-template\src\request\request.ts
 * 怎么可能会有bug！！！
 */
import { useUserStore } from "@/stores";
import axios, { type AxiosRequestConfig } from "axios";
import axiosRetry, { isNetworkOrIdempotentRequestError } from "axios-retry";
import { ResponseTransformer } from "./transformer";
import type { RequestResult } from "./types";
import { RequestErrorHandler } from "./error-handler";

// 创建实例
const instance = axios.create({
	baseURL: import.meta.env.VITE_APP_API_BASE_URL,
	enableRetry: true,
	showErrorMessage: true,
	// showCancelErrorMessage: true, // 这里配置无效，索性注释了
	timeout: 15000, // ms
	unpack: true
});

// 注入失败重试插件
axiosRetry(instance, {
	retries: 3,
	retryCondition(error) {
		const { config } = error;
		// 仅在启用重试且符合默认条件下重试
		return Boolean(config?.enableRetry && isNetworkOrIdempotentRequestError(error));
	},
	retryDelay: (retryCount) => retryCount * 800, // 重试间隔
	onMaxRetryTimesExceeded: (error) => {
		// 显示错误消息
		RequestErrorHandler.showMaxRetryErrorMessage(error);
	}
});

// 请求拦截器
instance.interceptors.request.use((config) => {
	const userStore = useUserStore();

	// TODO: 根据实际情况修改
	// token
	if (userStore.token && !config.headers.Authorization) {
		config.headers.set("Authorization", `Bearer ${userStore.token}`);
	}

	return config;
});

// 响应拦截器
instance.interceptors.response.use(
	(response) => {
		// 响应错误弹窗
		RequestErrorHandler.handleBusinessError(response);

		// INFO: 不要在拦截器里解包，这样会导致请求重试时数据结构发生错误
		return response;
	},
	(error) => {
		// 显示错误消息
		RequestErrorHandler.handleHttpError(error);

		return Promise.reject(error);
	}
);

/** 面向业务侧的封装函数 */
export async function request<T>(config: AxiosRequestConfig): Promise<T> {
	const response = await instance.request<RequestResult<T>>(config);

	return ResponseTransformer.transform<T>(response);
}
