import React, { useState, useEffect } from "react";
import InventoryList from "../components/InventoryList";
import InventoryForm from "../components/InventoryForm";
import InventoryService from "../services/InventoryService";

const Inventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    InventoryService.getAll().then((data) => setItems(data));
  }, []);

  const handleAddItem = (item) => {
    InventoryService.create(item).then((data) => setItems([...items, data]));
  };

  return (
    <div>
      <h1>Inventory Management System</h1>
      <InventoryList items={items} />
      <InventoryForm onSubmit={handleAddItem} />
    </div>
  );
};

export default Inventory;