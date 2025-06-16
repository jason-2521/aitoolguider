# AI工具导航 - AI Tools Navigation

一个现代化的AI工具导航网站，收录了70个最受欢迎的AI工具，帮助用户发现和探索最新最优秀的人工智能工具。

## 🚀 项目特色

- **20个精选AI工具** - 基于真实数据，包含排名、月访问量、功能描述等详细信息
- **多语言支持** - 支持中文和英文，默认英文，自动检测浏览器语言
- **智能分类系统** - 9大分类：AI助手、图像生成、写作助手、编程辅助、视频制作、音频处理、设计工具、效率工具
- **实时搜索功能** - 支持工具名称、描述、标签的模糊搜索
- **精选推荐** - 突出展示最受欢迎的AI工具
- **响应式设计** - 完美适配桌面端和移动端
- **现代化UI** - 使用Tailwind CSS和Shadcn/ui组件库
- **语言切换** - 一键切换中英文界面

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **UI组件库**: Shadcn/ui + Radix UI
- **样式框架**: Tailwind CSS
- **路由**: React Router DOM
- **状态管理**: React Query (TanStack Query)
- **国际化**: React i18next + i18next
- **图标**: Lucide React
- **表单处理**: React Hook Form + Zod

## 📊 数据来源

项目数据基于`tools.json`文件，包含85个AI工具的详细信息：
- 工具排名和月访问量
- 详细功能描述
- 分类和标签
- 官方网站链接
- 定价模式

## 🎯 主要功能

### 1. 工具展示
- 卡片式布局展示AI工具
- 包含工具logo、名称、描述、标签
- 支持一键访问官方网站

### 2. 分类筛选
- AI助手 (ChatGPT, Claude, Gemini等)
- 图像生成 (Midjourney, DALL-E, Stable Diffusion等)
- 写作助手 (Jasper, Copy.ai, Grammarly等)
- 编程辅助 (GitHub Copilot, Cursor, Tabnine等)
- 视频制作 (Runway, Luma AI, Synthesia等)
- 音频处理 (ElevenLabs, Suno, Murf.ai等)
- 设计工具 (Canva, Gamma, Beautiful.ai等)
- 效率工具 (Notion AI, Zapier, Fireflies.ai等)

### 3. 搜索功能
- 实时搜索过滤
- 支持中英文搜索
- 搜索范围包括工具名称、描述、标签

### 4. 精选推荐
- 基于排名和流量的精选工具
- 特殊样式突出显示
- 快速访问最受欢迎的工具

### 5. 多语言支持
- **自动检测**: 根据浏览器语言自动选择界面语言
- **手动切换**: 右上角语言切换按钮
- **本地存储**: 记住用户的语言偏好
- **完整翻译**: 界面、分类、标签全部支持中英文

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 📁 项目结构

```
src/
├── components/          # UI组件
│   └── ui/             # Shadcn UI组件
├── pages/              # 页面组件
│   ├── Index.tsx       # 主页面
│   └── NotFound.tsx    # 404页面
├── lib/                # 工具函数
├── hooks/              # 自定义Hooks
└── App.tsx             # 主应用组件
```

## 🎨 设计特色

- **现代化渐变背景** - 紫色到蓝色的渐变主题
- **卡片式布局** - 清晰的信息层次
- **悬停动效** - 丰富的交互体验
- **响应式设计** - 移动端友好
- **无障碍支持** - 符合WCAG标准

## 📈 数据统计

- **收录工具**: 70个
- **分类数量**: 9个
- **总月访问量**: 超过5亿次
- **覆盖领域**: AI助手、创作工具、开发工具、效率工具等

## 🔧 自定义配置

### 添加新工具
在`src/data/aiTools.ts`的`aiToolsData`数组中添加新的工具对象：

```typescript
{
  id: 21,
  name: '工具名称',
  description: {
    en: 'Tool description in English',
    zh: '工具的中文描述'
  },
  category: '分类ID',
  url: '官方网站',
  logo: '🔧',
  keyFeatures: 'Feature1, Feature2, Feature3',
  featured: false,
  rank: 21,
  monthlyTraffic: 1000000
}
```

### 添加新语言
1. 在`src/i18n/locales/`目录下创建新的语言文件
2. 在`src/i18n/index.ts`中注册新语言
3. 更新工具数据中的描述字段

### 修改分类
在`Index.tsx`的`categories`数组中修改或添加新的分类，并在语言文件中添加对应翻译。

## 🚀 部署

### GitHub上传
```bash
git init
git add .
git commit -m "feat: 初始化AI工具导航项目，支持多语言"
git remote add origin https://github.com/yourusername/ai-tools-navigation.git
git push -u origin main
```

### Cloudflare Pages部署（推荐）
1. 登录Cloudflare Dashboard
2. 创建Pages项目，连接GitHub仓库
3. 构建设置：
   - 构建命令: `npm run build`
   - 输出目录: `dist`
4. 自动部署，支持自定义域名

### 其他平台
- **Vercel**: 连接GitHub仓库一键部署
- **Netlify**: 构建命令 `npm run build`，发布目录 `dist`

详细部署指南请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交Issue和Pull Request来改进项目！

---

**AI工具导航** - 发现最佳的AI工具，提升你的工作效率和创造力 🚀
