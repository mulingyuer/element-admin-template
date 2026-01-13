/*
 * @Author: mulingyuer
 * @Date: 2026-01-13 11:30:35
 * @LastEditTime: 2026-01-13 15:28:57
 * @LastEditors: mulingyuer
 * @Description: 异常捕获与通知
 * @FilePath: \element-admin-template\src\request\error-handler.ts
 * 怎么可能会有bug！！！
 */

import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from "axios";
import { isNetworkOrIdempotentRequestError } from "axios-retry";
import { ElNotification } from "element-plus";

/** 网络错误code值 */
export const NETWORK_ERROR_CODES = new Set([
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

export class ErrorHelper {
	/** 是否是失败重试错误 */
	static isRetryError(error: any): boolean {
		if (error instanceof AxiosError) {
			const isRetry = Boolean(error.config?.enableRetry);
			return isRetry && isNetworkOrIdempotentRequestError(error);
		}

		return false;
	}

	/** 从错误对象中判断是否显示错误消息弹窗 */
	static shouldShowErrorMessage(error: any): boolean {
		const showErrorMessage = Boolean((error as AxiosError)?.config?.showErrorMessage);
		const isCancelError = axios.isCancel(error);

		// 如果是取消请求的错误，进一步判断是否显示取消错误消息
		if (isCancelError) {
			const showCancelErrorMessage = Boolean((error as AxiosError)?.config?.showCancelErrorMessage);
			return showErrorMessage && showCancelErrorMessage;
		}

		return showErrorMessage;
	}

	/** 从error对象中获取错误消息 */
	static getErrorMessage(error: any): string {
		if (axios.isCancel(error)) return error.message ?? "请求被取消";

		// TODO: 请根据自己的项目需求修改
		if (error instanceof AxiosError) return error.response?.data?.message ?? error.message;
		if (error instanceof Error) return error.message;

		return "未知错误";
	}

	/** 判断请求是不是网络不通的错误 */
	static isNetworkError(error: any) {
		if (!Object.hasOwn(error, "code")) return false;

		return NETWORK_ERROR_CODES.has(error.code);
	}
}

export class RequestErrorHandler {
	/** 处理 HTTP 或网络级错误 */
	static handleHttpError(error: any) {
		// 失败重试会触发多次错误，这里忽略重试错误
		if (ErrorHelper.isRetryError(error)) return;

		if (ErrorHelper.shouldShowErrorMessage(error)) {
			this.notify("网络错误", ErrorHelper.getErrorMessage(error));
		}
	}

	/** 处理业务级错误（如接口返回 code: 500） */
	static handleBusinessError(response: AxiosResponse) {
		const { unpack } = response.config as AxiosRequestConfig;

		// 是否显示错误消息弹窗
		const showMessage = Boolean(response.config?.showErrorMessage);
		if (!showMessage) return;

		// 如果是非解包数据，那么响应值就不是预设格式，需要特殊处理
		const isUnpack = typeof unpack === "boolean" && !unpack;
		const isUnpackError = isUnpack && !response.data;
		if (isUnpackError) {
			this.notify("接口错误", "请求的响应数据不存在或格式错误");
			return;
		}

		// TODO: 请根据自己项目的接口返回格式修改
		const { code, message } = response.data;
		if (code !== 200) {
			this.notify("业务提示", message || "系统处理失败");
		}
	}

	/** 失败重试显示错误消息弹窗 */
	static showMaxRetryErrorMessage(error: AxiosError) {
		if (ErrorHelper.shouldShowErrorMessage(error)) {
			const message = ErrorHelper.getErrorMessage(error);
			this.notify("请求失败", message);
		}
	}

	/** 错误消息通知
	 * TODO: 根据项目需求实现
	 */
	static notify(title: string, message: string) {
		ElNotification({
			type: "error",
			title,
			message
		});
	}
}
