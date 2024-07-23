import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import Banner from './Banner';

const mockProducts = [
    { id: 1, name: "Sản phẩm 1", price: 20, type: "Trái cây", img: "/product__1.webp" },
    { id: 2, name: "Sản phẩm 2", price: 25, type: "Rau củ", img: "/product__2.webp" },
    { id: 3, name: "Sản phẩm 3", price: 25, type: "Rau củ 2", img: "/product__3.webp" },
    { id: 4, name: "Sản phẩm 4", price: 25, type: "Rau củ 3", img: "/product__4.webp" },
    { id: 5, name: "Sản phẩm 5", price: 25, type: "Rau củ 4", img: "/product__1.webp" },
    { id: 6, name: "Sản phẩm 6", price: 25, type: "Trái cây", img: "/product__2.webp" },
    { id: 7, name: "Sản phẩm 7", price: 25, type: "Rau củ 2", img: "/product__3.webp" },
    { id: 8, name: "Sản phẩm 8", price: 25, type: "Rau củ 3", img: "/product__4.webp" },
    { id: 9, name: "Sản phẩm 9", price: 25, type: "Rau củ 4", img: "/product__1.webp" },
    { id: 10, name: "Sản phẩm 10", price: 25, type: "Trái cây", img: "/product__2.webp" },
    { id: 11, name: "Sản phẩm 11", price: 20, type: "Trái cây", img: "/product__1.webp" },
    { id: 12, name: "Sản phẩm 12", price: 25, type: "Rau củ", img: "/product__2.webp" },
    { id: 13, name: "Sản phẩm 13", price: 25, type: "Rau củ 2", img: "/product__3.webp" },
    { id: 14, name: "Sản phẩm 14", price: 25, type: "Rau củ 3", img: "/product__4.webp" },
    { id: 15, name: "Sản phẩm 15", price: 25, type: "Rau củ 4", img: "/product__1.webp" },
    { id: 16, name: "Sản phẩm 16", price: 25, type: "Trái cây", img: "/product__2.webp" },
    { id: 17, name: "Sản phẩm 17", price: 25, type: "Rau củ 2", img: "/product__3.webp" },
    { id: 18, name: "Sản phẩm 18", price: 25, type: "Rau củ 3", img: "/product__4.webp" },
    { id: 19, name: "Sản phẩm 19", price: 25, type: "Rau củ 4", img: "/product__1.webp" },
    { id: 20, name: "Sản phẩm 20", price: 25, type: "Trái cây", img: "/product__2.webp" },
    // Add more mock products here as needed
];

const ProductList = () => {
    const { id } = useParams();
    const [products, setProducts] = useState(mockProducts);
    const [search, setSearch] = useState('');
    const [filterType, setFilterType] = useState('');
    const [sortOrder, setSortOrder] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        setProducts(mockProducts);
    }, [id]);

    const handleSortOrder = (order: string) => {
        setSortOrder(order);
        setCurrentPage(1); // Reset to first page when sort order changes
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (filterType ? product.type === filterType : true)
    ).sort((a, b) => {
        if (sortOrder === 'newest') {
            return b.id - a.id;
        } else {
            return a.id - b.id;
        }
    });

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const productTypes = [...new Set(products.map(product => product.type))];

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
                        <ProductCard key={product.id} img={product.img} name={product.name} price={product.price.toString()} id={product.id} />
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
