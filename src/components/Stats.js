export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  return (
    <footer className="stats">
      <em>
        {" "}
        👜 You have {numItems} on your list and you already packed {numPacked}{" "}
      </em>
    </footer>
  );
}
