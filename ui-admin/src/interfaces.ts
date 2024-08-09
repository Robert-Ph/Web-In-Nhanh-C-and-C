// src/interfaces.ts

export interface Media {
    mediaId: number;
    fileUrl: string;
    fileType: string;
    fileSize: number;
    uploadedAt: string;
    file?: File;
}


export interface Product {
    productId: number;
    categoryId: number;
    categoryName: string;
    productName: string;
    description: string;
    status: string;
    createdAt: string;
    lastUpdated: string | null;
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

export type PartialProduct = Partial<Product> & {
    lastUpdated?: string | null;
};
