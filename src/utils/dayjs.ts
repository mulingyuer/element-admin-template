/*
 * @Author: mulingyuer
 * @Date: 2024-10-11 17:10:47
 * @LastEditTime: 2025-12-25 10:20:05
 * @LastEditors: mulingyuer
 * @Description: dayjs封装
 * @FilePath: \element-admin-template\src\utils\dayjs.ts
 * 怎么可能会有bug！！！
 */
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");

/** 格式化日期 */
export function formatDate(date: Date | string | number, format: string): string {
	return dayjs(date).format(format);
}
