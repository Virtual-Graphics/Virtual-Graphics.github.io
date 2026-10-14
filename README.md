# Virtual Graphics 官网

Virtual Graphics 组织的官方网站，基于 [Astro](https://astro.build) 与 [Tailwind CSS](https://tailwindcss.com) 构建，部署于 GitHub Pages。

## 开发

```sh
npm install
npm run dev
```

## 构建

```sh
npm run build
npm run preview
```

## 部署

推送代码到 `main` 分支后，GitHub Actions 会自动构建并部署到
[GitHub Pages](https://virtual-graphics.github.io)，工作流定义见
`.github/workflows/deploy.yml`。

## 维护

项目列表等站点内容位于 `src/data/projects.ts`，修改后重新构建即可。
