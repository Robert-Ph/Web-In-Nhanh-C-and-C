// src/interfaces.ts

export interface Media {
    mediaId: number;
    fileUrl: string;
    fileType: string;
    fileSize: number;
    uploadedAt: string;
}

export interface Product {
    productId: number;
    categoryId: number;
    categoryName: string;
    productName: string;
    description: string;
    status: string;
    createdAt: string;
    medias: Media[];
}

export interface Category {
    category_id: number;
    categoryName: string;
    description: string;
    parentId: number | null;
}

export interface ProductStatus {
    value: string;
    displayName: string;
}
