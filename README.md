# element-admin-template

[![zread](https://img.shields.io/badge/Ask_Zread-_.svg?style=flat&color=00b0aa&labelColor=000000&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTYxNTYgMS42MDAxSDIuMjQxNTZDMS44ODgxIDEuNjAwMSAxLjYwMTU2IDEuODg2NjQgMS42MDE1NiAyLjI0MDFWNC45NjAxQzEuNjAxNTYgNS4zMTM1NiAxLjg4ODEgNS42MDAxIDIuMjQxNTYgNS42MDAxSDQuOTYxNTZDNS4zMTUwMiA1LjYwMDEgNS42MDE1NiA1LjMxMzU2IDUuNjAxNTYgNC45NjAxVjIuMjQwMUM1LjYwMTU2IDEuODg2NjQgNS4zMTUwMiAxLjYwMDEgNC45NjE1NiAxLjYwMDFaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00Ljk2MTU2IDEwLjM5OTlIMi4yNDE1NkMxLjg4ODEgMTAuMzk5OSAxLjYwMTU2IDEwLjY4NjQgMS42MDE1NiAxMS4wMzk5VjEzLjc1OTlDMS42MDE1NiAxNC4xMTM0IDEuODg4MSAxNC4zOTk5IDIuMjQxNTYgMTQuMzk5OUg0Ljk2MTU2QzUuMzE1MDIgMTQuMzk5OSA1LjYwMTU2IDE0LjExMzQgNS42MDE1NiAxMy43NTk5VjExLjAzOTlDNS42MDE1NiAxMC42ODY0IDUuMzE1MDIgMTAuMzk5OSA0Ljk2MTU2IDEwLjM5OTlaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik0xMy43NTg0IDEuNjAwMUgxMS4wMzg0QzEwLjY4NSAxLjYwMDEgMTAuMzk4NCAxLjg4NjY0IDEwLjM5ODQgMi4yNDAxVjQuOTYwMUMxMC4zOTg0IDUuMzEzNTYgMTAuNjg1IDUuNjAwMSAxMS4wMzg0IDUuNjAwMUgxMy43NTg0QzE0LjExMTkgNS42MDAxIDE0LjM5ODQgNS4zMTM1NiAxNC4zOTg0IDQuOTYwMVYyLjI0MDFDMTQuMzk4NCAxLjg4NjY0IDE0LjExMTkgMS42MDAxIDEzLjc1ODQgMS42MDAxWiIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNNCAxMkwxMiA0TDQgMTJaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00IDEyTDEyIDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K&logoColor=ffffff)](https://zread.ai/mulingyuer/element-admin-template)

基于 **Vue 3** + **Vite** + **TypeScript** + **Element Plus** 的中后台管理系统基础模板。

此模板的目标是提供一个**简洁、纯净**的后台起步环境，不内置复杂的业务逻辑，仅保留最核心的基础功能，支持快速上手和二次开发。

AI 生成的文档：[《element-admin-template》](https://zread.ai/mulingyuer/element-admin-template)

---

## 📖 简介

在开发后端业务时，往往需要一个可视化管理后台。市面上许多现成的模板虽然功能强大，但往往过于繁重，内置了大量业务逻辑，导致二次开发的心智负担较重。

**element-admin-template** 旨在解决这一痛点：它只关注基础建设，将复杂的逻辑留给开发者根据实际业务去填充。

> 感谢 [Element-Admin](https://github.com/KYX1234/Element-Admin) 项目提供的灵感与参考。

---

## 🔗 在线预览

项目主分支（main）会自动构建预览版，访问地址：[在线预览](https://mulingyuer.github.io/element-admin-template/)

---

## ✨ 特性

- ⚡️ **Vue 3 + Vite**: 极致的开发体验。
- 💪 **TypeScript**: 全程类型安全。
- 🎨 **Element Plus**: 优秀的 UI 组件库。
- 📦 **自动导入**: 基于 `unplugin-auto-import` 和 `unplugin-vue-components` 实现组件和 API 的按需自动导入。
- 🧩 **全量图标方案**:
  - 集成了 `unplugin-icons`，支持 **Element Plus** 和 **Remix Icon** 图标集。
  - 支持 **自定义 SVG 图标**（本地文件自动加载）。
- 🍍 **Pinia**: 状态管理，并集成 `pinia-plugin-persistedstate` 实现持久化桌面。
- 🚀 **模块化路由**: 基于策略模式的路由守卫，支持由路由配置自动生成侧边栏菜单。
- 📡 **Axios 封装**: 现代化的请求封装，支持请求重试。
- 📱 **响应式布局**: 完美适配移动端和桌面端，侧边栏状态自动切换。
- 🪄 **代码规范**: 包含 ESLint、Prettier、Oxlint 等工具提升开发效率和质量。

---

## 🛠️ 技术栈

| 核心库           | 说明                             |
| :--------------- | :------------------------------- |
| **Vue 3**        | 响应式框架，使用 Composition API |
| **Vite**         | 打包工具 / 开发服务器            |
| **TypeScript**   | 类型定义                         |
| **Element Plus** | UI 组件库                        |
| **Vue Router**   | 路由管理                         |
| **Pinia**        | 状态管理                         |
| **VueUse**       | 组合式工具集                     |
| **Axios**        | 网络请求库                       |
| **Sass**         | CSS 预处理器                     |

---

## 📂 项目目录

```text
src/
├── api/          # 接口定义
├── assets/       # 静态资源（图标、图片）
├── components/   # 全局公共组件
├── composables/  # 组合式函数 (hooks)
├── constant/     # 常量定义
├── layout/       # 布局组件
├── plugins/      # 插件配置
├── request/      # Axios 请求封装
├── router/       # 路由配置与守卫
├── stores/       # 状态管理
├── styles/       # 全局样式
├── utils/        # 工具函数
└── views/        # 页面视图
```

---

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/mulingyuer/element-admin-template.git
cd element-admin-template
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 本地开发

```bash
pnpm dev
```

### 4. 项目打包

```bash
pnpm build
```

---

## 🌍 环境变量

项目支持多套环境配置：

- `.env.development`: 开发环境
- `.env.production`: 生产环境

常见变量说明：

- `VITE_APP_TITLE`: 网页标题。
- `VITE_APP_BASE_URL`: 应用部署时的基础路径（控制 `BASE_URL`）。

---

## 💡 图标使用说明

项目集成了 `unplugin-icons`，可以像使用 Vue 组件一样直接使用图标。

### Element Plus 图标

```html
<i-ep-search />
```

### Remix Icon 图标

```html
<i-ri-heart-fill />
```

### 自定义图标

将 SVG 文件放入 `src/assets/icons/brand` 或 `src/assets/icons/ui` 目录，即可自动加载：

```html
<i-custom-brand-your-icon-name />
```

1. brand 中存放彩色图标
2. ui 中存放单色图标

### 函数式调用

如果需要在 JS 中使用图标（如作为组件 Props 传入），可以使用 `useIcon` composable。

---

## 📄 开源协议

本项目基于 [MIT License](LICENSE) 协议。
