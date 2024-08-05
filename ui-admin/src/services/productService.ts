// src/services/productService.ts
import axiosClient from '../api/axiosClient';

interface Media {
    mediaId: number;
    fileUrl: string;
    fileType: string;
    fileSize: number;
    uploadedAt: string;
}

interface Product {
    productId: number;
    categoryId: number;
    categoryName: string;
    productName: string;
    description: string;
    status: string;
    createdAt: string;
    medias: Media[];
}

export const fetchProducts = async (sort: string, page: number, size: number, categoryId?: number): Promise<{ content: Product[]; totalPages: number; }> => {
    const response = await axiosClient.get('/products', {
        params: { sort, page, size, categoryId }
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

export const deleteProductImage = async (imageUrl: string): Promise<void> => {
    await axiosClient.post('/delete', { url: imageUrl });
};
