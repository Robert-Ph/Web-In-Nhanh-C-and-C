// src/services/productService.ts
import axiosClient from '../api/axiosClient';
import { Product, Media, ProductStatus } from '../interfaces';

export const fetchProducts = async (sort: string, page: number, size: number, categoryId?: number): Promise<{
    content: Product[];
    totalPages: number;
}> => {
    const response = await axiosClient.get('/products', {
        params: {sort, page, size, categoryId}
    });
    return response.data;
};

export const fetchProductById = async (productId: number): Promise<Product> => {
    const response = await axiosClient.get(`/products/${productId}`);
    return response.data;
};

export const updateProduct = async (productId: number, productData: Partial<Product>): Promise<Product> => {
    const response = await axiosClient.put(`/products/${productId}`, productData);
    return response.data;
};

export const addProductImage = async (productId: number, file: File): Promise<Media> => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axiosClient.post(`/products/${productId}/media`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
};

export const deleteMediaUrl = async (mediaId: number): Promise<void> => {
    await axiosClient.delete(`/products/media/${mediaId}/url`);
};

export const deleteMediaPermanently = async (mediaId: number): Promise<void> => {
    await axiosClient.delete(`/products/media/${mediaId}/permanent`);
};

export const fetchProductStatuses = async (): Promise<ProductStatus[]> => {
    const response = await axiosClient.get('/products/statuses');
    console.log("response.data"); // Thêm log để kiểm tra dữ liệu

    return response.data.map((status: { value: string, displayName: string }) => ({
        value: status.value,
        displayName: status.displayName
    }));
};
