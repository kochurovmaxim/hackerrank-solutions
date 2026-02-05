import type { Feedback, Vote } from "../types/types";

type FeedbackAction =
  | { type: "FEEDBACK_VOTE"; id: Feedback["id"]; vote: Vote }
  | { type: "FEEDBACK_RESET" };

export const createInitialFeedback = (): Feedback[] => [
  { id: "readability", title: "Readability", upvote: 0, downvote: 0 },
  { id: "performance", title: "Performance", upvote: 0, downvote: 0 },
  { id: "security", title: "Security", upvote: 0, downvote: 0 },
  { id: "documentation", title: "Documentation", upvote: 0, downvote: 0 },
  { id: "testing", title: "Testing", upvote: 0, downvote: 0 },
];

export const feedbackReducer = (state: Feedback[], action: FeedbackAction) => {
  switch (action.type) {
    case "FEEDBACK_VOTE": {
      return state.map((item) => {
        if (item.id !== action.id) return item;

        return {
          ...item,
          upvote: action.vote === "up" ? item.upvote + 1 : item.upvote,
          downvote: action.vote === "down" ? item.downvote + 1 : item.downvote,
        };
      });
    }

    case "FEEDBACK_RESET": {
      return createInitialFeedback();
    }

    default:
      return state;
  }
};
