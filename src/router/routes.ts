/*
 * @Author: mulingyuer
 * @Date: 2026-04-12 17:06:52
 * @LastEditTime: 2026-04-12 17:37:37
 * @LastEditors: mulingyuer
 * @Description: 路由配置
 * @FilePath: \element-admin-template\src\router\routes.ts
 * 怎么可能会有bug！！！
 */
import { routes as autoRouts } from "vue-router/auto-routes";
import { setupLayouts } from "virtual:generated-layouts";

// 数组扩展，之后可能会有特殊路由来源，可以添加到这里
let routes = [...autoRouts];

// 处理布局
routes = setupLayouts(routes);

export { routes };
export default routes;
