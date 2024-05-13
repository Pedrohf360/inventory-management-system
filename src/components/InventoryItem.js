import React from "react";

const InventoryItem = ({ item }) => {
  return (
    <li>
      {item.name} - {item.quantity}
    </li>
  );
};

export default InventoryItem;