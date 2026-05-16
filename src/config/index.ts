import { Github, Linkedin } from "lucide-react"

export const defaultLanguage: string = "en"

export const common = {
  domain: "https://jjgod-13.github.io",
  meta: {
    favicon: "/avatar.png",
    url: "https://jjgod-13.github.io",
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
    custom: [],
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
    description: "This is my blog",
  },
  navigation: {
    ...common.navigation,

    custom: [],
  },
  pageMeta: {
    archive: {
      title: "All Posts",
      description: "All Posts",
      ogImage: "/images/page-meta/en/archive.png",
    },
  },
}
