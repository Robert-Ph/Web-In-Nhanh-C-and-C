// ui-admin/src/pages/products/Products.tsx
import "./products.scss";
import {useState} from "react";
import {useQuery} from "react-query";
import {fetchCategories} from "../../services/categoryService";
import {fetchProducts} from "../../services/productService";
import {getImageUrl} from "../../utils/imageUtils";
import {
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Box,
    Paper,
    List,
    ListItem,
    ListItemText,
    Pagination,
} from "@mui/material";
import {Edit, Delete} from "@mui/icons-material";
import {Link} from "react-router-dom";

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

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const {data: categories = [], isLoading: isLoadingCategories} = useQuery('categories', fetchCategories, {
        select: (data) => [{category_id: null, categoryName: 'Tất cả', description: '', parentId: null}, ...data],
    });

    const {data: productData = {content: [], totalPages: 1}, isLoading: isLoadingProducts} = useQuery(
        ['products', selectedCategory, currentPage],
        () => fetchProducts('desc', currentPage - 1, productsPerPage, selectedCategory || undefined),
        {keepPreviousData: true}
    );

    const handleCategoryChange = (categoryId: number | null) => {
        setSelectedCategory(categoryId);
        setCurrentPage(1);
    };

    const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const truncate = (str: string, maxLength: number) => {
        return str.length <= maxLength ? str : str.slice(0, maxLength) + "...";
    };

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
                                {categories.map((category: Category) => (
                                    <ListItem
                                        button
                                        selected={selectedCategory === category.category_id}
                                        onClick={() => handleCategoryChange(category.category_id)}
                                        key={category.category_id}
                                    >
                                        <ListItemText primary={category.categoryName}/>
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Grid container spacing={3} className="product-list">
                        {productData.content.map((product: Product) => (
                            <Grid item xs={12} sm={6} md={3} key={product.productId}>
                                <Card className="product-card">
                                    <CardMedia
                                        height={200}
                                        component="img"
                                        alt={product.productName}
                                        image={getImageUrl(product.medias[0]?.fileUrl)}
                                    />
                                    <CardContent className="product-info">
                                        <Typography gutterBottom variant="h5" component="div" height={90}>
                                            {truncate(product.productName, 30)}
                                        </Typography>
                                        <Box mt={2} display="flex" justifyContent="space-between">
                                            <IconButton color="primary" component={Link}
                                                        to={`/products/edit/${product.productId}`}>
                                                <Edit/>
                                            </IconButton>
                                            <IconButton color="secondary">
                                                <Delete/>
                                            </IconButton>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Box mt={3} display="flex" justifyContent="center">
                        <Pagination count={productData.totalPages} page={currentPage} onChange={handlePageChange}
                                    color="primary"/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Products;
