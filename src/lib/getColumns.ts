import { Article } from "@/types";

export const getColumns = (articles: Article[], columnCount: number) => {
  const columns: Article[][] = Array.from({ length: columnCount }, () => []);
  articles.forEach((article, index) => {
    columns[index % columnCount].push(article);
  });

  return columns;
};
