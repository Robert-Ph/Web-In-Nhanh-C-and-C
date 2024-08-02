// ui-admin/src/pages/products/CreateProduct.tsx
import "./editProduct.scss"; // Reuse the same styles as EditProduct
import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import axios from "axios";
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
} from "@mui/material";
import { Delete } from "@mui/icons-material";

interface Product {
    imgs: string[];
    title: string;
    category: string;
    color: string;
    producer: string;
    price: string;
    createdAt: string;
    inStock: boolean;
}

const CreateProduct = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<Partial<Product>>({
        imgs: [],
        inStock: true,
    });
    const [uploading, setUploading] = useState<boolean>(false);
    const [imageToDelete, setImageToDelete] = useState<number | null>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        // Save logic here
        console.log("Product created:", formData);
        navigate("/products");
    };

    const handleAddImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const uploadFormData = new FormData();
            uploadFormData.append("image", file);
            setUploading(true);
            axios.post("/upload", uploadFormData)
                .then((response) => {
                    setFormData((prev) => ({
                        ...prev,
                        imgs: [...(prev.imgs || []), response.data.url],
                    }));
                    setUploading(false);
                })
                .catch(() => {
                    setUploading(false);
                });
        }
    };

    const handleImageChange = (index: number, value: string) => {
        const updatedImages = formData.imgs?.map((img, i) =>
            i === index ? value : img
        );
        setFormData((prev) => ({
            ...prev,
            imgs: updatedImages,
        }));
    };

    const handleRemoveImage = (index: number) => {
        setImageToDelete(index);
    };

    const handleDeleteConfirm = () => {
        if (imageToDelete !== null) {
            const updatedImages = formData.imgs?.filter((_, i) => i !== imageToDelete);
            setFormData((prev) => ({
                ...prev,
                imgs: updatedImages,
            }));
        }
        setImageToDelete(null);
    };

    const handleDeleteCancel = () => {
        setImageToDelete(null);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Tạo sản phẩm mới
            </Typography>
            <Paper>
                <Box p={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Tên sản phẩm"
                                name="title"
                                value={formData.title || ""}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Loại sản phẩm"
                                name="category"
                                select
                                value={formData.category || ""}
                                onChange={handleInputChange}
                            >
                                <MenuItem value="Gaming">Gaming</MenuItem>
                                <MenuItem value="Electronics">Electronics</MenuItem>
                                <MenuItem value="Home Appliances">Home Appliances</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Màu sắc"
                                name="color"
                                value={formData.color || ""}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Nhà sản xuất"
                                name="producer"
                                value={formData.producer || ""}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Giá"
                                name="price"
                                value={formData.price || ""}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Trạng thái kho"
                                name="inStock"
                                select
                                value={formData.inStock ? "true" : "false"}
                                onChange={handleInputChange}
                            >
                                <MenuItem value="true">Còn hàng</MenuItem>
                                <MenuItem value="false">Hết hàng</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6">Ảnh sản phẩm</Typography>
                            <Grid container spacing={2}>
                                {formData.imgs?.map((img, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Card>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={img || "https://via.placeholder.com/140"}
                                                alt={`Ảnh ${index + 1}`}
                                            />
                                            <CardContent>
                                                <TextField
                                                    fullWidth
                                                    label={`Ảnh ${index + 1}`}
                                                    value={img}
                                                    onChange={(e) => handleImageChange(index, e.target.value)}
                                                />
                                                <IconButton color="secondary" onClick={() => handleRemoveImage(index)}>
                                                    <Delete />
                                                </IconButton>
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
        </Container>
    );
};

export default CreateProduct;
