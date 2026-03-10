import type { ChangeEvent } from "react";
import type { Post } from "../model/types";

interface InputProps {
  formData: Omit<Post, "id">;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function Input({ formData, onChange }: InputProps) {
  return (
    <div className="layout-column justify-content-center align-items-center">
      <input
        className="w-full px-3 py-2 mb-6 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
        type="text"
        placeholder="Enter Title"
        value={formData.title}
        name="title"
        onChange={onChange}
        data-testid="title-input"
      />
      <textarea
        className="w-full px-3 py-2 mb-6 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
        placeholder="Enter Description"
        value={formData.description}
        name="description"
        onChange={onChange}
        data-testid="description-input"
      />
    </div>
  );
}

export default Input;
