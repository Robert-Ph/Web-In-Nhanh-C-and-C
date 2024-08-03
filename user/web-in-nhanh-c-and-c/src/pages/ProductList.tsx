import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard.tsx';
import Banner from '../components/Banner.tsx';
import axios from 'axios';

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

interface URLParams {
    sort?: string;
    page?: number;
    categoryId?: number;
    search?: string;
}

const ProductList = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const [search, setSearch] = useState('');
    const [sortOrder, setSortOrder] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 12;

    const updateURLParams = (params: URLParams) => {
        const queryParams = new URLSearchParams(location.search);
        Object.keys(params).forEach(key => {
            const value = params[key as keyof URLParams];
            if (value !== null && value !== undefined) {
                queryParams.set(key, value.toString());
            } else {
                queryParams.delete(key);
            }
        });
        navigate({ search: queryParams.toString() });
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/categories', {
                    headers: {
                        accept: 'application/json'
                    }
                });
                setCategories(response.data);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách loại sản phẩm:', error);
            }
        };

        fetchCategories();
    }, []);

    const fetchProducts = async () => {
        const queryParams = new URLSearchParams(location.search);
        const categoryId = queryParams.get('categoryId');
        const page = queryParams.get('page');
        const sort = queryParams.get('sort');
        const search = queryParams.get('search');

        try {
            const response = await axios.get('http://localhost:8080/api/products', {
                params: {
                    sort: 'newest',
                    page: page ? Number(page) - 1 : 0,
                    size: itemsPerPage,
                    categoryId: categoryId ? Number(categoryId) : undefined,
                    productName: search || undefined,
                },
                headers: {
                    accept: 'application/json'
                }
            });
            setProducts(response.data.content);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Lỗi khi lấy danh sách sản phẩm:', error);
        }
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const categoryId = queryParams.get('categoryId');
        if (categoryId) {
            setSelectedCategoryId(Number(categoryId));
        } else {
            setSelectedCategoryId(null);
        }
        fetchProducts();
    }, [location.search]);

    const handleSortOrder = (order: string) => {
        setSortOrder(order);
        setCurrentPage(1);
        updateURLParams({ sort: order, page: 1 });
    };

    const handleCategorySelect = (categoryId: number | null) => {
        setSelectedCategoryId(categoryId);
        setCurrentPage(1);
        updateURLParams({ categoryId: categoryId || undefined, page: 1 });
    };

    const handleSearch = (value: string) => {
        setSearch(value);
        setCurrentPage(1);
        updateURLParams({ search: value, page: 1 });
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        updateURLParams({ page });
    };

    return (
        <div className="container mx-auto py-16 px-4 flex justify-center" style={{ backgroundColor: '#f7f5f5' }}>
            {/*<aside className="w-1/4 pr-4">*/}
            {/*    <div className="mb-4">*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            placeholder="Tìm kiếm..."*/}
            {/*            value={search}*/}
            {/*            onChange={(e) => handleSearch(e.target.value)}*/}
            {/*            className="border p-2 w-full bg-gray-100 rounded-lg"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className="mb-4">*/}
            {/*        <h3 className="font-medium text-xl mb-2 text-gray-700">Lọc theo loại</h3>*/}
            {/*        <div className="flex flex-wrap gap-2">*/}
            {/*            <button*/}
            {/*                onClick={() => handleCategorySelect(null)}*/}
            {/*                className={`p-2 rounded-lg transition-colors duration-300 ${selectedCategoryId === null ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}*/}
            {/*            >*/}
            {/*                Tất cả*/}
            {/*            </button>*/}
            {/*            {categories.map(category => (*/}
            {/*                <button*/}
            {/*                    key={category.category_id}*/}
            {/*                    onClick={() => handleCategorySelect(category.category_id)}*/}
            {/*                    className={`p-2 rounded-lg transition-colors duration-300 ${selectedCategoryId === category.category_id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}*/}
            {/*                >*/}
            {/*                    {category.categoryName}*/}
            {/*                </button>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <Banner img="/hero__1.webp" alt="Banner 1" link="https://example.com/banner1" width="100%" height="200px" />*/}
            {/*    <Banner img="/hero__2.webp" alt="Banner 2" link="https://example.com/banner2" width="100%" height="200px" />*/}
            {/*</aside>*/}
            <main className="w-full h-full" style={{marginRight:'22vh', marginLeft:'22vh'}}>
                <div className="grid lg:grid-cols-4 gap-4">
                    {products.map(product => (
                        <ProductCard key={product.productId} img={product.medias.length > 0 ? 'http://localhost:8080/api/images/' + product.medias[0].fileUrl : ''} name={product.productName} price="Unknown" id={product.productId} />
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 border rounded-lg mx-1 transition-colors duration-300 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ProductList;
