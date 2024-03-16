import { ARTICLE_TOPICS, COLORS } from "./constants";
import girlWithRobot from "./images/girl-with-robot.png";
import helloCard from "./images/hello-card.png";
import ladyOnBed from "./images/lady-on-bed.png";
import laptopsOnTable from "./images/laptops-on-table.png";

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
}

export const ARTICLE_DATA = {
  workingFromHome: {
    author: "Carolina Fonseca",
    color: COLORS.orangeLight,
    date: "6th March 2024",
    href: "/articles/thoughts-about-working-from-home",
    imgAlt: "Lady on bed",
    imgSrc: ladyOnBed,
    title: "Thoughts about working from home - it's the best!",
    topic: ARTICLE_TOPICS.howToGuides,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan lorem eu velit placerat, tincidunt vehicula quam porttitor. Vivamus faucibus aliquam nibh vitae dapibus. Etiam et orci aliquet, imperdiet elit ut, laoreet nunc. Nunc diam diam, porta et rutrum in, aliquet id purus.",
  },
  aiIsComing: {
    author: "Caleb Ellis",
    color: COLORS.redLight,
    date: "6th March 2024",
    href: "/articles/ai-is-coming",
    imgAlt: "Girl with robot",
    imgSrc: girlWithRobot,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan lorem eu velit placerat, tincidunt vehicula quam porttitor. Vivamus faucibus aliquam nibh vitae dapibus. Etiam et orci aliquet, imperdiet elit ut, laoreet nunc. Nunc diam diam, porta et rutrum in, aliquet id purus.",
    title: "AI is coming and it's going to kill us all",
    topic: ARTICLE_TOPICS.techTrends,
  },
  howToWorkCollaboratively: {
    author: "Carolina Fonseca",
    color: COLORS.yellowLight,
    date: "6th March 2024",
    href: "/articles/how-to-work-collaboratively",
    imgAlt: "Laptops on table",
    imgSrc: laptopsOnTable,
    title: "How to work collaboratively - even if you work with morons",
    topic: ARTICLE_TOPICS.howToGuides,
    summary:
      "We've all been there. The elevator doors open, you step into your cubicle, and all of a sudden you are beset on all sides by profound ignorance. But what can you do about this unfortunate situation? You could choose to ignore it, or scream in a fit of rage.",
  },
  announcingLaunch: {
    author: "Caleb Ellis",
    color: COLORS.orange,
    date: "6th March 2024",
    href: "/articles/announcing-the-launch",
    imgAlt: "Hello card",
    imgSrc: helloCard,
    title: "Announcing the launch of Neon Carrot!",
    topic: ARTICLE_TOPICS.misc,
    summary:
      "Praesent tristique ligula in viverra maximus. Ut facilisis massa elementum vestibulum ornare. In egestas risus ut faucibus posuere. Nulla sollicitudin pellentesque tristique. Donec nec facilisis metus. Phasellus ut lobortis elit.",
  },
} as const satisfies Record<string, ArticleData>;
