<!--
 * @Author: mulingyuer
 * @Date: 2026-04-11 16:54:15
 * @LastEditTime: 2026-04-11 16:55:26
 * @LastEditors: mulingyuer
 * @Description: admin布局
 * @FilePath: \element-admin-template\src\layout\admin.vue
 * 怎么可能会有bug！！！
-->
<template>
	<el-container class="admin-layout">
		<Aside />
		<el-container direction="vertical">
			<Header />
			<NavTab />
			<Main />
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import Aside from "./components/admin/Aside/index.vue";
import Header from "./components/admin/Header/index.vue";
import Main from "./components/admin/Main/index.vue";
import NavTab from "./components/admin/NavTab/index.vue";
</script>

<style lang="scss" scoped>
.admin-layout {
	min-height: 100vh;
	background-color: var(--el-bg-color-page);
}
</style>
