import { defineConfig } from "./toolkit/themeConfig";

export default defineConfig({
  siteName: "萧秀云",
  locale: "zh-CN",
  nav: [
    {
      href: "/",
      text: "首页",
      icon: "i-ri-home-line",
    },
    {
      text: "关于我",
      href: "/about/",
      icon: "i-ri-user-3-line",
    },
    {
      text: "文章",
      href: "/random/",
      icon: "i-ri-quill-pen-fill",
      dropbox: {
        enable: true,
        items: [
          {
            href: "/categories/",
            text: "分类",
            icon: "i-ri-book-shelf-fill",
          },
          {
            href: "/tags/",
            text: "标签",
            icon: "i-ri-price-tag-3-fill",
          },
          {
            href: "/archives/",
            text: "归档",
            icon: "i-ri-archive-line",
          },
        ],
      },
    },
    {
      text: "项目",
      href: "/projects/",
      icon: "i-ri-layout-grid-line",
    },
    {
      text: "动态",
      href: "/moments/",
      icon: "i-ri-chat-quote-line",
    },
  ],
  brand: {
    title: "萧秀云",
    subtitle: "内容、表达、AI 项目",
    logo: "萧",
  },
  cover: {
    enable: true,
    preload: true,
    fixedCover: {
      enable: true,
      url: "cover-4",
    },
    nextGradientCover: false,
  },
  sidebar: {
    author: "萧秀云",
    description: "一个以内容表达、个人叙事和 AI 项目实践为中心的个人站点。",
    social: {
      github: {
        url: "https://github.com/Jane9562",
        icon: "i-ri-github-fill",
      },
      email: {
        url: "mailto:hello@example.com",
        icon: "i-ri-mail-line",
      },
    },
  },
  footer: {
    since: 2026,
    icon: {
      name: "sakura rotate",
      color: "var(--color-pink)",
    },
    count: true,
    powered: true,
    icp: {
      enable: false,
      icpnumber: "",
      icpurl: "",
    },
  },
  tagCloud: {
    startColor: "var(--grey-6)",
    endColor: "var(--color-blue)",
  },
  widgets: {
    randomPosts: true,
    recentComments: false,
    recentCommentsLimit: 0,
  },
  comments: {
    enable: false,
    waline: {
      serverURL: "",
      lang: "zh-CN",
    },
  },
  hyc: {
    enable: false,
    aiSummary: {
      enable: true,
      title: "AI 摘要",
      showModel: true,
    },
    aiRecommend: {
      enable: true,
      limit: 3,
      minSimilarity: 0.4,
    },
  },
  nyxPlayer: {
    enable: false,
    preset: "shokax",
    darkModeTarget: ':root[data-theme="dark"]',
    urls: [
      {
        name: "默认歌单",
        url: "https://music.163.com/#/playlist?id=2943811283",
      },
    ],
  },
  visibilityTitle: {
    enable: true,
    leaveTitle: "先去忙吧，我会在这里等你回来",
    returnTitle: "欢迎回来",
    restoreDelay: 3000,
  },
  home: {
    selectedCategories: [],
    pageSize: 5,
    title: {
      behavior: "default",
      customTitle: "",
    },
  },
  layout: {
    mode: "two-column",
    rightSidebar: {
      order: ["announcement", "search", "calendar", "recentMoments", "randomPosts", "tagCloud"],
      announcement: true,
      search: true,
      calendar: true,
      recentMoments: true,
      randomPosts: true,
      tagCloud: true,
    },
  },
  friends: {
    title: "项目",
    description: "把 AI 工具、内容表达和网页叙事组合成可以被看见的作品。",
    links: [
      {
        url: "https://github.com/Jane9562",
        title: "AI 选题研究档案",
        desc: "把热点、案例和观点整理成可持续更新的选题资料库，用于写作、策划和内容孵化。",
        author: "萧秀云",
        avatar: "https://avatars.githubusercontent.com/u/122607221?v=4",
        color: "var(--color-blue)",
      },
      {
        url: "https://github.com/Jane9562",
        title: "AI 视觉叙事专题页",
        desc: "围绕一个文化主题，把文字、图像和网页结构组合成可浏览的专题型作品。",
        author: "萧秀云",
        avatar: "https://avatars.githubusercontent.com/u/122607221?v=4",
        color: "var(--color-pink)",
      },
      {
        url: "https://github.com/Jane9562",
        title: "个人品牌内容实验",
        desc: "通过栏目设计、表达风格和 AI 辅助改写，搭出一套更稳定的个人品牌内容结构。",
        author: "萧秀云",
        avatar: "https://avatars.githubusercontent.com/u/122607221?v=4",
        color: "var(--color-orange)",
      },
      {
        url: "https://github.com/Jane9562",
        title: "网页简历与作品集",
        desc: "以个人叙事为骨架，把简历、能力和项目展示放进同一个更完整的线上入口里。",
        author: "萧秀云",
        avatar: "https://avatars.githubusercontent.com/u/122607221?v=4",
        color: "var(--color-green)",
      },
    ],
  },
  copyright: {
    license: "CC-BY-NC-SA-4.0",
    show: true,
  },
});
