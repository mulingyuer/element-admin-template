<!--
 * @Author: mulingyuer
 * @Date: 2024-09-27 16:40:29
 * @LastEditTime: 2026-04-12 20:21:09
 * @LastEditors: mulingyuer
 * @Description: 按钮item
 * @FilePath: \element-admin-template\src\layouts\components\admin\Aside\MenuItem.vue
 * 怎么可能会有bug！！！
-->
<template>
	<el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
		<template #title>
			<el-icon v-if="menu.icon" size="19">
				<component :is="getIconComponent(menu.icon)" />
			</el-icon>
			<span class="truncate">{{ menu.title }}</span>
		</template>
		<MenuItem v-for="menuItem in menu.children" :key="menuItem.path" :menu="menuItem" />
	</el-sub-menu>
	<el-menu-item v-else :index="menu.path">
		<el-icon v-if="menu.icon" size="19">
			<component :is="getIconComponent(menu.icon)" />
		</el-icon>
		<span class="truncate">{{ menu.title }}</span>
	</el-menu-item>
</template>

<script setup lang="ts">
import { getIconComponent } from "@/utils/icon-registry";

defineProps({
	menu: {
		type: Object as PropType<AdminApp.Menu>,
		required: true
	}
});
</script>

<style scoped></style>
