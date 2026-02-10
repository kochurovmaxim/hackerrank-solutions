import { render, within, screen } from "@testing-library/react";
import { ArticleSortingPage } from "./ArticleSortingPage";

import { ARTICLES_DATA as articles } from "./constants";
import type { Article } from "./types/types";
import userEvent from "@testing-library/user-event";

const testIds = {
  mostUpvotedLink: "most-upvoted-link",
  mostRecentLink: "most-recent-link",
  article: "article",
};

const mostUpvotedArticles = articles.concat().sort((a, b) => {
  if (a.upvotes > b.upvotes) {
    return -1;
  }
  if (a.upvotes < b.upvotes) {
    return 1;
  }
  return 0;
});

const mostRecentArticles = articles.concat().sort((a, b) => {
  const aDate = new Date(a.date);
  const bDate = new Date(b.date);
  if (aDate > bDate) {
    return -1;
  }
  if (aDate < bDate) {
    return 1;
  }
  return 0;
});

const expectArticles = (
  articles: HTMLElement[],
  expectedArticles: Article[],
) => {
  expect(articles.length).toBe(expectedArticles.length);
  articles.forEach((article, i) => {
    const title = within(article).getByTestId("article-title").textContent;
    const upvotes = within(article).getByTestId("article-upvotes").textContent;
    const date = within(article).getByTestId("article-date").textContent;
    const expectedArticle = expectedArticles[i];
    expect([title, upvotes, date]).toEqual([
      expectedArticle.title,
      expectedArticle.upvotes.toString(),
      expectedArticle.date,
    ]);
  });
};

describe("Article Sorting", () => {
  const getUpvoteSortButton = () => screen.getByTestId("most-upvoted-link");
  const getRecentSortButton = () => screen.getByTestId("most-recent-link");

  beforeEach(() => {
    render(<ArticleSortingPage />);
  });

  it("Initial articles render correctly", () => {
    const articles = screen.getAllByTestId(testIds.article);
    expectArticles(articles, mostUpvotedArticles);
  });

  it("Clicking on top renders expected articles", async () => {
    await userEvent.click(getUpvoteSortButton());

    const articles = screen.queryAllByTestId(testIds.article);
    expectArticles(articles, mostUpvotedArticles);
  });

  it("Clicking on newest renders expected articles", async () => {
    await userEvent.click(getRecentSortButton());

    const articles = screen.queryAllByTestId(testIds.article);
    expectArticles(articles, mostRecentArticles);
  });

  it("Sequence of navigation clicks renders expected articles", async () => {
    const mostUpvotedLink = getUpvoteSortButton();
    const mostRecentLink = getRecentSortButton();

    const elements = [
      mostRecentLink,
      mostUpvotedLink,
      mostUpvotedLink,
      mostRecentLink,
      mostRecentLink,
      mostUpvotedLink,
    ];
    for (const elem of elements) {
      await userEvent.click(elem);
      const articles = screen.queryAllByTestId(testIds.article);
      const expectedArticles =
        elem === mostUpvotedLink ? mostUpvotedArticles : mostRecentArticles;
      expectArticles(articles, expectedArticles);
    }
  });
});
