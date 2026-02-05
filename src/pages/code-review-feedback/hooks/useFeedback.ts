import { useCallback, useReducer } from "react";
import {
  createInitialFeedback,
  feedbackReducer,
} from "../reducers/feedbackReducer";
import type { Feedback, Vote } from "../types/types";

export const useFeedback = () => {
  const [feedbacks, dispatch] = useReducer(
    feedbackReducer,
    undefined,
    createInitialFeedback,
  );

  const addVote = useCallback((id: Feedback["id"], vote: Vote) => {
    dispatch({ type: "FEEDBACK_VOTE", id, vote });
  }, []);

  const resetVote = useCallback(() => {
    dispatch({ type: "FEEDBACK_RESET" });
  }, []);

  return {
    feedbacks,
    addVote,
    resetVote,
  };
};
