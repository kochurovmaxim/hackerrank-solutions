import { useState, useCallback } from "react";
import type { Post } from "../model/types";

let id = 0;

export const useBlog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handlePostCreate = useCallback((post: Omit<Post, "id">) => {
    setPosts((prev) => [
      ...prev,
      {
        id: id++,
        title: post.title,
        description: post.description,
      },
    ]);
  }, []);

  const handlePostDelete = useCallback((id: number) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  }, []);

  return {
    posts,
    handlePostCreate,
    handlePostDelete,
  };
};
