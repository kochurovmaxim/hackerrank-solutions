import { useItemList } from "./hooks/useItemList";
import { ItemFiled } from "./ui/ItemField";
import { ItemList } from "./ui/ItemList";

export const ItemListManagerPage = () => {
  const { items, addItem } = useItemList();

  return (
    <div className="grid gap-4">
      <h1 className="dark:text-white font-extrabold text-4xl">
        Item List Manager
      </h1>
      <ItemFiled onAdd={addItem} />
      <ItemList items={items} />
    </div>
  );
};
