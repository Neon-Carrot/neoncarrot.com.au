import { ARTICLE_TOPICS, COLORS } from "./constants";
import welcomeSign from "./images/welcome-sign.png";

export type ArticleData = {
  author: string;
  color: (typeof COLORS)[keyof typeof COLORS];
  date: string;
  href: string;
  imgAlt: string;
  imgSrc: ImageMetadata;
  title: string;
  topic: (typeof ARTICLE_TOPICS)[keyof typeof ARTICLE_TOPICS];
  summary: string;
};

export const ARTICLE_DATA = {
  welcomeToNeonCarrot: {
    author: "Caleb Ellis",
    color: COLORS.orangeLight,
    date: "25th March 2024",
    href: "/articles/welcome-to-neon-carrot",
    imgAlt: "A sign in front of a house that says 'Welcome! Please come in'",
    imgSrc: welcomeSign,
    title: "Welcome to Neon Carrot!",
    topic: ARTICLE_TOPICS.misc,
    summary:
      "Neon Carrot is an IT consultancy dedicated to serving not-for-profits. We’re on a mission to transform how not-for-profits harness technology, hoping to make a real difference in the sector, one digital solution at a time. Get in touch and explore how we can achieve great things together!",
  },
} as const satisfies Record<string, ArticleData>;
