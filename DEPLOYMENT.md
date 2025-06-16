# 🚀 部署指南 - Cloudflare Pages

## 📋 准备工作

### 1. 上传代码到GitHub

```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "feat: 初始化AI工具导航项目，支持多语言"

# 添加远程仓库（替换为你的GitHub仓库地址）
git remote add origin https://github.com/yourusername/ai-tools-navigation.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

### 2. 本地测试构建

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 预览构建结果
npm run preview
```

## 🌐 部署到Cloudflare Pages

### 方法一：通过Cloudflare Dashboard（推荐）

1. **登录Cloudflare Dashboard**
   - 访问 https://dash.cloudflare.com/
   - 登录你的Cloudflare账户

2. **创建Pages项目**
   - 点击左侧菜单的 "Pages"
   - 点击 "Create a project"
   - 选择 "Connect to Git"

3. **连接GitHub仓库**
   - 授权Cloudflare访问你的GitHub账户
   - 选择你的AI工具导航仓库
   - 点击 "Begin setup"

4. **配置构建设置**
   ```
   Project name: ai-tools-navigation
   Production branch: main
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

5. **环境变量（可选）**
   - 如果需要，可以添加环境变量
   - 例如：`NODE_VERSION = 18`

6. **部署**
   - 点击 "Save and Deploy"
   - 等待构建完成（通常2-3分钟）

### 方法二：使用Wrangler CLI

1. **安装Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **登录Cloudflare**
   ```bash
   wrangler login
   ```

3. **部署项目**
   ```bash
   npm run deploy:cloudflare
   ```

### 方法三：GitHub Actions自动部署

1. **获取Cloudflare API Token**
   - 访问 https://dash.cloudflare.com/profile/api-tokens
   - 点击 "Create Token"
   - 使用 "Custom token" 模板
   - 权限设置：
     - Zone: Zone:Read
     - Account: Cloudflare Pages:Edit

2. **获取Account ID**
   - 在Cloudflare Dashboard右侧找到Account ID

3. **配置GitHub Secrets**
   - 在GitHub仓库中，进入 Settings > Secrets and variables > Actions
   - 添加以下secrets：
     - `CLOUDFLARE_API_TOKEN`: 你的API Token
     - `CLOUDFLARE_ACCOUNT_ID`: 你的Account ID

4. **自动部署**
   - 每次推送到main分支时会自动部署
   - 可以在GitHub Actions页面查看部署状态

## 🔧 自定义域名

### 1. 添加自定义域名
- 在Cloudflare Pages项目中点击 "Custom domains"
- 点击 "Set up a custom domain"
- 输入你的域名（例如：ai-tools.yourdomain.com）

### 2. DNS配置
如果域名在Cloudflare管理：
- 会自动添加CNAME记录
- SSL证书会自动配置

如果域名在其他服务商：
- 添加CNAME记录指向你的Pages域名
- 例如：`ai-tools CNAME ai-tools-navigation.pages.dev`

## 📊 性能优化

### 1. 缓存配置
Cloudflare Pages自动提供：
- 静态资源缓存
- 全球CDN加速
- 自动压缩

### 2. 构建优化
```bash
# 分析构建包大小
npm run build
npx vite-bundle-analyzer dist
```

### 3. 预渲染（可选）
如果需要更好的SEO，可以考虑添加预渲染：
```bash
npm install -D vite-plugin-prerender
```

## 🔍 监控和分析

### 1. Cloudflare Analytics
- 在Pages项目中查看访问统计
- 监控性能指标
- 查看错误日志

### 2. 添加Google Analytics（可选）
在`index.html`中添加：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🛠️ 故障排除

### 常见问题

1. **构建失败**
   ```bash
   # 检查Node.js版本
   node --version
   
   # 清理缓存
   npm run clean
   npm install
   ```

2. **路由问题**
   - 确保`_redirects`文件在根目录
   - 内容：`/*    /index.html   200`

3. **环境变量问题**
   - 确保变量名以`VITE_`开头
   - 在Cloudflare Pages中正确配置

### 调试命令
```bash
# 本地开发
npm run dev

# 构建测试
npm run build
npm run preview

# 类型检查
npm run type-check

# 代码检查
npm run lint
```

## 🎉 部署完成

部署成功后，你将获得：
- 🌐 全球CDN加速的网站
- 🔒 自动HTTPS证书
- 📱 完美的移动端体验
- 🌍 多语言支持
- ⚡ 极快的加载速度

你的AI工具导航网站现在已经在线了！🎊
