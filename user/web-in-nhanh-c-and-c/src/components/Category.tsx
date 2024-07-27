// user/web-in-nhanh-c-and-c/src/components/Category.tsx
import { useState, useEffect } from 'react';
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";
import axios from 'axios';

interface Category {
    category_id: number;
    categoryName: string;
    description: string;
    parentId: number | null;
}

const Category = () => {
    const [categories, setCategories] = useState<Category[]>([]);

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

    return (
        <div className="container pt-16">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((el) => (
                    <Link to={`/products?categoryId=${el.category_id}`} key={el.category_id}>
                        <CategoryCard
                            img={`/category__5.webp`} // Assuming you have images named by category_id
                            name={el.categoryName}
                            count={`${el.description}`} // Adjust this if you have a different count property
                        />
                    </Link>
                ))}
            </div>
            <div className="text-center mt-8">
                <Link to="/products" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                    Xem Tất Cả
                </Link>
            </div>
        </div>
    );
};

export default Category;
