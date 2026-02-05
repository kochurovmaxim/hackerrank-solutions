export interface Feedback {
  id: string;
  title: string;
  upvote: number;
  downvote: number;
}

export type Vote = "up" | "down";
