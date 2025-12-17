<!--
 * @Author: mulingyuer
 * @Date: 2024-09-30 11:41:22
 * @LastEditTime: 2025-12-17 14:17:08
 * @LastEditors: mulingyuer
 * @Description: nav tab 工具栏
 * @FilePath: \element-admin-template\src\layout\admin-layout\components\NavTab\NavTabTools.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="nav-tab-tools">
		<div class="nav-tab-tools-refresh" @click="onRefresh">
			<el-icon class="nav-tab-tools-refresh-icon" :class="{ 'animate-spin': loading }" size="18">
				<i-ri-refresh-line />
			</el-icon>
		</div>
		<el-dropdown
			class="nav-tab-tools-more-dropdown"
			trigger="click"
			@command="onCommand"
			@visible-change="onVisibleChange"
		>
			<div class="nav-tab-tools-more">
				<el-icon size="18">
					<i-ri-more-line />
				</el-icon>
			</div>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item
						v-for="item in navTabToolsList"
						:key="item.key"
						:command="item.key"
						:disabled="item.disabled"
					>
						<el-icon size="16">
							<component :is="item.icon" />
						</el-icon>
						{{ item.label }}
					</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores";
import { navTabCommand, navTabToolsList, updateNavTabToolsList } from "./helper";

const route = useRoute();
const appStore = useAppStore();

/** 刷新页面 */
const loading = ref(false);
function onRefresh() {
	if (loading.value) return;
	loading.value = true;
	appStore.setReloadFlag();
	setTimeout(() => {
		loading.value = false;
	}, 1000);
}

/** 指令触发 */
function onCommand(command: string) {
	navTabCommand(command, route.fullPath);
}
/** 菜单显示 */
function onVisibleChange(show: boolean) {
	if (!show) return;
	// 更新菜单列表
	updateNavTabToolsList(route.fullPath, route.meta.affix);
}
</script>

<style lang="scss" scoped>
.nav-tab-tools {
	display: flex;
	height: 100%;
}
.nav-tab-tools-refresh,
.nav-tab-tools-more {
	width: 40px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-left: 1px solid var(--el-border-color-light);
	color: var(--el-text-color-regular);
	cursor: pointer;
	&:hover {
		background-color: var(--el-fill-color-light);
	}
}
.nav-tab-tools-more-dropdown {
	height: 100%;
}
.nav-tab-tools-refresh-icon.animate-spin {
	animation: spin 1s linear infinite;
}
</style>
