#!/bin/bash

# Cloudflare Pages构建脚本
echo "🚀 开始构建AI工具导航项目..."

# 强制使用npm而不是bun
echo "📦 确保使用npm..."
rm -f bun.lockb
rm -rf .bun

# 设置Node.js版本
export NODE_VERSION=18

# 清理缓存
echo "🧹 清理缓存..."
rm -rf node_modules/.cache
rm -rf .vite

# 安装依赖
echo "📦 安装依赖..."
npm install --legacy-peer-deps

# 构建项目
echo "🔨 构建项目..."
npm run build

echo "✅ 构建完成！"
