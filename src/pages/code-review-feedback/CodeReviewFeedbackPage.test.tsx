import { render, screen } from "@testing-library/react";
import { CodeReviewFeedbackPage } from "./CodeReviewFeedbackPage";
import userEvent from "@testing-library/user-event";

const initialFeedback = [
  { id: "readability", title: "Readability", upvote: 0, downvote: 0 },
  { id: "performance", title: "Performance", upvote: 0, downvote: 0 },
  { id: "security", title: "Security", upvote: 0, downvote: 0 },
  { id: "documentation", title: "Documentation", upvote: 0, downvote: 0 },
  { id: "testing", title: "Testing", upvote: 0, downvote: 0 },
];

describe("Code Review Feedback", () => {
  beforeEach(() => {
    render(<CodeReviewFeedbackPage />);
  });

  describe("Initial Page Rendering Tests", () => {
    it("should render all aspects with their upvote and downvote buttons and counts", () => {
      for (const feedback of initialFeedback) {
        expect(
          screen.getByTestId(`upvote-btn-${feedback.id}`),
        ).toBeInTheDocument();
        expect(
          screen.getByTestId(`downvote-btn-${feedback.id}`),
        ).toBeInTheDocument();
        expect(
          screen.getByTestId(`upvote-count-${feedback.id}`).textContent,
        ).toBe("Upvotes: 0");
        expect(
          screen.getByTestId(`downvote-count-${feedback.id}`).textContent,
        ).toBe("Downvotes: 0");
      }
    });

    it("upvotes and downvotes count for the all aspects should be 0", () => {
      for (const feedback of initialFeedback) {
        expect(
          screen.getByTestId(`upvote-count-${feedback.id}`).textContent,
        ).toBe("Upvotes: 0");
        expect(
          screen.getByTestId(`downvote-count-${feedback.id}`).textContent,
        ).toBe("Downvotes: 0");
      }
    });
  });

  describe("Functionality Tests", () => {
    it("should increment the upvote count for readability when upvote button is clicked", async () => {
      const firstFeedback = initialFeedback[0];

      await userEvent.click(
        screen.getByTestId(`upvote-btn-${firstFeedback.id}`),
      );

      expect(
        screen.getByTestId(`upvote-count-${firstFeedback.id}`).textContent,
      ).toBe("Upvotes: 1");
    });

    it("should increment the downvote count for readability when downvote button is clicked", async () => {
      const firstFeedback = initialFeedback[0];

      await userEvent.click(
        screen.getByTestId(`downvote-btn-${firstFeedback.id}`),
      );

      expect(
        screen.getByTestId(`downvote-count-${firstFeedback.id}`),
      ).toHaveTextContent("Downvotes: 1");
    });

    it("should increment the upvote and downvote counts independently for different aspects", async () => {
      const firstFeedback = initialFeedback[0];
      const secondFeedback = initialFeedback[1];

      await userEvent.click(
        screen.getByTestId(`upvote-btn-${firstFeedback.id}`),
      );
      await userEvent.click(
        screen.getByTestId(`downvote-btn-${secondFeedback.id}`),
      );

      expect(
        screen.getByTestId(`upvote-count-${firstFeedback.id}`),
      ).toHaveTextContent("Upvotes: 1");
      expect(
        screen.getByTestId(`downvote-count-${firstFeedback.id}`),
      ).toHaveTextContent("Downvotes: 0");
      expect(
        screen.getByTestId(`upvote-count-${secondFeedback.id}`),
      ).toHaveTextContent("Upvotes: 0");
      expect(
        screen.getByTestId(`downvote-count-${secondFeedback.id}`),
      ).toHaveTextContent("Downvotes: 1");
    });

    it("should correctly handle multiple clicks on upvote and downvote buttons", async () => {
      const firstFeedback = initialFeedback[0];

      await userEvent.click(
        screen.getByTestId(`upvote-btn-${firstFeedback.id}`),
      );
      await userEvent.click(
        screen.getByTestId(`upvote-btn-${firstFeedback.id}`),
      );
      (await userEvent.click(
        screen.getByTestId(`downvote-btn-${firstFeedback.id}`),
      ),
        expect(
          screen.getByTestId(`upvote-count-${firstFeedback.id}`),
        ).toHaveTextContent("Upvotes: 2"));
      expect(
        screen.getByTestId(`downvote-count-${firstFeedback.id}`),
      ).toHaveTextContent("Downvotes: 1");
    });
  });
});
