// ui-admin/src/pages/products/Products.tsx
import "./products.scss";
import { useState } from "react";
import { products } from "../../data.ts";
import {
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    IconButton,
    Box,
    Paper,
    List,
    ListItem,
    ListItemText,
    Pagination,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

interface Product {
    id: number;
    img: string;
    title: string;
    category: string;
    color: string;
    producer: string;
    price: string;
    createdAt: string;
    inStock: boolean;
}

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState("Tất cả");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const filteredProducts = selectedCategory === "Tất cả"
        ? products
        : products.filter((product: Product) => product.category === selectedCategory);

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    const categories = [
        "Tất cả",
        "Gaming",
        "Electronics",
        "Home Appliances",
    ];

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Danh sách sản phẩm
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={2}>
                    <Box mb={2}>
                        <Paper>
                            <List component="nav">
                                {categories.map((category) => (
                                    <ListItem
                                        button
                                        selected={selectedCategory === category}
                                        onClick={() => handleCategoryChange(category)}
                                        key={category}
                                    >
                                        <ListItemText primary={category} />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                        <Box mt={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={() => handleCategoryChange("Tất cả")}
                            >
                                Reset
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Grid container spacing={3}>
                        {paginatedProducts.map((product: Product) => (
                            <Grid item xs={12} sm={6} md={3} key={product.id}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        alt={product.title}
                                        height="140"
                                        image={product.img}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Loại sản phẩm: {product.category}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.price}
                                        </Typography>
                                        <Box mt={2} display="flex" justifyContent="space-between">
                                            <IconButton color="primary">
                                                <Edit />
                                            </IconButton>
                                            <IconButton color="secondary">
                                                <Delete />
                                            </IconButton>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Box mt={3} display="flex" justifyContent="center">
                        <Pagination
                            count={Math.ceil(filteredProducts.length / productsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Products;
