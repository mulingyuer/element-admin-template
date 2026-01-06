/*
 * @Author: mulingyuer
 * @Date: 2025-01-21 11:35:22
 * @LastEditTime: 2026-01-06 15:33:29
 * @LastEditors: mulingyuer
 * @Description: 工具函数
 * @FilePath: \element-admin-template\src\utils\tools.ts
 * 怎么可能会有bug！！！
 */

/** 将字符串转换为大驼峰 */
export function toCamelCase(str: string) {
	return str
		.replace(/[-_]+/g, " ") // 将破折号和下划线替换为空格
		.split(" ") // 按空格分隔
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // 每个单词首字母大写
		.join(""); // 重新连接成字符串
}

/** 拼接应用前缀的key */
export function joinPrefixKey(key: string, prefix?: string) {
	prefix = prefix ?? import.meta.env.VITE_APP_LOCAL_KEY_PREFIX;

	return `${prefix}${key}`;
}

/** 准确计算出字符数量 */
export function countStringLength(str: string) {
	if (typeof Intl.Segmenter !== "undefined") {
		const segmenter = new Intl.Segmenter();
		return Array.from(segmenter.segment(str)).length;
	}

	return [...str].length;
}
