import type { Post } from "../model/types";

interface PostDisplayProps {
  posts: Post[];
  onDelete: (id: number) => void;
}

function PostDisplay({ posts, onDelete }: PostDisplayProps) {
  return (
    <div
      data-testid="posts-container"
      className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4"
    >
      {posts.map((post) => (
        <div
          className="grid gap-4 justify-items-center bg-gray-200 rounded-lg p-4"
          key={post.id}
        >
          <h3 className="text-3xl font-extrabold">{post?.title}</h3>
          <p>{post?.description}</p>
          <button
            onClick={() => onDelete(post.id)}
            className="bg-rose-600 hover:bg-rose-500 py-2 px-3 rounded-sm cursor-pointer text-white font-bold"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;
