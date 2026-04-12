<!--
 * @Author: mulingyuer
 * @Date: 2026-04-12 14:28:37
 * @LastEditTime: 2026-04-12 15:49:06
 * @LastEditors: mulingyuer
 * @Description: iframe页面
 * @FilePath: \element-admin-template\src\pages\iframe.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="iframe-page">
		<router-view></router-view>
	</div>
</template>

<script setup lang="ts">
definePage({
	redirect: { path: "/404" },
	meta: {
		title: "iframe页面",
		layout: "admin",
		auth: ["required"],
		icon: "RiWindowLine",
		sort: 40
	}
});
</script>

<style lang="scss" scoped>
.iframe-page {
	height: 100%;
}
</style>
