/*
 * @Author: mulingyuer
 * @Date: 2025-12-17 14:10:14
 * @LastEditTime: 2025-12-17 16:06:54
 * @LastEditors: mulingyuer
 * @Description: 图片预览
 * @FilePath: \element-admin-template\src\composables\useImagePreview.ts
 * 怎么可能会有bug！！！
 */
import { resettableRef } from "@/utils/ref";
import { type ImageViewerEmits, type ImageViewerProps } from "element-plus";
import type { SimplifyDeep } from "type-fest";

type AddOnPrefix<T> = {
	[K in keyof T as `on${Capitalize<string & K>}`]: T[K];
};
type ImagePreviewEmits = AddOnPrefix<ImageViewerEmits>;
/** open 方法参数 */
export type OpenOptions = SimplifyDeep<
	Partial<Omit<ImageViewerProps, "urlList">> &
		Partial<ImageViewerEmits> & {
			urlList: ImageViewerProps["urlList"];
		}
>;

const visible = ref(false);
const [previewProps, resetPreviewProps] = resettableRef<ImageViewerProps>({
	urlList: [],
	zIndex: undefined,
	initialIndex: 0,
	infinite: true,
	hideOnClickModal: false,
	teleported: true,
	zoomRate: 1.2,
	scale: 1,
	minScale: 0.2,
	maxScale: 7,
	closeOnPressEscape: true,
	showProgress: false
});
let userEmits: ImagePreviewEmits | undefined;
// TODO: 暂时不清楚ImageViewerEmits的事件为什么全部要求返回布尔值，如果布尔值有用，可以考虑用户事件返回值优先
const previewEmits: ImagePreviewEmits = {
	onClose: () => {
		visible.value = false;
		nextTick().finally(() => resetPreviewProps());

		userEmits?.onClose();
		return false;
	},
	onError: (evt: Event) => {
		userEmits?.onError(evt);
		return false;
	},
	onSwitch: (index: number) => {
		userEmits?.onSwitch(index);
		return false;
	},
	onRotate: (deg: number) => {
		userEmits?.onRotate(deg);
		return false;
	}
};

export function useGlobalImagePreview() {
	return {
		visible,
		previewProps,
		previewEmits
	};
}

export function useImagePreview() {
	const open = (options: OpenOptions, emits?: ImagePreviewEmits) => {
		Object.assign(previewProps.value, options);
		userEmits = emits;

		visible.value = true;
	};

	const close = () => {
		previewEmits.onClose();
	};

	return {
		open,
		close
	};
}
