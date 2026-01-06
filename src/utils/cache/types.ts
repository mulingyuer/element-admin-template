/*
 * @Author: mulingyuer
 * @Date: 2025-12-27 21:44:20
 * @LastEditTime: 2025-12-27 21:58:19
 * @LastEditors: mulingyuer
 * @Description: 缓存工具类型
 * @FilePath: \spirit-application-market\src\utils\cache\types.ts
 * 怎么可能会有bug！！！
 */

/** 缓存项 */
export interface CacheItem<T = any> {
	data: T;
	timestamp: number;
}

export type CacheValue<T> = T | null;

/** 获取缓存参数 */
export interface GetCacheOptions {
	/** key */
	key: string;
	/** ttl，缓存过期时间，单位毫秒，5分钟 = 5 * 60 * 1000 */
	ttl: number;
	/** 是否使用持久化缓存，默认false */
	persist?: boolean;
}

/** 写入缓存参数 */
export interface SetCacheOptions<T> {
	/** key */
	key: string;
	/** 数据 */
	data: T;
	/** 是否使用持久化缓存，默认false */
	persist?: boolean;
}
