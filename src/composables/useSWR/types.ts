/*
 * @Author: mulingyuer
 * @Date: 2025-12-27 22:06:44
 * @LastEditTime: 2025-12-29 11:17:13
 * @LastEditors: mulingyuer
 * @Description: api缓存组合式函数类型
 * @FilePath: \spirit-application-market\src\composables\useSWR\types.ts
 * 怎么可能会有bug！！！
 */

export interface SWROptions {
	/** 缓存时间，单位毫秒，5分钟 = 5 * 60 * 1000 */
	ttl?: number;
	/**  */
	auto?: boolean;
	/** 是否持久化（必须配合有效 key） */
	persist?: boolean;
	/** 默认值 */
	defaultData?: any;
}
