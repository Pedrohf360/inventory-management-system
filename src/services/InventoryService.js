import axios from "axios";

const API_URL = "http://localhost:3000/api/inventory";

const InventoryService = {
  getAll: () => axios.get(API_URL),
  create: (item) => axios.post(API_URL, item),
};

export default InventoryService;
