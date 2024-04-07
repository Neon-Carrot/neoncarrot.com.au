import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const articles = await getCollection("articles");
  const team = await getCollection("team");
  const sortedArticles = articles.sort((a, b) =>
    a.data.pubDate > b.data.pubDate ? -1 : 1
  );
  return rss({
    title: "Neon Carrot Articles",
    description:
      "Insights on technology, the not-for-profit sector, and where the two intersect.",
    site: context.site,
    language: "en-au",
    items: sortedArticles.map((article) => {
      const author = team.find((a) => a.id === article.data.author.id);
      return {
        title: article.data.title,
        pubDate: article.data.pubDate,
        lastBuildDate: article.data.updatedDate,
        author: author?.data.name || "Unknown author",
        description: article.data.summary,
        link: `/articles/${article.slug}/`,
      };
    }),
  });
}
