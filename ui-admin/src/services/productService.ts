// src/services/productService.ts
import axiosClient from '../api/axiosClient';
import {Product, Media, ProductStatus} from '../interfaces';
import {toast} from 'react-toastify';

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
    toast.success('Cập nhật sản phẩm thành công!');
    return response.data;
};

export const addProductImages = async (productId: number, files: File[]): Promise<Media[]> => {
    const formData = new FormData();
    files.forEach((file) => {
        formData.append('files', file);
    });
    const response = await axiosClient.post(`/products/${productId}/media`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    toast.success('Thêm ảnh thành công!');
    return response.data;
};

export const deleteMediaUrl = async (mediaId: number): Promise<void> => {
    await axiosClient.delete(`/products/media/${mediaId}/url`);
    toast.success('Xóa URL ảnh thành công!');
};

export const deleteMediaPermanently = async (mediaId: number): Promise<void> => {
    await axiosClient.delete(`/products/media/${mediaId}/permanent`);
    toast.success('Xóa ảnh vĩnh viễn thành công!');
};

export const fetchProductStatuses = async (): Promise<ProductStatus[]> => {
    const response = await axiosClient.get('/products/statuses');
    return response.data.map((status: { value: string, displayName: string }) => ({
        value: status.value,
        displayName: status.displayName
    }));
};

export const createProduct = async (productData: Partial<Product>): Promise<Product> => {
    const response = await axiosClient.post('/products', productData);
    toast.success('Tạo sản phẩm thành công!');
    return response.data;
};
