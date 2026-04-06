# Personal Homepage

这是一个基于 Astro 的个人主页骨架，风格方向是：

- 首页走温柔高级风
- 项目区走现代作品集风
- 结构适合展示个人简介、能力、AI 项目、经历和联系方式

## 本地运行

```powershell
npm install
npm run dev
```

如果 PowerShell 直接执行 `npm` 仍然被策略拦住，可以改用：

```powershell
npm.cmd install
npm.cmd run dev
```

## 需要替换的内容

主要内容都集中在 [src/data/site.ts](d:\Blog\src\data\site.ts)：

- `siteMeta.name`
- `siteMeta.email`
- `siteMeta.location`
- `profileNotes`
- `strengths`
- `projects`
- `experience`
- `contactLinks`

## GitHub Pages

如果你要部署成 `username.github.io`：

1. 新建仓库名为 `username.github.io`
2. 把这里的文件推上去
3. 在仓库 `Settings > Pages` 中确认来源是 `GitHub Actions`
4. 使用仓库里的工作流自动发布

如果你之后告诉我你的 GitHub 用户名，我可以顺手把 `astro.config.mjs` 里的 `site` 配置也替你补上。
