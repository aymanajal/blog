import type { UIStrings } from "../types";

export default {
  nav: {
    home: "首页",
    posts: "文章",
    tags: "标签",
    about: "关于我",
    archives: "归档",
    search: "搜索",
  },
  post: {
    publishedAt: "发布于",
    updatedAt: "更新于",
    sharePostIntro: "分享文章",
    sharePostOn: "Share this post on {{platform}}",
    sharePostViaEmail: "Share this post via email",
    tagLabel: "标签",
    backToTop: "回到顶部",
    tableOfContents: "文章目录",
    goBack: "返回",
    editPage: "编辑文章",
    previousPost: "上一篇",
    nextPost: "下一篇",
  },
  pagination: {
    prev: "上一页",
    next: "下一页",
    page: "页",
  },
  home: {
    socialLinks: "联系",
    featured: "精选文章",
    recentPosts: "最近更新",
    allPosts: "全部文章",
  },
  footer: {
    copyright: "王依民",
    allRightsReserved: "文章署名与来源见正文。",
  },
  pages: {
    tagTitle: "标签",
    tagDesc: "此分类下的文章",

    tagsTitle: "标签",
    tagsDesc: "按主题浏览文章。",

    postsTitle: "文章",
    postsDesc: "实践、思考与阅读记录。",

    archivesTitle: "归档",
    archivesDesc: "按时间浏览文章。",

    searchTitle: "搜索",
    searchDesc: "搜索文章标题与正文。",
  },
  a11y: {
    skipToContent: "跳转正文",
    skipTableOfContents: "跳过目录",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toggleTheme: "切换深浅色",
    searchPlaceholder: "搜索文章…",
    noResults: "未找到相关内容",
    goToPreviousPage: "上一页",
    goToNextPage: "下一页",
  },
  notFound: {
    title: "404",
    message: "页面不存在",
    goHome: "返回首页",
  },
} satisfies UIStrings;
