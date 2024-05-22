import React from "react";
import InventoryItem from "./InventoryItem";

const InventoryList = ({ items, onEdit, onDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <InventoryItem item={item} />
          {item.quantity <= 5 && (
            <span style={{ color: "red" }}>Low Stock!</span>
          )}
          <button onClick={() => onEdit(item)}>Edit</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default InventoryList;
