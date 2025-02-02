import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.mikaelbrunila.com", // replace this with your deployed domain
  author: "Mikael Brunila",
  profile: "https://www.mikaelbrunila.com/about",
  desc: "My personal website.",
  title: "Mikael Brunila",
  ogImage: "/assets/img/mikael_brunila.jpeg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/maybemkl/mikaelbrunila.com/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/maybemkl",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "GoogleScholar",
    href: "https://scholar.google.com/citations?user=hBL6tGwAAAAJ&hl=en",
    linkTitle: `${SITE.title} on Google Scholar`,
    active: true,
  },
  {
    name: "BlueSky",
    href: "https://bsky.app/profile/mikaelbrunila.bsky.social",
    linkTitle: `${SITE.title} on BlueSky`,
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/mikaelbrunila",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mikael-brunila-bb642a142/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:mikael.brunila@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
