import { createRouter } from "vue-router";
import { rootRoute, notFoundRoute } from "./routes";
import { createRouterGuard } from "./guard";
import type { App } from "vue";
import { createRouterHistory } from "./helpers";

const router = createRouter({
	history: createRouterHistory(import.meta.env.BASE_URL),
	routes: [rootRoute, notFoundRoute],
	scrollBehavior: () => ({ left: 0, top: 0 })
});

export async function setupRouter(app: App) {
	app.use(router);
	await createRouterGuard(router);
	await router.isReady();
}

export default router;
