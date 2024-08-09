// ui-admin/src/utils/imageUtils.ts
export const getImageUrl = (fileUrl: string): string => {
    if (!fileUrl) {
        return '';
    }

    if (fileUrl.startsWith('blob:')) {
        return fileUrl;
    }

    return `http://localhost:8080/api/images/${fileUrl}`;
};
