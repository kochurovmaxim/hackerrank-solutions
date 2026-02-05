import { memo } from "react";
import type { Feedback, Vote } from "../types/types";

interface FeedbackCardProps {
  data: Feedback;
  onVote: (id: Feedback["id"], vote: Vote) => void;
}

export const FeedbackCard = memo(({ data, onVote }: FeedbackCardProps) => {
  const { id, title, upvote, downvote } = data;
  return (
    <div className="grid gap-4 justify-items-center bg-gray-200 rounded-lg p-4">
      <h2 className="text-3xl font-extrabold">{title}</h2>
      <div className="flex gap-2">
        <button
          className="bg-green-600 hover:bg-green-500 py-2 px-3 rounded-sm cursor-pointer text-white font-bold"
          data-testid={`upvote-btn-${id}`}
          onClick={() => onVote(id, "up")}
        >
          👍 Upvote
        </button>
        <button
          className="bg-rose-600 hover:bg-rose-500 py-2 px-3 rounded-sm cursor-pointer text-white font-bold"
          data-testid={`downvote-btn-${id}`}
          onClick={() => onVote(id, "down")}
        >
          👎 Downvote
        </button>
      </div>
      <p className="" data-testid={`upvote-count-${id}`}>
        Upvotes: <strong>{upvote}</strong>
      </p>
      <p className="" data-testid={`downvote-count-${id}`}>
        Downvotes: <strong>{downvote}</strong>
      </p>
    </div>
  );
});
