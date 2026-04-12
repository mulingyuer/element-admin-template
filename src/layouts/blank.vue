<!--
 * @Author: mulingyuer
 * @Date: 2026-04-11 16:53:55
 * @LastEditTime: 2026-04-12 18:25:20
 * @LastEditors: mulingyuer
 * @Description: 空白布局
 * @FilePath: \element-admin-template\src\layouts\blank.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="blank-layout">
		<router-view></router-view>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.blank-layout {
	min-height: 100vh;
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
}
</style>
