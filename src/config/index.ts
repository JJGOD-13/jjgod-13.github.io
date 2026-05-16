import { Github, Linkedin } from "lucide-react"

export const defaultLanguage: string = "en"

export const common = {
  domain: "https://astro-air.guoqi.dev",
  meta: {
    favicon: "/avatar.png",
    url: "https://blog.sunguoqi.com",
  },
  googleAnalyticsId: "",
  social: [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/JJGOD-13",
    },
    {
      icon: Linkedin,
      Label: "Linkedin",
      link: "https://www.linkedin.com/in/jayant-godse/",
    },
  ],
  rss: true,
  navigation: {
    home: true,
    archive: true,
    custom: [
      {
        label: "CamLife",
        link: "https://camlife.cn",
      },
    ],
    links: true,
    about: true,
  },
  latestPosts: 8,
  comments: {
    enabled: true,
    twikoo: {
      enabled: true,
      // replace with your own envId
      envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID ?? "",
    },
  },
}

export const siteData = {
  ...common,
  siteName: "Jayant Godse",
  meta: {
    ...common.meta,
    title: "Jayant Godse",
    slogan: "Huh?",
    description: "",
  },
  navigation: {
    ...common.navigation,

    custom: [],
  },
  pageMeta: {
    archive: {
      title: "All Posts",
      description: "Here are Guoqi Sun's all posts",
      ogImage: "/images/page-meta/en/archive.png",
    },
    links: {
      title: "My Friends",
      description: "Here are Guoqi Sun's friends",
      ogImage: "/images/page-meta/en/links.png",
    },
    about: {
      title: "About Me",
      description: "Here is Guoqi Sun's self-introduction",
      ogImage: "/images/page-meta/en/about.png",
    },
  },
}
