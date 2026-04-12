# element-admin-template

[![zread](https://img.shields.io/badge/Ask_Zread-_.svg?style=flat&color=00b0aa&labelColor=000000&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTYxNTYgMS42MDAxSDIuMjQxNTZDMS44ODgxIDEuNjAwMSAxLjYwMTU2IDEuODg2NjQgMS42MDE1NiAyLjI0MDFWNC45NjAxQzEuNjAxNTYgNS4zMTM1NiAxLjg4ODEgNS42MDAxIDIuMjQxNTYgNS42MDAxSDQuOTYxNTZDNS4zMTUwMiA1LjYwMDEgNS42MDE1NiA1LjMxMzU2IDUuNjAxNTYgNC45NjAxVjIuMjQwMUM1LjYwMTU2IDEuODg2NjQgNS4zMTUwMiAxLjYwMDEgNC45NjE1NiAxLjYwMDFaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00Ljk2MTU2IDEwLjM5OTlIMi4yNDE1NkMxLjg4ODEgMTAuMzk5OSAxLjYwMTU2IDEwLjY4NjQgMS42MDE1NiAxMS4wMzk5VjEzLjc1OTlDMS42MDE1NiAxNC4xMTM0IDEuODg4MSAxNC4zOTk5IDIuMjQxNTYgMTQuMzk5OUg0Ljk2MTU2QzUuMzE1MDIgMTQuMzk5OSA1LjYwMTU2IDE0LjExMzQgNS42MDE1NiAxMy43NTk5VjExLjAzOTlDNS42MDE1NiAxMC42ODY0IDUuMzE1MDIgMTAuMzk5OSA0Ljk2MTU2IDEwLjM5OTlaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik0xMy43NTg0IDEuNjAwMUgxMS4wMzg0QzEwLjY4NSAxLjYwMDEgMTAuMzk4NCAxLjg4NjY0IDEwLjM5ODQgMi4yNDAxVjQuOTYwMUMxMC4zOTg0IDUuMzEzNTYgMTAuNjg1IDUuNjAwMSAxMS4wMzg0IDUuNjAwMUgxMy43NTg0QzE0LjExMTkgNS42MDAxIDE0LjM5ODQgNS4zMTM1NiAxNC4zOTg0IDQuOTYwMVYyLjI0MDFDMTQuMzk4NCAxLjg4NjY0IDE0LjExMTkgMS42MDAxIDEzLjc1ODQgMS42MDAxWiIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNNCAxMkwxMiA0TDQgMTJaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00IDEyTDEyIDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K&logoColor=ffffff)](https://zread.ai/mulingyuer/element-admin-template)

基于 **Vue 3** + **Vite 8** + **TypeScript 6** + **Element Plus** 的中后台管理系统基础模板。

此模板的目标是提供一个**简洁、纯净**的后台起步环境，不内置复杂的业务逻辑，仅保留最核心的基础功能，支持快速上手和二次开发。

AI 生成的文档：[《element-admin-template》](https://zread.ai/mulingyuer/element-admin-template)

---

## 简介

在开发后端业务时，往往需要一个可视化管理后台。市面上许多现成的模板虽然功能强大，但往往过于繁重，内置了大量业务逻辑，导致二次开发的心智负担较重。

**element-admin-template** 旨在解决这一痛点：它只关注基础建设，将复杂的逻辑留给开发者根据实际业务去填充。

> 感谢 [Element-Admin](https://github.com/KYX1234/Element-Admin) 项目提供的灵感与参考。

---

## 在线预览

项目主分支（main）会自动构建预览版，访问地址：[在线预览](https://mulingyuer.github.io/element-admin-template/)

---

## 特性

- **Vue 3 + Vite 8**: 极致的开发体验。
- **TypeScript 6**: 全程类型安全，启用 `noUncheckedIndexedAccess` 严格模式。
- **Element Plus**: 优秀的 UI 组件库。
- **基于文件的路由**: 通过 `vue-router/vite` 插件，页面文件即路由，使用 `definePage()` 宏声明路由元信息。
- **布局系统**: 基于 `vite-plugin-vue-layouts-next`，支持 admin、blank、default 三种布局，按页面配置自动切换。
- **自动导入**: 基于 `unplugin-auto-import` 和 `unplugin-vue-components` 实现组件和 API 的按需自动导入。
- **全量图标方案**:
  - 集成 `unplugin-icons`，支持 **Remix Icon** 图标集。
  - 支持**自定义 SVG 图标**（brand 彩色图标 + ui 单色图标，本地文件自动加载）。
  - 提供 `icon-registry` 图标注册表，支持字符串 key 映射图标组件。
- **Pinia 3**: 状态管理，集成 `@erlihs/pinia-plugin-storage` 实现命名空间化的 localStorage 持久化。
- **策略模式路由守卫**: 支持 `public`、`guest`、`required` 三种认证策略，可组合使用。
- **Axios 封装**: 现代化的请求模块，支持 `axios-retry` 自动重试、Bearer Token 注入、响应自动解包、业务错误处理。
- **SWR 数据获取**: 内置 `useSWR` 组合式函数，支持 stale-while-revalidate 缓存策略。
- **全局弹窗管理**: 基于 Promise 的 `useModal` 弹窗管理器，支持持久化/单例模式。
- **响应式布局**: 完美适配移动端和桌面端，侧边栏状态自动切换。
- **暗色模式**: 基于 `useDark` + View Transition API 实现丝滑的明暗主题切换动画。
- **导航标签页**: 持久化的标签页导航，支持固定标签、右键菜单、批量关闭等操作。
- **路由过渡动画**: 内置 6 种路由切换动画（fade、fade-slide、fade-bottom、fade-scale、zoom-fade、zoom-out）。
- **代码规范**: 使用 Oxlint 进行代码检查，Oxfmt 进行代码格式化。

---

## 技术栈

| 核心库           | 版本   | 说明                             |
| :--------------- | :----- | :------------------------------- |
| **Vue**          | 3.5    | 响应式框架，使用 Composition API |
| **Vite**         | 8      | 打包工具 / 开发服务器            |
| **TypeScript**   | 6      | 类型定义                         |
| **Element Plus** | 2.13   | UI 组件库                        |
| **Vue Router**   | 5      | 路由管理（文件路由模式）         |
| **Pinia**        | 3      | 状态管理                         |
| **VueUse**       | 14     | 组合式工具集                     |
| **Axios**        | 1.15   | 网络请求库                       |
| **Sass**         | -      | CSS 预处理器（sass-embedded）    |
| **Oxlint**       | 1.59   | 代码检查                         |
| **Oxfmt**        | 0.44   | 代码格式化                       |

---

## 项目目录

```text
src/
├── api/          # 接口定义（按业务领域组织）
├── assets/       # 静态资源
│   ├── icons/    # SVG 图标（brand 彩色 / ui 单色）
│   └── images/   # 图片资源
├── components/   # 全局公共组件
├── composables/  # 组合式函数（useAuth、useModal、useSWR 等）
├── layouts/      # 布局组件（admin / blank / default）
│   └── components/admin/  # Admin 布局子组件（Aside、Header、Main、NavTab）
├── pages/        # 页面视图（文件路由，自动生成路由）
├── plugins/      # 插件配置（Element Plus 默认值定制）
├── request/      # Axios 请求封装（拦截器、错误处理、响应转换）
├── router/       # 路由配置、守卫与认证策略
│   └── router-auth/  # 策略模式认证系统
├── stores/       # Pinia 状态管理（app / user / nav-tab）
├── styles/       # 全局样式（主题、过渡动画、Element Plus 覆盖）
└── utils/        # 工具函数（缓存、日期、图标注册、菜单生成等）
```

---

## 快速开始

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

### 5. 其他命令

```bash
pnpm preview      # 预览构建产物
pnpm type-check   # TypeScript 类型检查
pnpm lint         # 代码检查
pnpm lint:fix     # 代码检查并自动修复
pnpm fmt          # 代码格式化
pnpm fmt:check    # 检查代码格式
pnpm analyze      # 构建产物分析
```

---

## 环境变量

项目支持多套环境配置：

- `.env.development`: 开发环境
- `.env.production`: 生产环境
- `.env.github-preview`: GitHub Pages 预览环境（使用 Hash 路由）

常见变量说明：

| 变量名                       | 说明                                     |
| :--------------------------- | :--------------------------------------- |
| `VITE_APP_TITLE`             | 网页标题                                 |
| `VITE_APP_BASE_URL`          | 应用部署时的基础路径                     |
| `VITE_APP_LOCAL_KEY_PREFIX`  | localStorage 持久化 key 前缀            |
| `VITE_APP_API_BASE_URL`      | API 请求基础地址                         |
| `VITE_APP_GITHUB_PREVIEW`    | 是否为 GitHub 预览模式（启用 Hash 路由） |

---

## 路由与页面

项目使用 `vue-router/vite` 插件实现基于文件的路由，页面文件放在 `src/pages/` 目录下即可自动注册路由。

### 页面配置

在页面组件中使用 `definePage()` 宏声明路由元信息：

```vue
<script setup lang="ts">
definePage({
  name: "Dashboard",
  meta: {
    layout: "admin",       // 使用的布局：admin / blank / default
    auth: ["required"],    // 认证策略：public / guest / required（默认 required）
    title: "仪表盘",       // 页面标题（用于菜单和标签页）
    icon: "ri/dashboard-3-line",  // 图标（用于菜单和标签页）
    affix: true,           // 是否固定在标签页
    sort: 10,              // 菜单排序
    isHide: false,         // 是否在菜单中隐藏
  },
});
</script>
```

### 认证策略

路由守卫采用策略模式，支持三种认证类型：

- `public`: 公开页面，任何人都可访问。
- `guest`: 仅未登录用户可访问（如登录页），已登录用户会被重定向到首页。
- `required`: 需要登录才能访问（默认），未登录用户会被重定向到登录页。

---

## 布局系统

项目提供三种布局，通过页面的 `meta.layout` 配置切换：

- **admin**: 完整的后台管理布局，包含侧边栏（Logo + 菜单）、顶部栏（面包屑 + 暗色模式 + 全屏 + 用户信息）、导航标签页、主内容区（支持 keep-alive 和路由过渡动画）。
- **blank**: 极简布局，仅提供全高度容器（适用于登录页等）。
- **default**: 裸 `<router-view>` 透传。

---

## 图标使用说明

项目集成了 `unplugin-icons`，可以像使用 Vue 组件一样直接使用图标。

### Remix Icon 图标

```html
<i-ri-heart-fill />
```

### 自定义图标

将 SVG 文件放入 `src/assets/icons/brand` 或 `src/assets/icons/ui` 目录，即可自动加载：

```html
<!-- brand: 彩色图标，保留原始颜色 -->
<i-custom-brand-your-icon-name />

<!-- ui: 单色图标，颜色跟随 CSS color -->
<i-custom-ui-your-icon-name />
```

### 函数式调用

如果需要在 JS 中使用图标（如作为组件 Props 传入），可以使用 `useIcon` composable：

```ts
import { useIcon } from "@/composables/useIcon";
import SomeIcon from "~icons/ri/home-line";

const icon = useIcon(SomeIcon);
```

也可以通过 `icon-registry` 图标注册表，使用字符串 key 获取图标组件：

```ts
import { getIconComponent } from "@/utils/icon-registry";

const icon = getIconComponent("ri/dashboard-3-line");
```

---

## 请求模块

基于 Axios 封装的请求模块，位于 `src/request/`：

- 自动注入 Bearer Token（从 userStore 获取）。
- 集成 `axios-retry`，默认 3 次重试（网络错误和幂等请求），可通过 `enableRetry` 按请求配置。
- `ResponseTransformer` 自动解包 `{ code, data, message }` 格式的响应，返回 `data` 字段（可通过 `unpack: false` 关闭）。
- `RequestErrorHandler` 统一处理 HTTP 错误和业务错误，通过 `ElNotification` 展示。
- 支持 `showErrorMessage`、`showCancelErrorMessage` 等配置控制错误提示行为。

```ts
import { request } from "@/request";

// 默认自动解包，返回 data 字段
const data = await request<UserInfo>({ url: "/user/info" });

// 关闭自动解包，返回完整响应
const result = await request<RequestResult<UserInfo>>({
  url: "/user/info",
  unpack: false,
});
```

---

## 开源协议

本项目基于 [MIT License](LICENSE) 协议。
