import { createRouter } from "vue-router";
import { createRouterGuard } from "./router-guard";
import type { App } from "vue";
import { createRouterHistory } from "./helpers";
import { routes } from "vue-router/auto-routes";
import { setupLayouts } from "virtual:generated-layouts";

const router = createRouter({
	history: createRouterHistory(import.meta.env.BASE_URL),
	routes: setupLayouts(routes),
	scrollBehavior: () => ({ left: 0, top: 0 })
});

export async function setupRouter(app: App) {
	app.use(router);
	await createRouterGuard(router);
	await router.isReady();
}

// TODO: 这个有问题，会导致layout丢失，应该是有bug，先注释掉
// 这将在运行时更新路由而无需重新加载页面
// if (import.meta.hot) {
// 	handleHotUpdate(router, (newRoutes) => {
// 		return setupLayouts(newRoutes);
// 	});
// }

export default router;
