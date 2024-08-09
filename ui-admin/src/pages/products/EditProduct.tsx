// ui-admin/src/pages/products/EditProduct.tsx
import "./editProduct.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import {
    fetchProductById,
    updateProduct,
    addProductImages,
    deleteMediaPermanently,
    deleteMediaUrl,
    fetchProductStatuses
} from "../../services/productService";
import { fetchCategories } from "../../services/categoryService";
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Grid,
    Paper,
    MenuItem,
    IconButton,
    Card,
    CardMedia,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { getImageUrl } from "../../utils/imageUtils";
import { Product, Category, ProductStatus, Media, PartialProduct } from '../../interfaces';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatDateTime } from "../../utils/dateUtils";

const EditProduct = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [formData, setFormData] = useState<PartialProduct>({});
    const [categories, setCategories] = useState<Category[]>([]);
    const [statuses, setStatuses] = useState<ProductStatus[]>([]);
    const [newImages, setNewImages] = useState<File[]>([]);
    const [tempMedias, setTempMedias] = useState<Media[]>([]);
    const [deleteActions, setDeleteActions] = useState<{ mediaId: number, action: string }[]>([]);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
    const [imageToDelete, setImageToDelete] = useState<number | null>(null);
    const [imageDialogOpen, setImageDialogOpen] = useState<boolean>(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState<string>("");

    const fetchProductData = async () => {  // Sửa tên hàm này để tránh trùng với biến
        try {
            const data = await fetchProductById(Number(productId));
            setProduct(data);
            setFormData(data);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    useEffect(() => {
        const fetchAllCategories = async () => {
            try {
                const categoriesData: Category[] = await fetchCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        const fetchAllStatuses = async () => {
            try {
                const statusesData: ProductStatus[] = await fetchProductStatuses();
                setStatuses(statusesData);
            } catch (error) {
                console.error("Error fetching statuses:", error);
            }
        };

        fetchProductData();
        fetchAllCategories();
        fetchAllStatuses();
    }, [productId]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        if (!formData.productName) {
            toast.error("Tên sản phẩm không được để trống.");
            return;
        }
        if (!formData.categoryId) {
            toast.error("Bạn phải chọn loại sản phẩm.");
            return;
        }

        try {
            // Cập nhật thông tin sản phẩm
            await updateProduct(Number(productId), formData);
            console.log("Product saved:", formData);

            // Thêm ảnh mới
            if (newImages.length > 0) {
                await addProductImages(Number(productId), newImages);
                setNewImages([]);
                setTempMedias([]);
            }

            // Xóa ảnh theo hành động đã lưu
            for (const action of deleteActions) {
                if (action.action === "permanent") {
                    await deleteMediaPermanently(action.mediaId);
                } else if (action.action === "url") {
                    await deleteMediaUrl(action.mediaId);
                }
            }
            setDeleteActions([]);

            toast.success("Sản phẩm đã được lưu thành công!");
            fetchProductData();  // Gọi lại fetchProductData để cập nhật UI
        } catch (error) {
            console.error("Error saving product:", error);
            toast.error("Đã xảy ra lỗi khi lưu sản phẩm.");
        }
    };

    const handleAddImages = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length > 0) {
            setNewImages((prev) => [...prev, ...files]);
            const newTempMedias: Media[] = files.map((file, index) => ({
                mediaId: -(Date.now() + index), // ID tạm thời để hiển thị, đảm bảo giá trị là số âm để không trùng với ID từ server
                fileUrl: URL.createObjectURL(file),
                fileType: file.type,
                fileSize: file.size,
                uploadedAt: new Date().toISOString(),
            }));
            setTempMedias((prev) => [...prev, ...newTempMedias]);
        }
    };

    const handleRemoveImage = (index: number, isTemp: boolean) => {
        if (isTemp) {
            setTempMedias((prev) => prev.filter((_, i) => i !== index));
            setNewImages((prev) => prev.filter((_, i) => i !== index));
        } else {
            setImageToDelete(index);
            setDeleteDialogOpen(true);
        }
    };

    const handleDeleteConfirm = (action: string) => {
        if (imageToDelete !== null && formData.medias?.[imageToDelete]) {
            const media = formData.medias[imageToDelete];
            setDeleteActions((prev) => [...prev, { mediaId: media.mediaId, action }]);
            const updatedMedias = formData.medias.filter((_, i) => i !== imageToDelete);
            setFormData((prev) => ({
                ...prev,
                medias: updatedMedias,
            }));
        }
        setDeleteDialogOpen(false);
        setImageToDelete(null);
    };

    const handleDeleteCancel = () => {
        setDeleteDialogOpen(false);
        setImageToDelete(null);
    };

    const handleImageClick = (imageUrl: string) => {
        setSelectedImageUrl(imageUrl);
        setImageDialogOpen(true);
    };

    const handleImageDialogClose = () => {
        setImageDialogOpen(false);
        setSelectedImageUrl("");
    };

    if (!product) {
        return <Typography variant="h6">Sản phẩm không tồn tại</Typography>;
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Chỉnh sửa sản phẩm
            </Typography>
            <Paper>
                <Box p={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Tên sản phẩm"
                                name="productName"
                                value={formData.productName || ""}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Loại sản phẩm"
                                name="categoryId"
                                select
                                value={formData.categoryId || ""}
                                onChange={handleInputChange}
                            >
                                {categories.map((category) => (
                                    <MenuItem key={category.category_id} value={category.category_id}>
                                        {category.categoryName}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Mô tả sản phẩm"
                                name="description"
                                multiline
                                rows={4}
                                value={formData.description || ""}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                label="Trạng thái"
                                name="status"
                                select
                                value={formData.status || ""}
                                onChange={handleInputChange}
                            >
                                {statuses.map((status) => (
                                    <MenuItem key={status.value} value={status.value}>
                                        {status.displayName}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                label="Ngày tạo"
                                name="createdAt"
                                value={formatDateTime(formData.createdAt || undefined)}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                label="Ngày cập nhật cuối"
                                name="lastUpdated"
                                value={formatDateTime(formData.lastUpdated || undefined)}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6">Ảnh sản phẩm</Typography>
                            <Grid container spacing={2}>
                                {formData.medias?.map((media, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Card>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={getImageUrl(media.fileUrl)}
                                                alt={`Ảnh ${index + 1}`}
                                                onClick={() => handleImageClick(getImageUrl(media.fileUrl))}
                                                style={{ cursor: 'pointer' }}
                                            />
                                            <CardContent>
                                                <Box display="flex" justifyContent="center">
                                                    <IconButton color="secondary"
                                                                onClick={() => handleRemoveImage(index, false)}>
                                                        <Delete />
                                                    </IconButton>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                                {tempMedias.map((media, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={media.mediaId}>
                                        <Card>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={media.fileUrl}
                                                alt={`Ảnh tạm thời ${index + 1}`}
                                                onClick={() => handleImageClick(media.fileUrl)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                            <CardContent>
                                                <Box display="flex" justifyContent="center">
                                                    <IconButton color="secondary"
                                                                onClick={() => handleRemoveImage(index, true)}>
                                                        <Delete />
                                                    </IconButton>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                                <Grid item xs={12}>
                                    <Button variant="contained" component="label" color="primary">
                                        Thêm ảnh mới
                                        <input type="file" hidden multiple onChange={handleAddImages} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Box mt={3} display="flex" justifyContent="flex-end">
                        <Button variant="contained" color="primary" onClick={handleSave}>
                            Lưu
                        </Button>
                    </Box>
                </Box>
            </Paper>
            <Dialog
                open={deleteDialogOpen}
                onClose={handleDeleteCancel}
            >
                <DialogTitle>Xóa ảnh</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Bạn muốn xóa ảnh này như thế nào?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteCancel} color="primary">
                        Hủy
                    </Button>
                    {imageToDelete !== null && formData.medias?.[imageToDelete]?.mediaId !== -1 && (
                        <>
                            <Button onClick={() => handleDeleteConfirm("url")} color="primary">
                                Chỉ xóa URL
                            </Button>
                            <Button onClick={() => handleDeleteConfirm("permanent")} color="secondary">
                                Xóa vĩnh viễn
                            </Button>
                        </>
                    )}
                    {imageToDelete !== null && formData.medias?.[imageToDelete]?.mediaId === -1 && (
                        <Button onClick={() => handleDeleteConfirm("remove")} color="secondary">
                            Xóa khỏi danh sách
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
            <Dialog
                open={imageDialogOpen}
                onClose={handleImageDialogClose}
                maxWidth="md"
                fullWidth
            >
                <DialogContent>
                    <img src={selectedImageUrl} alt="Product" style={{ width: '100%' }} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleImageDialogClose} color="primary">
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog>
            <ToastContainer />
        </Container>
    );
};

export default EditProduct;
