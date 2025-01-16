/*
 * @Author: mulingyuer
 * @Date: 2024-09-27 15:32:20
 * @LastEditTime: 2025-01-16 15:42:09
 * @LastEditors: mulingyuer
 * @Description: auth请求接口
 * @FilePath: \element-admin-template\src\api\auth\index.ts
 * 怎么可能会有bug！！！
 */
import { request } from "@/request";
import type { LoginData, LoginResult } from "./types";
export type * from "./types";

/** 接口示例 */
export function login(data: LoginData) {
	return request<LoginResult>({
		url: "/auth/login",
		method: "post",
		data
	});
}
