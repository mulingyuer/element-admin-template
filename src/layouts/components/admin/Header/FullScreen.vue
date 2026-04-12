<!--
 * @Author: mulingyuer
 * @Date: 2024-09-30 09:19:41
 * @LastEditTime: 2025-12-17 14:13:34
 * @LastEditors: mulingyuer
 * @Description: 全屏
 * @FilePath: \element-admin-template\src\layout\admin-layout\components\Header\FullScreen.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="full-screen" @click="toggle">
		<el-icon size="20">
			<i-ri-fullscreen-line v-if="!isFullscreen" />
			<i-ri-fullscreen-exit-line v-else />
		</el-icon>
	</div>
</template>

<script setup lang="ts">
const { isFullscreen, toggle } = useFullscreen();
</script>

<style lang="scss" scoped>
.full-screen {
	width: 40px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:hover {
		background-color: var(--el-fill-color-light);
	}
}
</style>
