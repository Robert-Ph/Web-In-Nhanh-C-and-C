// ui-admin/src/services/productService.ts
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const fetchProducts = async (sort: string, page: number, size: number, categoryId?: number) => {
    const response = await axios.get(`${API_URL}/products`, {
        params: {
            sort,
            page,
            size,
            categoryId
        }
    });
    return response.data;
};

export const fetchProductById = async (productId: number) => {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
};
