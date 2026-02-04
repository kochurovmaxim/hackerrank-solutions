import { useState } from "react";
import type { Item } from "../types/types";

export const useItemList = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (text: string) => {
    const newItem = {
      id: Date.now(),
      text,
    };

    setItems((prev) => [...prev, newItem]);
  };

  return {
    items,
    addItem,
  };
};
