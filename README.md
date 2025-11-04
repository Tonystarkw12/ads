# 魅力女神 - Beauty Goddess Website

一个美女主题的网站，集成了Servads广告联盟，可部署到Cloudflare Pages。

## 🌟 项目特色

- **紫色渐变主题设计** - 现代化、吸引人的视觉效果
- **响应式布局** - 完美支持桌面端、平板和移动设备
- **广告集成** - 集成Servads广告联盟，5个广告位
- **交互功能** - 平滑滚动、模态框、按钮效果
- **SEO优化** - 适当的meta标签和结构化内容

## 📁 项目结构

```
.
├── index.html              # 主页面
├── styles.css             # 样式文件
├── script.js              # JavaScript功能
├── servads.txt            # Servads验证文件
├── DEPLOYMENT_GUIDE.md    # 部署指南
└── README.md              # 项目说明
```

## 🚀 快速开始

### 本地预览

1. 克隆仓库
```bash
git clone https://github.com/你的用户名/仓库名.git
cd 仓库名
```

2. 直接在浏览器中打开 `index.html` 文件

### 部署到Cloudflare Pages

详细部署步骤请查看 [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

**方法1：Git集成**
1. 在Cloudflare Pages连接此GitHub仓库
2. 设置Framework preset为"None"
3. 点击Deploy

**方法2：直接上传**
1. 下载所有文件
2. 在Cloudflare Pages选择"Upload assets"
3. 上传文件并部署

## 📋 域名验证和广告设置

### 🔐 Servads域名验证步骤

要确保你的域名被验证并准备好显示广告，请按照以下简单步骤操作：

#### 第1步：下载Tracker文件

下载Servads提供的tracker文件。这个文件对于验证你的域名所有权至关重要。

📥 [立即下载 servads.txt](./servads.txt)

#### 第2步：上传Tracker文件

将tracker文件上传到你域名服务器的根目录。根目录通常是你的主index文件所在的位置（例如：`public_html` 或网站文件的主文件夹）。

**文件位置示例：**
```
你的网站根目录/
├── index.html
├── servads.txt  ← 上传到这里
├── styles.css
└── script.js
```

#### 第3步：通过浏览器检查文件

打开网页浏览器并访问以下URL来确认文件可访问：

```
https://ads-seven-opal.vercel.app/servads.txt
```

确保文件在浏览器中可以查看并显示验证码。

**注意：** 将 `ads-seven-opal.vercel.app` 替换为你的实际域名。

#### 第4步：添加广告脚本到布局

为了正确显示广告，请在你网站的 `<head>` 标签中或在 `</body>` 结束标签之前包含以下脚本标签：

```html
<script src="https://affiliates.serv.adse.site/assets/ads/ad.js" class="adScriptClass"></script>
```

**脚本位置示例：**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>你的网站</title>
    <!-- 在head标签中添加广告脚本 -->
    <script src="https://affiliates.serv.adse.site/assets/ads/ad.js" class="adScriptClass"></script>
</head>
<body>
    <!-- 你的网站内容 -->
</body>
</html>
```

✅ **完成！** 完成这些步骤后，你的域名将被验证并准备好显示Servads广告。

### 📍 广告位置

本网站包含以下广告位：

- **顶部横幅** - `ad-top`
- **左侧边栏** - `ad-left` (仅桌面端)
- **右侧边栏** - `ad-right` (仅桌面端)
- **内容中间** - `ad-middle`
- **底部横幅** - `ad-bottom`

## 🎨 网站功能

- ✨ **导航栏** - 首页、精选、独家内容、VIP专区
- 🎯 **Hero区域** - 主标题和行动号召
- 💎 **精选内容** - 展示"女神"卡片
- 🔒 **VIP区域** - 会员权益展示
- 📱 **响应式** - 适配所有设备尺寸

## 🛠️ 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 渐变、过渡、响应式设计
- **JavaScript** - 原生JS，无依赖
- **Servads** - 广告联盟集成

## 📊 浏览器支持

- ✅ Chrome (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ 移动浏览器

## 📝 许可证

MIT License

## 📞 联系方式

如有问题，请联系：support@example.com

---

**注意**: 此网站仅供18岁以上用户访问。