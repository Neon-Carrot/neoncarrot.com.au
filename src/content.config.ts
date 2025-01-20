import { defineCollection, reference, z } from "astro:content";

import { COLORS, ARTICLE_TOPICS } from "./constants";
import { glob } from "astro/loaders";

const articlesCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/articles" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: reference("team"),
      topic: z.nativeEnum(ARTICLE_TOPICS),
      summary: z.string().max(300),
      heroImage: image(),
      heroImageAlt: z.string(),
      heroImageAttribution: z
        .object({ name: z.string(), username: z.string() })
        .optional(),
      heroImageColor: z.nativeEnum(COLORS),
      ogImage: z.string(),
      pubDate: z.date(),
      otherArticles: z.array(reference("articles")).max(3),
      updatedDate: z.date().optional(),
    }),
});

const teamCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.yaml", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    nickname: z.string().optional(),
    email: z.string().email(),
  }),
});

export const collections = {
  articles: articlesCollection,
  team: teamCollection,
};
