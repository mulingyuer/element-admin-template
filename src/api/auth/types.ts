/*
 * @Author: mulingyuer
 * @Date: 2025-01-16 10:20:30
 * @LastEditTime: 2025-01-16 10:21:58
 * @LastEditors: mulingyuer
 * @Description: auth请求接口
 * @FilePath: \element-admin-template\src\api\auth\types.ts
 * 怎么可能会有bug！！！
 */

/** 接口示例参数 */
export interface LoginData {
	/** 账号 */
	account: string;
	/** 密码 */
	password: string;
	/** 验证码 */
	code: string;
	/** 验证码key */
	key: string;
}

/** 接口示例结果 */
export interface LoginResult {
	/** token */
	token: string;
}
