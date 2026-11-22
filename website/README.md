# 王依民的博客网站

基于 [AstroPaper](https://github.com/satnaing/astro-paper)，保留上游 MIT LICENSE。

## 本地运行

要求 Node.js 22.23.4 或更新版本、pnpm。

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm preview --host 127.0.0.1 --port 4328
```

打开 http://127.0.0.1:4328/blog/ 。`pnpm build` 同时生成全文搜索索引；开发模式下需先构建才能使用完整搜索。

网站内容在 `src/content/posts/`，项目页在 `src/pages/projects.astro`，个人介绍在 `src/content/pages/about.md`，主题配置在 `astro-paper.config.ts`。根目录的 `posts/` 为保留来源元信息的博客归档，网站版本是阅读展示副本。

网站发布在 https://aymanajal.github.io/blog/ 。推送 main 分支后，由 GitHub Actions 自动构建与发布。
