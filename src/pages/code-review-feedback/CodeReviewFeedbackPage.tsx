import { useFeedback } from "./hooks/useFeedback";
import { FeedbackCard } from "./ui/FeedbackCard";

export const CodeReviewFeedbackPage = () => {
  const { feedbacks, addVote, resetVote } = useFeedback();

  return (
    <div>
      <div className="mb-4">
        <button
          type="button"
          onClick={resetVote}
          className="bg-violet-600 hover:bg-violet-500 py-2 px-3 rounded-sm cursor-pointer text-white font-bold"
        >
          Reset
        </button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} data={feedback} onVote={addVote} />
        ))}
      </div>
    </div>
  );
};
