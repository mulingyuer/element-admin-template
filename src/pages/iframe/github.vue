<!--
 * @Author: mulingyuer
 * @Date: 2026-04-12 14:44:03
 * @LastEditTime: 2026-04-12 20:20:42
 * @LastEditors: mulingyuer
 * @Description: github页面
 * @FilePath: \element-admin-template\src\pages\iframe\github.vue
 * 怎么可能会有bug！！！
-->
<template>
	<IframePageContent :iframeLink="iframeLink" />
</template>

<script setup lang="ts">
import IframePageContent from "@/components/IframePageContent.vue";
import RiGithubLine from "~icons/ri/github-line";

definePage({
	meta: {
		title: "github",
		icon: shallowRef(RiGithubLine)
	}
});

const iframeLink = ref("https://mulingyuer.github.io/element-admin-template/#");
</script>

<style scoped></style>
