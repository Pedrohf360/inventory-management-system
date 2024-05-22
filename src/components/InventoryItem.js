import React from "react";

const InventoryItem = ({ item }) => {
  return (
    <li>
      {item.name} - {item.description} - {item.quantity} - {item.price}
    </li>
  );
};

export default InventoryItem;
