/*
 * @Author: mulingyuer
 * @Date: 2024-09-30 10:27:38
 * @LastEditTime: 2025-12-17 15:50:44
 * @LastEditors: mulingyuer
 * @Description: navTab数据
 * @FilePath: \element-admin-template\src\stores\modules\nav-tab\index.ts
 * 怎么可能会有bug！！！
 */
import { defineStore } from "pinia";
import router from "@/router";

export const useNavTabStore = defineStore(
	"nav-tab",
	() => {
		/** navTab列表 */
		const navTabList = ref<Array<AdminApp.NavTabData>>([]);
		function clearNavTabList() {
			navTabList.value = [];
		}

		/** 新增navTab */
		function addNavTab(data: AdminApp.NavTabData) {
			if (!data.title) return;
			const findItem = navTabList.value.find((item) => item.fullPath === data.fullPath);
			if (findItem) return;

			navTabList.value.push(data);
		}

		/** 删除navTab */
		function removeNavTab(fullPath: string) {
			const isActive = router.currentRoute.value.fullPath === fullPath;
			let newNavTabList = navTabList.value.filter(
				(item) => item.fullPath !== fullPath || item.affix
			);
			if (isActive) {
				// 如果删除的navTab是当前激活的，且存在其他navTab，则激活最后一个navTab
				if (newNavTabList.length > 0) {
					router.push(newNavTabList[newNavTabList.length - 1]!.fullPath);
				} else {
					newNavTabList = navTabList.value;
					ElMessage.warning("当前已是最后一个页面");
				}
			}

			navTabList.value = newNavTabList;
		}

		/** 删除左侧的navTab */
		function removeLeftNavTab(fullPath: string) {
			const findIndex = navTabList.value.findIndex((item) => item.fullPath === fullPath);
			if (findIndex === -1) return;
			// 筛选左侧固定navTab
			const leftAffixList = navTabList.value.slice(0, findIndex).filter((item) => item.affix);

			navTabList.value = [...leftAffixList, ...navTabList.value.slice(findIndex)];
		}

		/** 删除右侧的navTab */
		function removeRightNavTab(fullPath: string) {
			const findIndex = navTabList.value.findIndex((item) => item.fullPath === fullPath);
			if (findIndex === -1) return;
			// 筛选右侧固定navTab
			const rightAffixList = navTabList.value.slice(findIndex + 1).filter((item) => item.affix);

			navTabList.value = [...navTabList.value.slice(0, findIndex + 1), ...rightAffixList];
		}

		/** 删除其他navTab */
		function removeOtherNavTab(fullPath: string) {
			// 筛选出当前navTab的左右固定navTab
			const newNavTabList = navTabList.value.filter(
				(item) => item.affix || item.fullPath === fullPath
			);

			navTabList.value = newNavTabList;
		}

		/** 删除所有navTab */
		function removeAllNavTab() {
			let newNavTabList = navTabList.value.filter((item) => item.affix);
			// 如果一个路由都没有，则保留当前激活的路由
			if (newNavTabList.length === 0) {
				const activeRoute = router.currentRoute.value;
				newNavTabList = navTabList.value.filter((item) => item.fullPath === activeRoute.fullPath);
			}

			navTabList.value = newNavTabList;

			// 如果存在其他navTab，则激活最后一个navTab
			if (newNavTabList.length > 0) {
				router.push(newNavTabList[newNavTabList.length - 1]!.fullPath);
			}
		}

		return {
			navTabList,
			clearNavTabList,
			addNavTab,
			removeNavTab,
			removeLeftNavTab,
			removeRightNavTab,
			removeOtherNavTab,
			removeAllNavTab
		};
	},
	{
		storage: "localStorage"
	}
);
