import { useMemo, useState } from "react";
import type { Article } from "../types/types";

const sorters = {
  upvotes: (a: Article, b: Article) => b.upvotes - a.upvotes,
  date: (a: Article, b: Article) => Date.parse(b.date) - Date.parse(a.date),
};

export const useArticleSorting = (articles: Article[]) => {
  const [sortBy, setSortBy] = useState<"upvotes" | "date">("upvotes");

  const sortedArticles = useMemo(() => {
    return [...articles].sort(sorters[sortBy]);
  }, [articles, sortBy]);

  const sortByUpvotes = () => setSortBy("upvotes");
  const sortByDate = () => setSortBy("date");

  return {
    sortedArticles,
    sortByUpvotes,
    sortByDate,
  };
};
