<!--
 * @Author: mulingyuer
 * @Date: 2025-12-17 14:09:16
 * @LastEditTime: 2025-12-17 16:05:39
 * @LastEditors: mulingyuer
 * @Description: 全局图片预览组件
 * @FilePath: \element-admin-template\src\components\GlobalImagePreview.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="global-image-preview">
		<el-image-viewer
			v-if="visible"
			v-bind="previewProps"
			@close="previewEmits.onClose"
			@error="previewEmits.onError"
			@switch="previewEmits.onSwitch"
			@rotate="previewEmits.onRotate"
		/>
	</div>
</template>

<script setup lang="ts">
import { useGlobalImagePreview } from "@/composables/useImagePreview";

const { visible, previewProps, previewEmits } = useGlobalImagePreview();
</script>

<style lang="scss" scoped>
.global-image-preview {
	height: 0;
	overflow: hidden;
}
</style>
