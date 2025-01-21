<!--
 * @Author: mulingyuer
 * @Date: 2024-09-26 12:16:02
 * @LastEditTime: 2025-01-21 17:22:54
 * @LastEditors: mulingyuer
 * @Description: 首页
 * @FilePath: \element-admin-template\src\views\dashboard\index.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="home">
		首页
		<div class="custom-icon">
			<h2 class="custom-icon-title">自定义svg图标</h2>
			<el-space :size="20" class="custom-icon-list">
				<Icon name="custom-aly" size="36" />
				<Icon name="custom-color-alipay" size="36" />
				<Icon name="custom-ele" size="36" />
			</el-space>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

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
