import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import Banner from './Banner';
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

const ProductList = () => {
    const { id } = useParams<{ id: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState('');
    const [filterType, setFilterType] = useState('');
    const [sortOrder, setSortOrder] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/products', {
                    params: {
                        sort: sortOrder === 'newest' ? 'desc' : 'asc',
                        page: 0,
                        size: 300,
                        categoryId: undefined,
                    },
                    headers: {
                        accept: 'application/json'
                    }
                });
                console.log(response.data.content);
                setProducts(response.data.content);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách sản phẩm:', error);
            }
        };

        fetchProducts();
    }, [id, sortOrder, currentPage]);

    const handleSortOrder = (order: string) => {
        setSortOrder(order);
        setCurrentPage(1); // Reset to first page when sort order changes
    };

    const filteredProducts = products.filter(product =>
        product.productName.toLowerCase().includes(search.toLowerCase()) &&
        (filterType ? product.categoryName === filterType : true)
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const productTypes = [...new Set(products.map(product => product.categoryName))];

    const handleFilterType = (type: string) => {
        setFilterType(type);
        setCurrentPage(1); // Reset to first page when filter changes
    };

    return (
        <div className="container mx-auto py-16 px-4 flex">
            <aside className="w-1/4 pr-4">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1); // Reset to first page when search changes
                        }}
                        className="border p-2 w-full bg-gray-100 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <h3 className="font-medium text-xl mb-2 text-gray-700">Lọc theo loại</h3>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => handleFilterType('')}
                            className={`p-2 rounded-lg transition-colors duration-300 ${filterType === '' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                            Tất cả
                        </button>
                        {productTypes.map(type => (
                            <button
                                key={type}
                                onClick={() => handleFilterType(type)}
                                className={`p-2 rounded-lg transition-colors duration-300 ${filterType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
                <Banner img="/hero__1.webp" alt="Banner 1" link="https://example.com/banner1" width="100%" height="200px" />
                <Banner img="/hero__2.webp" alt="Banner 2" link="https://example.com/banner2" width="100%" height="200px" />
            </aside>
            <main className="w-3/4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-wrap gap-2">
                        <label className="font-medium text-xl text-gray-700">Sắp xếp theo: </label>
                        <select
                            value={sortOrder}
                            onChange={(e) => handleSortOrder(e.target.value)}
                            className="border p-2 bg-gray-100 rounded-lg"
                        >
                            <option value="newest">Mới nhất</option>
                            <option value="oldest">Cũ nhất</option>
                        </select>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {paginatedProducts.map(product => (
                        <ProductCard key={product.productId} img={product.medias.length > 0 ? 'http://localhost:8080/api/images/'+product.medias[0].fileUrl : ''} name={product.productName} price="Unknown" id={product.productId} />
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
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
