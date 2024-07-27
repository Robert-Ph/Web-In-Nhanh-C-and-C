import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineMenu, AiOutlineRight, AiOutlineFire, AiOutlinePhone } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';
import CartCountBadge from './CartCountBadge';
import CartSidebar from './CartSidebar';
import ReactCountryFlag from 'react-country-flag';
import { useTheme } from '../context/ThemeContext';

interface Product {
    name: string;
    img: string;
}

interface Category {
    id: number;
    name: string;
    products: Product[];
}

const trendingKeywords = [
    { name: "Xoài sấy", img: "product__1.webp" },
    { name: "Chuối sấy", img: "product__1.webp" },
    { name: "Táo sấy", img: "product__1.webp" },
    { name: "Khoai lang sấy", img: "product__1.webp" },
    { name: "Hạt điều", img: "product__1.webp" },
    { name: "Hạnh nhân", img: "product__1.webp" },
];

const fruitsProducts: Product[] = [
    { name: "Xoài sấy dẻo", img: "product__1.webp" },
    { name: "Chuối sấy giòn", img: "product__2.webp" },
    { name: "Táo sấy tự nhiên", img: "product__3.webp" },
];

const nutsProducts: Product[] = [
    { name: "Hạt điều rang muối", img: "product__4.webp" },
    { name: "Hạnh nhân tẩm mật ong", img: "product__5.webp" },
    { name: "Hạt dẻ cười", img: "product__6.webp" },
];

const drinksProducts: Product[] = [
    { name: "Trà xanh Nhật Bản", img: "product__7.webp" },
    { name: "Nước ép táo", img: "product__8.webp" },
    { name: "Sinh tố xoài", img: "product__9.webp" },
];

const allProducts: Product[] = [
    ...fruitsProducts,
    ...nutsProducts,
    ...drinksProducts,
];

const categories: Category[] = [
    { id: 0, name: "Tất cả", products: allProducts },
    { id: 1, name: "Trái cây sấy", products: fruitsProducts },
    { id: 2, name: "Hạt dinh dưỡng", products: nutsProducts },
    { id: 3, name: "Đồ uống", products: drinksProducts },
];

const Navbar = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('VN');
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const toggleCartSidebar = () => {
        setIsCartOpen(!isCartOpen);
    };

    const toggleLanguageDropdown = () => {
        setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    };

    const handleLanguageChange = (countryCode: string) => {
        setSelectedLanguage(countryCode);
        setIsLanguageDropdownOpen(false);
    };

    const toggleCategoryDropdown = () => {
        setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
        setActiveCategory(null); // Reset active category when closing the dropdown
    };

    const handleSearchFocus = () => {
        setIsSearchFocused(true);
    };

    const handleSearchBlur = () => {
        // Delay hiding to allow click on keyword suggestions
        setTimeout(() => setIsSearchFocused(false), 200);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryMouseEnter = (categoryName: string) => {
        setActiveCategory(categoryName);
    };

    const handleCategoryMouseLeave = () => {
        setActiveCategory(null);
    };

    const handleCategoryClick = (categoryId: number) => {
        if (categoryId === 0) {
            navigate('/products');
        } else {
            navigate(`/products?page=1&categoryId=${categoryId}`);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50" style={{ backgroundColor: theme.navbarBackground }}>
            <div className="container pb-5 hidden lg:block">
                <div className="flex justify-between items-center pt-8 navbar">
                    <div className="flex items-center">
                        <Link to="/">
                            <h1 className="text-4xl font-medium ml-32" style={{ color: 'white', backgroundColor: 'orange' }}>Logo</h1>
                        </Link>
                        <div className="relative flex items-center ml-8 bg-white bg-opacity-20 p-2 rounded-lg" onMouseLeave={handleCategoryMouseLeave}>
                            <AiOutlineMenu className="text-white text-2xl mr-2 cursor-pointer" style={{ color: '#00359c' }} onClick={toggleCategoryDropdown} />
                            <div className="text-white cursor-pointer hover:text-gray-300" style={{ fontSize: '18px', color: '#00359c', fontFamily: 'Arial, sans-serif' }} onClick={toggleCategoryDropdown}>
                                Danh mục
                            </div>
                            {isCategoryDropdownOpen && (
                                <div className="absolute left-0 top-full mt-2 bg-white border rounded shadow-lg z-50 flex" onMouseLeave={handleCategoryMouseLeave}>
                                    <ul className="w-64">
                                        {categories.map((category, index) => (
                                            <li key={index} className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-200" onMouseEnter={() => handleCategoryMouseEnter(category.name)} onClick={() => handleCategoryClick(category.id)}>
                                                {category.name} <AiOutlineRight />
                                            </li>
                                        ))}
                                    </ul>
                                    {activeCategory && (
                                        <ul className="absolute left-full top-0 mt-2 w-64 bg-gray-100 border rounded shadow-lg z-50">
                                            {categories.find(cat => cat.name === activeCategory)?.products.map((product, index) => (
                                                <li key={index} className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
                                                    <img src={product.img} alt={product.name} className="w-8 h-8 mr-2" />
                                                    <div>
                                                        <span>{product.name}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="relative w-full max-w-[400px] flex items-center">
                        <input
                            className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
                            type="text"
                            placeholder="Tìm kiếm sản phẩm..."
                            onFocus={handleSearchFocus}
                            onBlur={handleSearchBlur}
                            onChange={handleSearchChange}
                        />
                        <BsSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20} />
                        {isSearchFocused && !searchQuery && (
                            <div className="absolute left-0 top-full mt-2 w-full bg-white border rounded shadow-lg z-50 p-4">
                                <div className="flex items-center mb-2">
                                    <span className="font-semibold text-gray-700">Xu hướng tìm kiếm</span>
                                    <AiOutlineFire className="text-red-500 ml-2" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {trendingKeywords.map((keyword, index) => (
                                        <div key={index} className="flex items-center cursor-pointer hover:bg-gray-200 p-2 rounded">
                                            <img src={keyword.img} alt={keyword.name} className="w-8 h-8 mr-2" />
                                            <span>{keyword.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {isSearchFocused && searchQuery && (
                            <div className="absolute left-0 top-full mt-2 w-full bg-white border rounded shadow-lg z-50 p-4">
                                <div className="flex items-center mb-2">
                                    <span className="font-semibold text-gray-700">Sản phẩm liên quan</span>
                                </div>
                                <div className="grid gap-4">
                                    {fruitsProducts.map((product, index) => (
                                        <div key={index} className="flex items-center cursor-pointer hover:bg-gray-200 p-2 rounded">
                                            <img src={product.img} alt={product.name} className="w-8 h-8 mr-2" />
                                            <div>
                                                <span>{product.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex gap-8 items-center" style={{ marginRight: '10vh' }}>
                        <div className="relative flex items-center bg-white bg-opacity-20 p-2 rounded-lg cursor-pointer" style={{ color: '#00359c' }}>
                            <AiOutlinePhone className="text-2xl mr-2" />
                            <span>1800.2097</span>
                        </div>
                        <div className="relative flex items-center bg-white bg-opacity-20 p-2 rounded-lg cursor-pointer" style={{ color: '#00359c' }}>
                            <FiPackage className="text-2xl mr-2" />
                            <span>Tra cứu đơn hàng</span>
                        </div>
                        <div className="relative flex items-center text-white cursor-pointer" onClick={toggleLanguageDropdown}>
                            <ReactCountryFlag
                                countryCode={selectedLanguage}
                                svg
                                style={{
                                    width: '5vh',
                                    height: '5vh',
                                    cursor: 'pointer'
                                }}
                                title={selectedLanguage === 'VN' ? 'Tiếng Việt' : 'English'}
                            />
                            {isLanguageDropdownOpen && (
                                <div className="absolute top-full mt-1 right-0 bg-white border rounded shadow-lg z-50">
                                    {selectedLanguage !== 'VN' && (
                                        <div className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleLanguageChange('VN')}>
                                            <ReactCountryFlag
                                                countryCode="VN"
                                                svg
                                                style={{
                                                    width: '2em',
                                                    height: '2em'
                                                }}
                                                title="Tiếng Việt"
                                            />
                                        </div>
                                    )}
                                    {selectedLanguage !== 'US' && (
                                        <div className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleLanguageChange('US')}>
                                            <ReactCountryFlag
                                                countryCode="US"
                                                svg
                                                style={{
                                                    width: '2em',
                                                    height: '2em'
                                                }}
                                                title="English"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="flex items-center">
                            <div className="icon_wrapper transition transform hover:scale-110 active:scale-90 bg-white text-black rounded-full p-2">
                                <AiOutlineUser />
                            </div>
                            <h2 className="ml-2">Nguyễn Văn Trường</h2>
                        </div>
                        <div className="icon_wrapper relative transition transform hover:scale-110 active:scale-90 bg-white text-black rounded-full p-2" onClick={toggleCartSidebar}>
                            <AiOutlineShoppingCart />
                            <CartCountBadge size="w-[25px] h-[25px]" />
                        </div>
                    </div>
                </div>
            </div>

            <CartSidebar isOpen={isCartOpen} toggleCartSidebar={toggleCartSidebar} />
        </div>
    );
};

export default Navbar;
