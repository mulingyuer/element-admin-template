/*
 * @Author: mulingyuer
 * @Date: 2026-04-12 17:44:06
 * @LastEditTime: 2026-04-12 17:58:41
 * @LastEditors: mulingyuer
 * @Description: 自定义菜单入口
 * @FilePath: \element-admin-template\src\utils\menus\custom-menus\index.ts
 * 怎么可能会有bug！！！
 */
const globData: Record<string, any> = import.meta.glob(["./*.ts", "!./index.ts"], { eager: true });

const customMenus: AdminApp.Menu[] = [];

function pushMenus(value: any) {
	if (!value) return;
	if (Array.isArray(value)) {
		customMenus.push(...value);
	} else {
		customMenus.push(value);
	}
}

Object.values(globData).forEach((module) => {
	if (module.default) {
		pushMenus(module.default);
	} else {
		Object.values(module).forEach((namedExport: any) => pushMenus(namedExport));
	}
});

export { customMenus };
export default customMenus;
