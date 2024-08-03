// ui-admin/src/pages/products/CreateProduct.tsx
import "./createProduct.scss"; // Reuse the same styles as
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
    description: string;
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
    const [, setImageToDelete] = useState<number | null>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    const handleRemoveImage = (index: number) => {
        setImageToDelete(index);
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
        </Container>
    );
};

export default CreateProduct;
