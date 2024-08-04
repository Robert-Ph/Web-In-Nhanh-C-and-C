// ui-admin/src/pages/products/EditProduct.tsx
import "./editProduct.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import axios, { AxiosResponse } from "axios";
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

interface Category {
    category_id: number;
    categoryName: string;
    description: string;
    parentId: number | null;
}

const EditProduct = () => {
    const { productId } = useParams<{ productId: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);
    const [formData, setFormData] = useState<Partial<Product>>({});
    const [categories, setCategories] = useState<Category[]>([]);
    const [uploading, setUploading] = useState<boolean>(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
    const [imageToDelete, setImageToDelete] = useState<number | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response: AxiosResponse<Product> = await axios.get(`http://localhost:8080/api/products/${productId}`);
                setProduct(response.data);
                setFormData(response.data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        const fetchAllCategories = async () => {
            try {
                const categoriesData: Category[] = await fetchCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchProduct();
        fetchAllCategories();
    }, [productId]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        // Save logic here
        console.log("Product saved:", formData);
        navigate("/products");
    };

    const handleAddImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const uploadFormData = new FormData();
            uploadFormData.append("image", file);
            setUploading(true);
            axios.post("/upload", uploadFormData)
                .then((response: AxiosResponse<{ url: string }>) => {
                    setFormData((prev) => ({
                        ...prev,
                        medias: [...(prev.medias || []), { fileUrl: response.data.url } as Media],
                    }));
                    setUploading(false);
                })
                .catch(() => {
                    setUploading(false);
                });
        }
    };

    const handleRemoveImage = (index: number) => {
        setImageToDelete(index);
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = (action: string) => {
        if (imageToDelete !== null) {
            if (action === "url") {
                const updatedMedias = formData.medias?.filter((_, i) => i !== imageToDelete);
                setFormData((prev) => ({
                    ...prev,
                    medias: updatedMedias,
                }));
            } else if (action === "permanent") {
                const imageUrl = formData.medias?.[imageToDelete]?.fileUrl;
                axios.post("/delete", { url: imageUrl })
                    .then(() => {
                        const updatedMedias = formData.medias?.filter((_, i) => i !== imageToDelete);
                        setFormData((prev) => ({
                            ...prev,
                            medias: updatedMedias,
                        }));
                    });
            }
        }
        setDeleteDialogOpen(false);
        setImageToDelete(null);
    };

    const handleDeleteCancel = () => {
        setDeleteDialogOpen(false);
        setImageToDelete(null);
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
                                value={formData.status}
                                onChange={handleInputChange}
                            />
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
                                                image={`http://localhost:8080/api/images/${media.fileUrl}`}
                                                alt={`Ảnh ${index + 1}`}
                                            />
                                            <CardContent>
                                                <Box display="flex" justifyContent="center">
                                                    <IconButton color="secondary" onClick={() => handleRemoveImage(index)}>
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
                                        <input type="file" hidden onChange={handleAddImage} />
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
        </Container>
    );
};

export default EditProduct;
