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
import { Product, Category, ProductStatus } from '../../interfaces';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProduct = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [formData, setFormData] = useState<Partial<Product>>({});
    const [categories, setCategories] = useState<Category[]>([]);
    const [statuses, setStatuses] = useState<ProductStatus[]>([]);
    const [uploading, setUploading] = useState<boolean>(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
    const [imageToDelete, setImageToDelete] = useState<number | null>(null);
    const [imageDialogOpen, setImageDialogOpen] = useState<boolean>(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState<string>("");

    const fetchProduct = async () => {
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
                console.log(statusesData)
            } catch (error) {
                console.error("Error fetching statuses:", error);
            }
        };

        fetchProduct();
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
            await updateProduct(Number(productId), formData);
            console.log("Product saved:", formData);
            toast.success("Sản phẩm đã được lưu thành công!");
            fetchProduct();
        } catch (error) {
            console.error("Error saving product:", error);
            toast.error("Đã xảy ra lỗi khi lưu sản phẩm.");
        }
    };

    const handleAddImages = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length > 0) {
            setUploading(true);
            try {
                const newMedias = await addProductImages(Number(productId), files);
                setFormData((prev) => ({
                    ...prev,
                    medias: [...(prev.medias || []), ...newMedias],
                }));
                toast.success("Ảnh đã được tải lên thành công!");
            } catch (error) {
                console.error("Error uploading images:", error);
                toast.error("Đã xảy ra lỗi khi tải lên ảnh.");
            } finally {
                setUploading(false);
            }
        }
    };

    const handleRemoveImage = (index: number) => {
        setImageToDelete(index);
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = async (action: string) => {
        if (imageToDelete !== null) {
            const mediaId = formData.medias?.[imageToDelete]?.mediaId;
            try {
                if (action === "permanent" && mediaId) {
                    await deleteMediaPermanently(mediaId);
                } else if (mediaId) {
                    await deleteMediaUrl(mediaId);
                }
                const updatedMedias = formData.medias?.filter((_, i) => i !== imageToDelete);
                setFormData((prev) => ({
                    ...prev,
                    medias: updatedMedias,
                }));
                toast.success("Ảnh đã được xóa thành công!");
            } catch (error) {
                console.error("Error deleting image:", error);
                toast.error("Đã xảy ra lỗi khi xóa ảnh.");
            }
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
                                value={formData.productName}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Loại sản phẩm"
                                name="categoryId"
                                select
                                value={formData.categoryId}
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
                                value={formData.description}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Trạng thái"
                                name="status"
                                select
                                value={formData.status}
                                onChange={handleInputChange}
                            >
                                {statuses.map((status) => (
                                    <MenuItem key={status.value} value={status.value}>
                                        {status.displayName}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Ngày tạo"
                                name="createdAt"
                                value={formData.createdAt}
                                onChange={handleInputChange}
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
                                                                onClick={() => handleRemoveImage(index)}>
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
                                    {uploading && <Typography variant="body2">Đang tải lên...</Typography>}
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
                    <Button onClick={() => handleDeleteConfirm("url")} color="primary">
                        Chỉ xóa URL
                    </Button>
                    <Button onClick={() => handleDeleteConfirm("permanent")} color="secondary">
                        Xóa vĩnh viễn
                    </Button>
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
