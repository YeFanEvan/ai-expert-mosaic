# AI Expert Mosaic - 部署说明

## 方法1：GitHub Pages（推荐）

### 手动上传文件方式：
1. 访问您的GitHub仓库：https://github.com/HaoWang21/ai-expert-mosaic
2. 点击 "uploading an existing file" 或 "Add file" > "Upload files"
3. 将以下文件拖拽到页面中：
   - `index.html`
   - `script.js`
   - `styles.css`
   - `README.md`
   - `CHANGELOG.md`
4. 在底部填写提交信息："Initial commit: AI Expert Mosaic website"
5. 点击 "Commit changes"

### 启用GitHub Pages：
1. 在仓库页面，点击 **Settings** 标签
2. 在左侧菜单找到 **Pages**
3. 在 "Source" 选择 **Deploy from a branch**
4. 选择 **main** 分支和 **/ (root)** 文件夹
5. 点击 **Save**
6. 等待几分钟，网站将在以下地址可用：
   ```
   https://haowang21.github.io/ai-expert-mosaic/
   ```

## 方法2：Netlify（最快）

1. 访问：https://netlify.com
2. 注册/登录账户
3. 点击 "Add new site" > "Deploy manually"
4. 将项目文件夹拖拽到页面中
5. 几秒钟后获得在线地址

## 方法3：Vercel

1. 访问：https://vercel.com
2. 注册/登录账户
3. 点击 "New Project"
4. 连接GitHub仓库或上传文件
5. 自动部署并获得在线地址

## 方法4：Surge.sh（命令行）

```bash
npm install -g surge
cd 项目目录
surge
```

## 当前项目文件：
- `index.html` - 主页面
- `script.js` - JavaScript逻辑
- `styles.css` - 样式文件
- `README.md` - 项目说明
- `CHANGELOG.md` - 更新日志

## 网站功能：
- 响应式设计，支持移动端
- 8位顶级AI专家展示
- 分类筛选（Google、OpenAI、Anthropic等）
- 搜索功能
- 社交媒体链接
- 中英文双语支持
