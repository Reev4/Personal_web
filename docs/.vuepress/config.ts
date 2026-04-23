import { viteBundler } from "@vuepress/bundler-vite";
import { markdownContainerPlugin } from "@vuepress/plugin-markdown-container";
import { markdownMathPlugin } from "@vuepress/plugin-markdown-math";
import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const createContainer = (type: string) =>
  markdownContainerPlugin({
    type,
    before: (info) => `<div class="${type}"><p class="title">${info}</p>`,
    after: () => "</div>",
  });

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  theme,

  lang: "zh-CN",
  title: "个人知识库",
  description: "记录学习、思考与创造",

  head: [["link", { rel: "icon", href: "/favicon.svg" }]],

  plugins: [
    markdownMathPlugin({
      type: "katex",
    }),
    searchPlugin({}),
    createContainer("definition"),
    createContainer("theorem"),
    createContainer("note"),
  ],
});
