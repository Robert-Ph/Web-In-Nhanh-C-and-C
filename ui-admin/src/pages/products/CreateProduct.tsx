// ui-admin/src/pages/products/CreateProduct.tsx
import "./createProduct.scss";
import { useState, useEffect, ChangeEvent } from "react";
import { fetchCategories, Category } from "../../services/categoryService";
import { createProduct, addProductImages } from "../../services/productService"; // Import addProductImages
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
    imgs: File[];
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
    const [formData, setFormData] = useState<Partial<Product>>({
        imgs: [],
        inStock: true,
    });
    const [categories, setCategories] = useState<Category[]>([]);
    const [uploading, setUploading] = useState<boolean>(false);

    useEffect(() => {
        const fetchAllCategories = async () => {
            try {
                const categoriesData = await fetchCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchAllCategories();
    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        const productData = {
            productName: formData.title,
            description: formData.description,
            status: "available",
            categoryId: formData.category ? parseInt(formData.category) : undefined,
        };

        try {
            const createdProduct = await createProduct(productData);
            console.log("Product created:", createdProduct);

            if (createdProduct.productId && formData.imgs && formData.imgs.length > 0) {
                await handleAddImages(createdProduct.productId, formData.imgs);
            }

            window.location.reload();
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    const handleAddImages = async (productId: number, files: File[]) => {
        setUploading(true);
        try {
            await addProductImages(productId, files);
        } catch (error) {
            console.error("Error uploading images:", error);
        } finally {
            setUploading(false);
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setFormData((prev) => ({
            ...prev,
            imgs: [...(prev.imgs || []), ...files],
        }));
    };

    const handleRemoveImage = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            imgs: prev.imgs?.filter((_, i) => i !== index) || [],
        }));
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
                                {categories.map((category) => (
                                    <MenuItem key={category.category_id} value={category.category_id.toString()}>
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
                        <Grid item xs={12}>
                            <Typography variant="h6">Ảnh sản phẩm</Typography>
                            <Grid container spacing={2}>
                                {formData.imgs?.map((img, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Card>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={URL.createObjectURL(img)}
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
                                        <input type="file" hidden multiple onChange={handleFileChange} />
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
