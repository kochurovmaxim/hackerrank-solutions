import type { Article } from "../types/types";

interface ArticlesProps {
  articles: Article[];
}

export const Articles = ({ articles }: ArticlesProps) => {
  return (
    <div className="mx-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
        <thead className="bg-gray-200 border-b">
          <tr>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Title
            </th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Upvotes
            </th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr
              data-testid="article"
              key={article.title}
              className="bg-white border-b border-b-gray-200 transition duration-300 ease-in-out hover:bg-gray-100"
            >
              <td
                data-testid="article-title"
                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              >
                {article.title}
              </td>
              <td
                data-testid="article-upvotes"
                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              >
                {article.upvotes}
              </td>
              <td
                data-testid="article-date"
                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              >
                {article.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
