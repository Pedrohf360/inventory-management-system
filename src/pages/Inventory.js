import React, { useState, useEffect } from "react";
import InventoryList from "../components/InventoryList";
import InventoryForm from "../components/InventoryForm";
import InventoryEdit from "../components/InventoryEdit";
import InventoryService from "../services/InventoryService";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setItems(InventoryService.getAll());
  }, []);

  const handleAddItem = (item) => {
    const newItem = InventoryService.create(item);
    setItems([...items, newItem]);
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
  };

  const handleUpdateItem = (updatedItem) => {
    const newItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(newItems);
    setEditingItem(null);
    InventoryService.update(updatedItem);
  };

  const handleDeleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
      InventoryService.delete(id);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Inventory Management System</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {editingItem ? (
        <InventoryEdit item={editingItem} onSubmit={handleUpdateItem} />
      ) : (
        <InventoryList items={filteredItems} onEdit={handleEditItem} onDelete={handleDeleteItem} />
      )}
      <InventoryForm onSubmit={handleAddItem} />
    </div>
  );
};

export default Inventory;
