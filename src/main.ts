import { createApp } from "vue";
import { piniaStore } from "@/stores";
import App from "./App.vue";
import { setupRouter } from "./router";

// style
import "@/styles/index.scss";

// plugins
import { ElementPlusPlugin } from "@/plugins/element-plus";
import { CustomIconsPlugin } from "@/plugins/custom-icons";

async function setupApp() {
	const app = createApp(App);

	app.use(ElementPlusPlugin);
	app.use(CustomIconsPlugin);
	app.use(piniaStore);
	await setupRouter(app);

	app.mount("#app");
}

setupApp();
