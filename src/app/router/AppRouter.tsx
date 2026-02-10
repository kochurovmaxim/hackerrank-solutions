import { createBrowserRouter, RouterProvider } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { ItemListManagerPage } from "@/pages/item-list-manager/ItemListManagerPage";
import { CodeReviewFeedbackPage } from "@/pages/code-review-feedback/CodeReviewFeedbackPage";
import { ArticleSortingPage } from "@/pages/article-sorting/ArticleSortingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "item-list-manager",
        element: <ItemListManagerPage />,
      },
      {
        path: "code-review-feedback",
        element: <CodeReviewFeedbackPage />,
      },
      {
        path: "article-sorting",
        element: <ArticleSortingPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
