<!--
 * @Author: mulingyuer
 * @Date: 2026-04-12 15:31:52
 * @LastEditTime: 2026-04-12 20:19:31
 * @LastEditors: mulingyuer
 * @Description: 测试页面2
 * @FilePath: \element-admin-template\src\pages\test\test2.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div>测试页面2</div>
</template>

<script setup lang="ts">
import RiFlaskLine from "~icons/ri/flask-line";

definePage({
	name: "Test2",
	meta: {
		title: "测试页面2",
		icon: shallowRef(RiFlaskLine),
		sort: 2
	}
});
</script>

<style scoped></style>
