<!--
 * @Author: mulingyuer
 * @Date: 2026-04-12 15:29:15
 * @LastEditTime: 2026-04-12 15:49:31
 * @LastEditors: mulingyuer
 * @Description: 测试页面
 * @FilePath: \element-admin-template\src\pages\test.vue
 * 怎么可能会有bug！！！
-->
<template>
	<router-view></router-view>
</template>

<script setup lang="ts">
definePage({
	redirect: { path: "/404" },
	meta: {
		layout: "admin",
		auth: ["required"],
		icon: "RiFlaskLine",
		sort: 30
	}
});
</script>

<style scoped></style>
