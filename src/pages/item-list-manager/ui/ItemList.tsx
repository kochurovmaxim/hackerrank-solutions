import type { Item } from "../types/types";

interface ItemListProps {
  items: Item[];
  onRemove?: () => void;
}

export const ItemList = ({ items }: ItemListProps) => {
  return (
    <ul data-testid="item-list">
      {items.map((item) => (
        <li
          data-testid="list-item"
          key={item.id}
          className="dark:text-white text-md"
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};
