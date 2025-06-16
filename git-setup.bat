@echo off
echo 🚀 AI工具导航 - GitHub上传脚本
echo.

echo 📋 检查项目状态...
npm run type-check
if %errorlevel% neq 0 (
    echo ❌ TypeScript类型检查失败
    pause
    exit /b 1
)

echo ✅ 类型检查通过

npm run lint
if %errorlevel% neq 0 (
    echo ❌ ESLint检查失败
    pause
    exit /b 1
)

echo ✅ 代码检查通过

npm run build
if %errorlevel% neq 0 (
    echo ❌ 构建失败
    pause
    exit /b 1
)

echo ✅ 构建成功

echo.
echo 📦 准备上传到GitHub...
echo.

git init
git add .
git commit -m "feat: 初始化AI工具导航项目，支持多语言和Cloudflare部署"

echo.
echo 🔗 请手动添加远程仓库并推送：
echo git remote add origin https://github.com/yourusername/ai-tools-navigation.git
echo git branch -M main
echo git push -u origin main
echo.

pause
