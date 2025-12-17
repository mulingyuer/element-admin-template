/*
 * @Author: mulingyuer
 * @Date: 2025-10-12 16:20:48
 * @LastEditTime: 2025-12-17 16:06:37
 * @LastEditors: mulingyuer
 * @Description: 登录退出通用处理hooks
 * @FilePath: \element-admin-template\src\composables\useAuth.ts
 * 怎么可能会有bug！！！
 */
import { useUserStore, useNavTabStore } from "@/stores";

export function useAuth() {
	const userStore = useUserStore();
	const navTabStore = useNavTabStore();

	/** 登录通用处理 */
	async function login(token: string) {
		navTabStore.clearNavTabList();
		userStore.setToken(token);
	}

	/** 退出通用处理 */
	async function logout() {
		userStore.clearToken();
		setTimeout(() => {
			navTabStore.clearNavTabList();
		});
	}

	return {
		login,
		logout
	};
}
