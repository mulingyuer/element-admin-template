/*
 * @Author: mulingyuer
 * @Date: 2025-01-21 11:35:22
 * @LastEditTime: 2026-04-11 16:28:43
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

/** 模拟延迟 */
export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/** 随机指定范围的整数 */
export function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** 脱敏配置项 */
export interface MaskOptions {
	/** 开头保留字符数，默认 3 */
	start?: number;
	/** 结尾保留字符数，默认 3 */
	end?: number;
	/** 掩码字符，默认 '*' */
	maskChar?: string;
	/** 中间固定显示的掩码数量，默认 6 */
	maskCount?: number;
	/** 是否显示完整内容（用于切换显示），默认 false */
	showFull?: boolean;
}

/**
 * 星号隐藏字符串 - 支持配置对象
 * @param str - 原始字符串
 * @param options - 脱敏配置项
 * @returns 脱敏后的字符串
 */
export function maskString(str: string, options: MaskOptions = {}): string {
	const { start = 3, end = 3, maskChar = "*", maskCount = 6, showFull = false } = options;

	// 显示完整内容（用于切换）
	if (showFull) return str;

	// 空值/非字符串处理
	if (!str || typeof str !== "string" || str.trim() === "") {
		return maskChar.repeat(Math.min(maskCount, 3));
	}

	const strLength = str.length;

	// 边界处理：字符串太短，无法保留首尾 → 直接返回固定数量掩码
	if (start + end >= strLength) {
		return maskChar.repeat(maskCount);
	}

	const startPart = str.slice(0, start);
	const endPart = end > 0 ? str.slice(-end) : "";

	return `${startPart}${maskChar.repeat(maskCount)}${endPart}`;
}

/** 格式化秒数为可读时间字符串（支持组合显示） */
export function formatSeconds(
	seconds: number,
	options?: {
		/** 最多显示几个时间单位，默认显示所有非零单位 */
		maxUnits?: number;
		/** 是否使用简短格式：小时→时，分钟→分，秒→秒（天不变） */
		short?: boolean;
		/** 单位之间的分隔符，默认空字符串 */
		separator?: string;
		/** 是否显示为0时返回 "0秒"，默认 true */
		showZero?: boolean;
	}
): string {
	if (seconds < 0) seconds = 0;

	const { maxUnits = Infinity, short = false, separator = "", showZero = true } = options ?? {};

	// 时间单位配置（按从大到小排序）
	const units: Array<{
		value: number;
		name: { full: string; short: string };
	}> = [
		{ value: 24 * 60 * 60, name: { full: "天", short: "天" } },
		{ value: 60 * 60, name: { full: "小时", short: "时" } },
		{ value: 60, name: { full: "分钟", short: "分" } },
		{ value: 1, name: { full: "秒", short: "秒" } }
	];

	let remaining = Math.floor(seconds);
	const parts: string[] = [];

	for (const unit of units) {
		// 达到最大显示单位数则停止
		if (parts.length >= maxUnits) break;

		const count = Math.floor(remaining / unit.value);
		if (count > 0) {
			const label = short ? unit.name.short : unit.name.full;
			parts.push(`${count}${label}`);
			remaining %= unit.value; // 更新余数
		}
	}

	// 处理全0情况
	if (parts.length === 0) {
		if (showZero) {
			const label = short ? "秒" : "秒";
			return `0${label}`;
		}
		return "";
	}

	return parts.join(separator);
}

/** 字符串转base64 */
export function stringToBase64(str: string): string {
	return btoa(
		encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
			String.fromCharCode(Number("0x" + p1))
		)
	);
}

/** base64转字符串 */
export function base64ToString(base64Str: string): string {
	return decodeURIComponent(
		atob(base64Str)
			.split("")
			.map(function (c) {
				return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join("")
	);
}

/** a链接下载文件 */
export function downloadFile(url: string, filename?: string) {
	// 创建一个临时a标签来触发下载
	const link = document.createElement("a");
	link.href = url;
	link.download = filename ?? "";
	link.target = "_blank";

	// 使用MouseEvent初始化点击事件
	const clickEvent = new MouseEvent("click", {
		view: window,
		bubbles: true,
		cancelable: false
	});
	link.dispatchEvent(clickEvent);

	// 销毁
	link.remove();
}
