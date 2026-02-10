import { ARTICLES_DATA } from "./constants";
import { useArticleSorting } from "./hooks/useArticleSorting";
import { Articles } from "./ui/Articles";

export const ArticleSortingPage = () => {
  const { sortedArticles, sortByDate, sortByUpvotes } =
    useArticleSorting(ARTICLES_DATA);

  return (
    <div className="App">
      <div className="flex gap-4 mb-4 justify-center items-center">
        <label className="form-hint mb-0 text-uppercase font-weight-light dark:text-white">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="bg-violet-600 hover:bg-violet-500 py-2 px-3 rounded-sm cursor-pointer text-white font-bold"
          onClick={sortByUpvotes}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="bg-violet-600 hover:bg-violet-500 py-2 px-3 rounded-sm cursor-pointer text-white font-bold"
          onClick={sortByDate}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={sortedArticles} />
    </div>
  );
};
