<!--
 * @Author: mulingyuer
 * @Date: 2026-04-11 16:56:24
 * @LastEditTime: 2026-04-12 15:48:54
 * @LastEditors: mulingyuer
 * @Description: 404页面
 * @FilePath: \element-admin-template\src\pages\[...path].vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="error-404">
		<div class="error-404-content">
			<img class="error-404-img" src="@/assets/images/404.svg" alt="404" />
			<router-link class="error-404-link" to="/">
				<el-button type="primary">返回首页</el-button>
			</router-link>
		</div>
	</div>
</template>

<script setup lang="ts">
definePage({
	name: "NotFound404",
	alias: ["/404"],
	meta: {
		layout: "admin",
		auth: ["required"],
		title: "404",
		icon: "RiCalendarCloseLine"
	}
});
</script>

<style lang="scss" scoped>
.error-404 {
	height: 100%;
	display: flex;
	padding: 20px;
}
.error-404-content {
	margin: auto;
}
.error-404-img {
	width: 350px;
}
.error-404-link {
	display: block;
	margin-top: 48px;
	text-align: center;
}
</style>
