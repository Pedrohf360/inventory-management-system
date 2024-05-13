import React from "react";
import InventoryItem from "./InventoryItem";

const InventoryList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <InventoryItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default InventoryList;