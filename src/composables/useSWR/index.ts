/*
 * @Author: mulingyuer
 * @Date: 2025-12-27 21:33:44
 * @LastEditTime: 2026-01-06 10:54:53
 * @LastEditors: mulingyuer
 * @Description: api缓存组合式函数
 * @FilePath: \spirit-application-market\src\composables\useSWR\index.ts
 * 怎么可能会有bug！！！
 */
import { getCache, setCache } from "@/utils/cache";
import type { SWROptions } from "./types";
export type * from "./types";

/** 默认缓存5分钟 */
const DEFAULT_TTL = 5 * 60 * 1000;

export function useSWR<T>(
	key: string | Ref<string>,
	fetcher: (key: string) => Promise<T>,
	options: SWROptions = {}
) {
	const { ttl = DEFAULT_TTL, auto = true, persist = false, defaultData } = options;

	const data = shallowRef<T | null>(defaultData ?? null);
	const error = ref<Error | null>(null);
	const loading = ref(false);

	const currentKey = computed(() => (typeof key === "string" ? key : key.value));

	const fetchData = async (isRefresh = false) => {
		const k = currentKey.value;
		if (!k) return;

		// 重置错误
		error.value = null;

		// 读取缓存
		const cached = getCache<T>({ key: k, ttl, persist });

		// loading 策略
		const shouldSetLoading = isRefresh || !cached;
		if (shouldSetLoading) {
			loading.value = true;
		}

		// 命中缓存
		if (!isRefresh && cached) {
			data.value = cached;
		}

		try {
			// 静默刷新
			const result = await fetcher(k);

			// 竞态锁：如果在等待 fetcher 结果期间，key 发生了变化，则放弃此次结果
			if (currentKey.value !== k) return;

			// 更新缓存和数据
			setCache({ key: k, data: result, persist });
			data.value = result;

			return result;
		} catch (err) {
			error.value = err as Error;
			console.error(`[useSWR] Error for key "${k}":`, err);
		} finally {
			loading.value = false;
		}
	};

	/** 重新获取数据 */
	const refresh = () => fetchData(true);

	// 是否自动获取数据
	if (auto) {
		if (typeof key === "string") {
			fetchData();
		} else {
			watch(
				currentKey,
				(newKey, oldKey) => {
					if (newKey && newKey !== oldKey) {
						fetchData();
					}
				},
				{ immediate: true }
			);
		}
	}

	return {
		data,
		loading,
		error,
		refresh
	};
}
