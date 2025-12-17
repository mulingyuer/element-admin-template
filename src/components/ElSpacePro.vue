<!--
 * @Author: mulingyuer
 * @Date: 2025-12-17 14:09:16
 * @LastEditTime: 2025-12-17 16:05:24
 * @LastEditors: mulingyuer
 * @Description: 增强版ElSpace组件
 * @FilePath: \element-admin-template\src\components\ElSpacePro.vue
 * 怎么可能会有bug！！！
-->
<script lang="ts">
import { ElSpace } from "element-plus";
import { type SpaceProps, spaceProps } from "element-plus";
import { Comment, type VNode } from "vue";

export type ElSpaceProProps = SpaceProps;

export default defineComponent({
	name: "ElSpacePro",
	props: spaceProps,
	setup(props) {
		const slots = useSlots();
		const attrs = useAttrs();

		/** 判断是不是Comment节点
		 * 当`v-if="false"`时默认会插入一个注释节点Comment
		 */
		function isComment(node: VNode): boolean {
			return node?.type === Comment;
		}

		/** 判断是不是v-show指令 */
		function isVShowDirective(dir: DirectiveBinding): boolean {
			// @ts-expect-error fuck ts
			return typeof dir.dir.name === "string" && dir.dir.name === "show";
		}

		return () =>
			h(
				ElSpace,
				{
					...props,
					...attrs
				},
				() => {
					return (slots.default?.() || []).filter((node) => {
						// 剔除 v-if="false" (Comment 节点)
						if (isComment(node)) return false;

						// 检查 v-show="false"
						if (node.dirs && node.dirs.length) {
							const findShow = node.dirs.find(isVShowDirective);
							if (findShow) return Boolean(findShow.value);
						}

						// 既不是 v-if=false 也不是 v-show=false
						return true;
					});
				}
			);
	}
});
</script>
