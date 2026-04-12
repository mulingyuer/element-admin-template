<!--
 * @Author: mulingyuer
 * @Date: 2026-04-12 14:45:43
 * @LastEditTime: 2026-04-12 14:59:40
 * @LastEditors: mulingyuer
 * @Description: iframe页面内容组件
 * @FilePath: \element-admin-template\src\components\IframePageContent.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="iframe-page-content" v-loading="loading">
		<iframe ref="iframeRef" class="iframe-content" :src="iframeSrc" title="iframe"></iframe>
	</div>
</template>

<script setup lang="ts">
export interface IframePageContentProps {
	/** iframe链接 */
	iframeLink: string;
}

const props = defineProps<IframePageContentProps>();

const loading = ref(false);
const iframeSrc = ref("");
const iframeRef = useTemplateRef("iframeRef");

/** 清理 iframe */
function cleanupIframe() {
	if (iframeRef.value) {
		iframeRef.value.onload = null;
		iframeRef.value.onerror = null;
	}
}

/** 初始化 iframe */
function initIframe(link: string) {
	cleanupIframe();

	if (!iframeRef.value) return;
	if (typeof link !== "string" || link.trim() === "") {
		iframeSrc.value = "";
		return;
	}

	loading.value = true;

	// 先绑定事件，再设置 src，避免加载过快导致 onload 未触发
	iframeRef.value.onload = () => {
		loading.value = false;
	};
	iframeRef.value.onerror = () => {
		loading.value = false;
	};

	iframeSrc.value = link;
}

onMounted(() => initIframe(props.iframeLink));

watch(
	() => props.iframeLink,
	(link) => initIframe(link)
);

onBeforeUnmount(cleanupIframe);
</script>

<style lang="scss" scoped>
.iframe-page-content {
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
