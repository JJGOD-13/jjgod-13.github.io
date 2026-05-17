import { Github, Linkedin } from "lucide-react"

export const defaultLanguage: string = "en"

export const common = {
  domain: "https://jjgod-13.github.io",
  meta: {
    favicon: "/favicon.ico",
    url: "https://jjgod-13.github.io",
  },
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
  navigation: {
    home: true,
    posts: true,
    custom: [],
    links: false,
    about: true,
  },
  latestPosts: 8,
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
  pageMeta: {},
}
