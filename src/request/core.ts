/*
 * @Author: mulingyuer
 * @Date: 2024-09-25 16:18:26
 * @LastEditTime: 2024-09-25 16:52:56
 * @LastEditors: mulingyuer
 * @Description: 请求核心
 * @FilePath: \spirit-app-microservice-admin\src\request\core.ts
 * 怎么可能会有bug！！！
 */
import axios, { AxiosError } from "axios";
import axiosRetry from "axios-retry";
import type { RequestConfig } from "./types";
import { useUserStore } from "@/stores";

const instance = axios.create();
let userStore: ReturnType<typeof useUserStore>;

// 失败重试
axiosRetry(instance, {
	retries: 3,
	retryCondition(error: AxiosError) {
		const config: RequestConfig | undefined = error?.config;
		if (!config) return false;
		if (config.enableRetry) return true;
		return false;
	}
});

/** 请求前拦截器 */
instance.interceptors.request.use((config) => {
	if (!userStore) userStore = useUserStore();

	// 请求头
	if (userStore.token && !config.headers.Authorization) {
		config.headers.set("Authorization", `Bearer ${userStore.token}`);
	}

	return config;
});

/** 响应后拦截器 */
instance.interceptors.response.use(
	(response) => {
		// 根据项目情况做解包处理
		return response.data;
	},
	(error) => {
		let message = "未知错误";

		if (axios.isCancel(error)) {
			// 请求被取消
			message = error.message ?? "请求被取消";
		} else if (error instanceof AxiosError) {
			// AxiosError
			message = error.response?.data?.message ?? error.message;
		} else if (error instanceof Error) {
			// Error
			message = error.message;
		}

		// 消息提示
		ElNotification({
			type: "error",
			title: "请求失败",
			message
		});

		return Promise.reject(new Error(message));
	}
);

/** 设置请求的baseUrl */
function setBaseUrl(baseUrl: string) {
	instance.defaults.baseURL = baseUrl;
}

export { instance, setBaseUrl };
