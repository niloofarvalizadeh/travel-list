import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItems, onToggleItems, deleteList }) {
  const [sortby, setSortBy] = useState("input");

  let sortedItem;

  if (sortby === "input") sortedItem = items;
  if (sortby === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortby} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by input packed</option>
        </select>

        <button onClick={deleteList}>Clear list</button>
      </div>
    </div>
  );
}
