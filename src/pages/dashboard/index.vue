<!--
 * @Author: mulingyuer
 * @Date: 2026-04-11 17:02:02
 * @LastEditTime: 2026-04-12 20:17:45
 * @LastEditors: mulingyuer
 * @Description: 仪表盘页面
 * @FilePath: \element-admin-template\src\pages\dashboard\index.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="home">
		首页
		<div class="custom-icon">
			<h2 class="custom-icon-title">自定义svg图标</h2>
			<el-space :size="20" class="custom-icon-list">
				<el-icon size="36">
					<i-custom-brand-158_吃瓜 />
				</el-icon>
				<el-icon size="36">
					<i-custom-brand-158_调皮 />
				</el-icon>
				<el-icon size="36">
					<i-custom-ui-aly />
				</el-icon>
				<el-icon size="36">
					<i-custom-ui-ele />
				</el-icon>
			</el-space>
		</div>
	</div>
</template>

<script setup lang="ts">
import RiDashboard_3Line from "~icons/ri/dashboard-3-line";

definePage({
	name: "Dashboard",
	alias: ["/"],
	meta: {
		layout: "admin",
		auth: ["required"],
		title: "仪表盘",
		icon: shallowRef(RiDashboard_3Line),
		affix: true,
		sort: 10
	}
});
</script>

<style lang="scss" scoped>
.custom-icon {
	margin-top: 20px;
}
.custom-icon-title {
	margin-bottom: 10px;
}
.custom-icon-list {
	color: var(--el-color-primary);
}
</style>
