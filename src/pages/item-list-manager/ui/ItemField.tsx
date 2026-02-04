import { useState } from "react";

interface ItemFiledProps {
  onAdd: (text: string) => void;
}

export const ItemFiled = ({ onAdd }: ItemFiledProps) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed === "") return;

    onAdd(trimmed);
    setInput("");
  };

  return (
    <>
      <input
        type="text"
        id="text"
        name="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        data-testid="input-field"
        placeholder="Enter item"
        className="py-2 px-3 bg-blue-100 rounded-sm"
      />
      <button
        data-testid="add-button"
        onClick={handleAdd}
        className="bg-violet-600 hover:bg-violet-500 py-2 px-3 rounded-sm cursor-pointer text-white font-bold"
      >
        Add Item
      </button>
    </>
  );
};
