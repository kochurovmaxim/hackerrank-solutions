import { useBlog } from "../hooks/useBlog";
import { useFormCreate } from "../hooks/useFormCreate";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

export const BlogPostPage = () => {
  const { posts, handlePostCreate, handlePostDelete } = useBlog();
  const { formData, handleFormChange, handleClear } = useFormCreate();

  const handleCreate = () => {
    if (formData.title.trim().length && formData.description.trim().length) {
      handlePostCreate(formData);
      handleClear();
    }
  };

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input formData={formData} onChange={handleFormChange} />
        <button
          data-testid="create-button"
          onClick={handleCreate}
          className="w-full bg-violet-600 hover:bg-violet-500 py-2 px-3 rounded-sm cursor-pointer text-white font-bold"
        >
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts || []} onDelete={handlePostDelete} />
      </div>
    </div>
  );
};
