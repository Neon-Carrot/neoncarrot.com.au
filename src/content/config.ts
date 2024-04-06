import { defineCollection, reference, z } from "astro:content";

import { COLORS, ARTICLE_TOPICS } from "../constants";

const articlesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: reference("team"),
      topic: z.nativeEnum(ARTICLE_TOPICS),
      summary: z.string().max(300),
      heroImage: image().refine((img) => img.width >= 860, {
        message: "Hero image must be at least 860px wide",
      }),
      heroImageAlt: z.string(),
      heroImageColor: z.nativeEnum(COLORS),
      ogImage: z.string(),
      pubDate: z.date(),
      otherArticles: z.array(reference("articles")).max(3),
      updatedDate: z.date().optional(),
    }),
});

const teamCollection = defineCollection({
  type: "data",
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
