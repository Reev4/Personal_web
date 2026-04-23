import { defaultTheme } from "@vuepress/theme-default";

export default defaultTheme({
  logo: "/favicon.svg",

  navbar: [
    {
      text: "目录",
      children: [
        { text: "前言", link: "/preface/" },
        { text: "技术笔记", link: "/tech/" },
        { text: "读书笔记", link: "/reading/" },
        { text: "项目复盘", link: "/projects/" },
      ],
    },
    { text: "个人主页", link: "/" },
  ],

  repo: "Reev4/Personal_web",
  repoLabel: "查看源码",

  sidebarDepth: 2,
  sidebar: ["/preface/", "/tech/", "/reading/", "/projects/"],

  lastUpdated: true,
  docsDir: "docs",
  docsBranch: "main",
  editLinkText: "帮助我改善此页面！",

  themePlugins: {
    prismjs: {
      themes: { light: "one-light", dark: "one-dark" },
    },
  },
});
