/*
 * @Author: mulingyuer
 * @Date: 2026-01-26 16:30:26
 * @LastEditTime: 2026-01-26 16:30:26
 * @LastEditors: mulingyuer
 * @Description: 内存ref，同一个key的ref是同一个引用
 * @FilePath: \element-admin-template\src\utils\ref\memoryRef.ts
 * 怎么可能会有bug！！！
 */
import { ref } from "vue";
import type { Ref } from "vue";

export type MemoryRefKey = string | symbol;

/** map缓存 */
const refStore = new Map<MemoryRefKey, Ref<any>>();

export function memoryRef<T>(key: MemoryRefKey, initialValue: T): Ref<T> {
	if (refStore.has(key)) {
		return refStore.get(key) as Ref<T>;
	}

	const newRef = ref(initialValue);
	refStore.set(key, newRef);

	return newRef as Ref<T>;
}

/** 移除指定的key的缓存 */
export function removeMemoryRef(key: MemoryRefKey) {
	refStore.delete(key);
}
