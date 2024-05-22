const InventoryService = {
  getAll: () => {
    const items = localStorage.getItem('inventory');
    return items ? JSON.parse(items).filter(item => item.quantity > 0) : [];
  },
  create: (item) => {
    const items = InventoryService.getAll();
    item.id = items.length + 1; // Assuming unique IDs
    items.push(item);
    localStorage.setItem('inventory', JSON.stringify(items));
    return item;
  },
  delete: (id) => {
    const items = InventoryService.getAll();
    const newItems = items.filter((item) => item.id !== id);
    localStorage.setItem('inventory', JSON.stringify(newItems));
  },
  update: (item) => {
    const items = InventoryService.getAll();
    const index = items.findIndex((i) => i.id === item.id);
    items[index] = item;
    localStorage.setItem('inventory', JSON.stringify(items));
  },
};

export default InventoryService;
