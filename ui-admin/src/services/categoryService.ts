// ui-admin/src/services/categoryService.ts
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const fetchCategories = async () => {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
};
