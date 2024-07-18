// user/web-in-nhanh-c-and-c/src/components/Category.tsx
import CategoryCard from "./CategoryCard.tsx";
import { Link } from "react-router-dom";

const data = [
    {
        id: 0,
        name: "Trái Cây Tươi",
        count: "9 Sản phẩm",
        img: "/category__1.webp",
    },
    {
        id: 1,
        name: "Rau Củ Tươi",
        count: "8 Sản phẩm",
        img: "/category__2.webp",
    },
    {
        id: 2,
        name: "Thực Phẩm Đóng Hộp",
        count: "10 Sản phẩm",
        img: "/category__3.webp",
    },
    {
        id: 3,
        name: "Bánh Mì & Bánh Ngọt",
        count: "12 Sản phẩm",
        img: "/category__4.webp",
    },
    {
        id: 4,
        name: "Cá",
        count: "10 Sản phẩm",
        img: "/category__5.webp",
    },
    {
        id: 5,
        name: "Trứng & Sữa",
        count: "7 Sản phẩm",
        img: "/category__6.webp",
    },
    {
        id: 6,
        name: "Nước Giải Khát",
        count: "5 Sản phẩm",
        img: "/category__7.webp",
    },
    {
        id: 7,
        name: "Trái Cây Tươi",
        count: "9 Sản phẩm",
        img: "/category__1.webp",
    },
];

const Category = () => {
    return (
        <div className="container pt-16">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((el) => (
                    <Link to={`/category/${el.id}`} key={el.id}>
                        <CategoryCard
                            img={el.img}
                            name={el.name}
                            count={el.count}
                        />
                    </Link>
                ))}
            </div>
            <div className="text-center mt-8">
                <Link to="/tat-ca-danh-muc" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                    Xem Tất Cả
                </Link>
            </div>
        </div>
    );
};

export default Category;
