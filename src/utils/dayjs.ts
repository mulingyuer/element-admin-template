/*
 * @Author: mulingyuer
 * @Date: 2024-10-11 17:10:47
 * @LastEditTime: 2026-04-11 16:28:14
 * @LastEditors: mulingyuer
 * @Description: dayjs封装
 * @FilePath: \element-admin-template\src\utils\dayjs.ts
 * 怎么可能会有bug！！！
 */
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/zh-cn";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("zh-cn");

export { dayjs };

/** 格式化日期 */
export function formatDate(date: Date | string | number, format: string): string {
	return dayjs(date).format(format);
}

/** 格式化相对时间 */
export function formatRelativeTime(utcTimestamp: number): string {
	const now = dayjs();
	const target = dayjs(utcTimestamp); // 自动将时间戳转为本地时间
	const diffSeconds = now.diff(target, "second");
	const diffMinutes = now.diff(target, "minute");
	const diffHours = now.diff(target, "hour");
	const diffDays = now.diff(target, "day");

	if (diffSeconds <= 0) {
		return "刚刚"; // 未来时间视为“刚刚”或可抛出错误，依需求而定
	}

	if (diffSeconds < 60) {
		return `${diffSeconds}秒前`;
	}

	if (diffMinutes < 60) {
		return `${diffMinutes}分钟前`;
	}

	if (diffHours < 24) {
		return `${diffHours}小时前`;
	}

	if (diffDays < 30) {
		return `${diffDays}天前`;
	}

	// 精确计算月份差（考虑日历）
	const diffMonths = now.diff(target, "month");
	if (diffMonths < 12) {
		return `${diffMonths}月前`;
	}

	const diffYears = now.diff(target, "year");
	return `${diffYears}年前`;
}
