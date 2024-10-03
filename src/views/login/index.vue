<!--
 * @Author: mulingyuer
 * @Date: 2024-09-26 12:15:39
 * @LastEditTime: 2024-09-30 17:42:11
 * @LastEditors: mulingyuer
 * @Description: 登录页面
 * @FilePath: \spirit-app-microservice-admin\src\views\login\index.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="login">
		<div class="login-content">
			<div class="login-logo-wrapper">
				<img class="login-logo" src="/favicon.ico" :alt="logoTitle" />
			</div>
			<el-form
				class="login-form"
				ref="ruleFormRef"
				:model="form"
				:rules="rules"
				size="large"
				status-icon
			>
				<h2 class="login-form-title">欢迎回来</h2>
				<p class="login-form-desc">请输入账号密码登录</p>
				<el-form-item prop="account">
					<el-input v-model="form.account" placeholder="请输入账号">
						<template #prefix>
							<Icon name="ri-user-fill" />
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						v-model="form.password"
						type="password"
						autocomplete="off"
						show-password
						placeholder="请输入密码"
					>
						<template #prefix>
							<Icon name="ri-lock-fill" />
						</template>
					</el-input>
				</el-form-item>
				<el-form-item class="login-form-submit-item">
					<el-button
						class="login-form-btn"
						type="primary"
						:loading="submitLoading"
						@click="onLogin"
					>
						登录
					</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useAuth } from "@/hooks/useAuth";
import { useRedirect } from "@/hooks/useRedirect";
import type { FormInstance, FormRules } from "element-plus";

interface RuleForm {
	account: string;
	password: string;
}

const redirect = useRedirect();
const { login } = useAuth();

const logoTitle = import.meta.env.VITE_APP_TITLE;
const ruleFormRef = ref<FormInstance>();
const form = ref<RuleForm>({
	account: "admin123",
	password: "admin123456"
});
const rules = ref<FormRules<RuleForm>>({
	account: [
		{ required: true, message: "请输入账号", trigger: "blur" },
		{ min: 5, max: 20, message: "账号长度在5到20个字符", trigger: "blur" }
	],
	password: [
		{ required: true, message: "请输入密码", trigger: "blur" },
		{ min: 8, max: 30, message: "密码长度在8到30个字符", trigger: "blur" }
	]
});
const submitLoading = ref(false);

async function onLogin() {
	if (!ruleFormRef.value) return;
	const isValid = await ruleFormRef.value.validate(() => {});
	if (!isValid) return;
	submitLoading.value = true;
	// TODO: 先随机一个token，后续改成真正的登录逻辑
	setTimeout(async () => {
		await login(Math.random().toString(36));
		redirect.replace({ name: "Dashboard" });
		submitLoading.value = false;
		ElNotification({
			title: "登录成功!",
			type: "success",
			message: `欢迎回来，靓仔！`
		});
	}, 1000);
}
</script>

<style lang="scss" scoped>
.login {
	flex-grow: 1;
	background-color: #f2f6ff;
	padding: 20px;
	display: flex;
}
.login-content {
	width: 580px;
	margin: auto;
}
.login-logo-wrapper {
	margin-bottom: 50px;
	text-align: center;
}
.login-logo {
	width: 40px;
	height: 40px;
}
.login-form {
	background-color: #fff;
	border-radius: 10px;
	padding: 54px 48px;
	box-shadow: 0 5px 5px rgba(52, 83, 127, 0.1);
	:deep(.el-input__prefix) {
		color: #409eff;
	}
}
.login-form-submit-item {
	margin-bottom: 0;
}
.login-form-title,
.login-form-desc {
	text-align: center;
}
.login-form-title {
	margin-bottom: 12px;
	font-size: 28px;
	font-weight: normal;
	color: #409eff;
	letter-spacing: 2px;
}
.login-form-desc {
	margin-bottom: 50px;
	font-size: 16px;
	color: #79bbff;
	letter-spacing: 1px;
}
.login-form-btn {
	width: 100%;
}
</style>
