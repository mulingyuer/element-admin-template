<!--
 * @Author: mulingyuer
 * @Date: 2025-12-17 14:09:16
 * @LastEditTime: 2025-12-17 16:05:49
 * @LastEditors: mulingyuer
 * @Description: 全局弹窗渲染
 * @FilePath: \element-admin-template\src\components\GlobalModalRenderer.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="global-modal-container">
		<template v-for="item in modal.list" :key="item.modalId">
			<component
				:is="item.component"
				:modal-id="item.modalId"
				v-bind="item.props"
				v-model="item.visible"
				@confirm="(val: any) => modal.confirm(item.modalId, val)"
				@cancel="(reason?: any) => modal.cancel(item.modalId, reason)"
				@closed="() => modal.closed(item.modalId)"
			/>
		</template>
	</div>
</template>

<script setup lang="ts">
import { useModal } from "@/composables/useModal";

const modal = useModal();
</script>

<style lang="scss" scoped>
.global-modal-container {
	height: 0;
	overflow: hidden;
}
</style>
