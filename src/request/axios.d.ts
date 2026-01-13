/*
 * @Author: mulingyuer
 * @Date: 2026-01-13 12:10:01
 * @LastEditTime: 2026-01-13 12:10:01
 * @LastEditors: mulingyuer
 * @Description: axios 类型扩展
 * @FilePath: \element-admin-template\src\request\axios.d.ts
 * 怎么可能会有bug！！！
 */
import "axios";

declare module "axios" {
	export interface AxiosRequestConfig {
		/** 是否开启失败重试（供 axios-retry 使用），默认 true */
		enableRetry?: boolean;
		/** 出错时是否显示全局错误弹窗，默认 true */
		showErrorMessage?: boolean;
		/** 取消请求是否显示错误消息，默认 true。
		 * 注意：`showErrorMessage` 优先级大于该设置。这个配置你得在cancel的时候设置，例：
		 * ```typescript
		 *  const CancelToken = axios.CancelToken;
		 *  const source = CancelToken.source();
		 *  source.cancel("取消的原因", { showCancelErrorMessage: false });
		 *  ```
		 */
		showCancelErrorMessage?: boolean;
		/** 是否解包响应数据（直接返回 data 字段），默认 true */
		unpack?: boolean;
	}
}
