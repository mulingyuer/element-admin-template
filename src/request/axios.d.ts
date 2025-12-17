/*
 * @Author: mulingyuer
 * @Date: 2025-01-16 15:34:55
 * @LastEditTime: 2025-12-17 14:27:09
 * @LastEditors: mulingyuer
 * @Description: 扩展axios类型
 * @FilePath: \element-admin-template\src\request\axios.d.ts
 * 怎么可能会有bug！！！
 */
import "axios"; // 必须确保模块扩展的上下文是在 Axios 模块内

declare module "axios" {
	interface AxiosRequestConfig {
		/** 是否允许失败重试 */
		enableRetry?: boolean;
		/** 是否显示错误消息弹窗 */
		showErrorMessage?: boolean;
		/** 取消请求是否显示错误消息，注意：`showErrorMessage` 优先级大于该设置。
		 *  这个配置你得在cancel的时候设置，例：
		 * ```typescript
		 *  const CancelToken = axios.CancelToken;
		 *  const source = CancelToken.source();
		 *  source.cancel("取消的原因", { showCancelErrorMessage: false });
		 *  ```
		 */
		showCancelErrorMessage?: boolean;
		/** 是否解包响应的数据
		 *  默认：true
		 */
		unpack?: boolean;
	}
}
