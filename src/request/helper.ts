/*
 * @Author: mulingyuer
 * @Date: 2025-01-16 15:48:18
 * @LastEditTime: 2025-12-17 14:25:14
 * @LastEditors: mulingyuer
 * @Description: 请求辅助函数
 * @FilePath: \element-admin-template\src\request\helper.ts
 * 怎么可能会有bug！！！
 */
import { AxiosError, type AxiosRequestConfig, type AxiosResponse } from "axios";
import axios from "axios";
import { isNetworkOrIdempotentRequestError } from "axios-retry";

/** 失败重试显示错误消息弹窗 */
export function showMaxRetryErrorMessage(error: AxiosError) {
	if (shouldShowErrorMessage(error)) {
		showErrorMessage(getErrorMessage(error));
	}
}

/** 显示请求错误消息弹窗 */
export function showRequestErrorMessage(error: any) {
	if (isRetryError(error)) return;
	if (shouldShowErrorMessage(error)) {
		showErrorMessage(getErrorMessage(error));
	}
}

/** 显示错误消息 */
export function showErrorMessage(message: string) {
	ElNotification({
		type: "error",
		title: "请求失败",
		message: message ?? "请求失败"
	});
}

/** 成功响应的错误消息 */
export function showResponseErrorMessage(response: AxiosResponse) {
	const { unpack } = response.config as AxiosRequestConfig;

	// 是否显示错误消息弹窗
	const showMessage = shouldShowErrorMessageByConfig(response.config);
	if (!showMessage) return;

	// 如果是非解包数据，那么响应值就不是预设格式，需要特殊处理
	const isUnpack = typeof unpack === "boolean" && !unpack;
	const isUnpackError = isUnpack && !response.data;
	if (isUnpackError) {
		showErrorMessage("请求的响应数据不存在或格式错误");
		return;
	}

	// TODO: 请根据自己项目的接口返回格式修改
	const { code, message } = response.data;
	if (code !== 200) {
		showErrorMessage(message);
	}
}

/** 根据axios的config判断是否显示错误消息 */
function shouldShowErrorMessageByConfig(config: AxiosRequestConfig) {
	if (!config) return true;
	return config?.showErrorMessage ?? true;
}

/** 根据axios的error判断是否显示错误消息 */
function shouldShowErrorMessage(error: any) {
	const showErrorMessage = shouldShowErrorMessageByConfig(error.config);
	// 取消请求相关错误
	const config = (error as AxiosError)?.config;
	const showCancelErrorMessage = config?.showCancelErrorMessage ?? true;
	if (axios.isCancel(error)) {
		return showErrorMessage && showCancelErrorMessage;
	}
	return showErrorMessage;
}

/** 是否是失败重试错误 */
function isRetryError(error: any) {
	if (error instanceof AxiosError) {
		const isRetry = error.config?.enableRetry ?? true;
		return isRetry && isNetworkOrIdempotentRequestError(error);
	}
	return true;
}

/** 获取错误消息 */
function getErrorMessage(error: any): string {
	if (axios.isCancel(error)) return error.message ?? "请求被取消";
	// TODO: 请根据自己的项目需求修改
	if (error instanceof AxiosError) return error.response?.data?.message ?? error.message;
	if (error instanceof Error) return error.message;

	return "未知错误";
}

/** 网络错误code值 */
const NETWORK_ERROR_CODES = new Set([
	"ECONNABORTED", // 请求被中止。常与请求超时有关
	"ECONNREFUSED", // 连接被目标服务器拒绝
	"ECONNRESET", // 连接被重置。这通常表示远程服务器意外关闭了连接
	"ENOTFOUND", // DNS 查询失败，域名无法找到
	"ETIMEDOUT", // 请求超时
	"EHOSTUNREACH", // 网络无法到达主机
	"ERR_NETWORK", // 网络错误，一般是因为网络请求失败
	"ERR_INTERNET_DISCONNECTED", // 网络连接已断开
	"ERR_NETWORK_CHANGED", // 网络连接发生了变化
	"ERR_CONNECTION_TIMED_OUT", // 连接超时
	"ERR_NAME_NOT_RESOLVED" //DNS 解析失败
]);

/** 判断请求是不是网络不通的错误 */
export function isNetworkError(error: any) {
	if (!Object.hasOwn(error, "code")) return false;

	return NETWORK_ERROR_CODES.has(error.code);
}
