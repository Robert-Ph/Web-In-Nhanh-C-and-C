// ui-admin/src/utils/imageUtils.ts
export const getImageUrl = (fileUrl: string): string => {
    return `http://localhost:8080/api/images/${fileUrl}`;
};
