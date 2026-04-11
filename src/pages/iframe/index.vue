<!--
 * @Author: mulingyuer
 * @Date: 2026-04-11 17:01:29
 * @LastEditTime: 2026-04-11 17:04:13
 * @LastEditors: mulingyuer
 * @Description: iframe页面
 * @FilePath: \element-admin-template\src\pages\iframe\index.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="iframe-page">
		<div class="iframe-content-wrapper" v-loading="loading">
			<iframe ref="iframeRef" class="iframe-content" :src="iframeSrc" title="iframe"></iframe>
		</div>
	</div>
</template>

<script setup lang="ts">
definePage({
	name: "IframePage",
	meta: {
		layout: "admin",
		auth: ["required"],
		title: "iframe页面",
		icon: "RiWindowLine",
		sort: 40
	}
});

const route = useRoute();

const loading = ref(false);
const iframeRef = ref<HTMLIFrameElement>();
const iframeSrc = ref("");

function initIframe() {
	loading.value = true;
	if (route.meta.iframeLink) {
		iframeSrc.value = route.meta.iframeLink;
	}
	if (!iframeRef.value) return;
	iframeRef.value.onload = () => {
		loading.value = false;
	};
}

onMounted(initIframe);
</script>

<style lang="scss" scoped>
.iframe-page {
	height: 100%;
}
.iframe-content-wrapper {
	height: 100%;
	background-color: #fff;
	border-radius: 4px;
	overflow: hidden;
}
.iframe-content {
	display: block;
	width: 100%;
	height: 100%;
	border: none;
}
</style>
