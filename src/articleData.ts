import { ARTICLE_TOPICS, COLORS } from "./constants";
import friendsWithLaptops from "./images/friends-with-laptops.png";
import welcomeSign from "./images/welcome-sign.png";

export type ArticleData = {
  author: string;
  color: (typeof COLORS)[keyof typeof COLORS];
  date: string;
  href: string;
  imgAlt: string;
  imgSrc: ImageMetadata;
  ogImage?: string;
  title: string;
  topic: (typeof ARTICLE_TOPICS)[keyof typeof ARTICLE_TOPICS];
  summary: string;
};

export const ARTICLE_DATA = {
  freeAndDiscountedSoftware: {
    author: "Caleb Ellis",
    color: COLORS.blueLight,
    date: "11th April 2024",
    href: "/articles/free-and-discounted-software",
    imgAlt: "Friends laughing while working in a cafe with their laptops",
    imgSrc: friendsWithLaptops,
    ogImage: "/images/og-free-and-discounted-software.png",
    title: "Free and discounted software for not-for-profits",
    topic: ARTICLE_TOPICS.howToGuides,
    summary:
      "Explore our curated selection of professional software solutions available at free or discounted rates for not-for-profits. Featuring offers from Microsoft, Google and Adobe, enhance your organisation's impact and elevate your mission with the right tech tools!",
  },
  welcomeToNeonCarrot: {
    author: "Caleb Ellis",
    color: COLORS.orangeLight,
    date: "26th March 2024",
    href: "/articles/welcome-to-neon-carrot",
    imgAlt: "A sign in front of a house that says 'Welcome! Please come in'",
    imgSrc: welcomeSign,
    ogImage: "/images/og-welcome-to-neon-carrot.png",
    title: "Welcome to Neon Carrot!",
    topic: ARTICLE_TOPICS.misc,
    summary:
      "Neon Carrot is an IT consultancy dedicated to serving not-for-profits. We're on a mission to transform how not-for-profits harness technology, hoping to make a real difference in the sector, one digital solution at a time. Get in touch and explore how we can achieve great things together!",
  },
} as const satisfies Record<string, ArticleData>;
