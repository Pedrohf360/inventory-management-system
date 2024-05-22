import React, { useState } from "react";

const InventoryEdit = ({ item, onSubmit }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [quantity, setQuantity] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: item.id, name, description, quantity, price });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Update Item</button>
    </form>
  );
};

export default InventoryEdit;
