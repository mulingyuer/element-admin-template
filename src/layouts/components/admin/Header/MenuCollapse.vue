<!--
 * @Author: mulingyuer
 * @Date: 2024-09-29 16:14:44
 * @LastEditTime: 2025-12-17 14:13:54
 * @LastEditors: mulingyuer
 * @Description: 折叠侧边栏按钮
 * @FilePath: \element-admin-template\src\layout\admin-layout\components\Header\MenuCollapse.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="menu-collapse" @click="toggleCollapse">
		<el-icon size="20">
			<i-ri-menu-fold-line v-if="!appStore.isCollapse" />
			<i-ri-menu-unfold-line v-else />
		</el-icon>
	</div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores";

const appStore = useAppStore();
function toggleCollapse() {
	appStore.setIsCollapse(!appStore.isCollapse);
	appStore.setIsUserCollapse(!appStore.isUserCollapse);
}
</script>

<style lang="scss" scoped>
.menu-collapse {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	cursor: pointer;
	&:hover {
		background-color: var(--el-fill-color-light);
	}
}
</style>
