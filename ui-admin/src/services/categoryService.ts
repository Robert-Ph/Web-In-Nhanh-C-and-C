// src/services/categoryService.ts
import axiosClient from '../api/axiosClient';

export interface Category {
    category_id: number;
    categoryName: string;
    description: string;
    parentId: number | null;
}

export const fetchCategories = async (): Promise<Category[]> => {
    const response = await axiosClient.get('/categories');
    return response.data;
};
