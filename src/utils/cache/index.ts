/*
 * @Author: mulingyuer
 * @Date: 2025-12-27 21:44:07
 * @LastEditTime: 2026-01-06 11:24:56
 * @LastEditors: mulingyuer
 * @Description: 缓存工具
 * @FilePath: \spirit-application-market\src\utils\cache\index.ts
 * 怎么可能会有bug！！！
 */
import { useLocalStorage } from "@vueuse/core";
import type { CacheItem, GetCacheOptions, SetCacheOptions } from "./types";
export type * from "./types";
import { joinPrefixKey } from "@/utils/tools";

// 内存缓存
const memoryCache = new Map<string, CacheItem>();
// 持久化缓存
const persistentCache = useLocalStorage<Record<string, CacheItem>>(joinPrefixKey("cache"), {});

/** 读取缓存的数据 */
export function getCache<T>(options: GetCacheOptions): T | null {
	const { key, ttl, persist = false } = options;

	if (!key) return null;

	let item: CacheItem | undefined;
	if (persist) {
		item = persistentCache.value[key];
	} else {
		item = memoryCache.get(key);
	}

	// 判断ttl
	if (item && Date.now() - item.timestamp < ttl) {
		return item.data;
	}

	// 过期清理
	removeCache(key, persist);

	return null;
}

/** 写入缓存 */
export function setCache<T>(options: SetCacheOptions<T>): void {
	const { key, data, persist = false } = options;

	if (!key) return;

	const item: CacheItem = {
		data,
		timestamp: Date.now()
	};

	if (persist) {
		persistentCache.value[key] = item;
	} else {
		memoryCache.set(key, item);
	}
}

/** 删除缓存项 */
export function removeCache(key: string, persist = false): void {
	if (!key) return;

	if (persist) {
		delete persistentCache.value[key];
	} else {
		memoryCache.delete(key);
	}
}

/**清空所有缓存（调试用）*/
export function clearAllCache(): void {
	memoryCache.clear();
	persistentCache.value = {};
}
