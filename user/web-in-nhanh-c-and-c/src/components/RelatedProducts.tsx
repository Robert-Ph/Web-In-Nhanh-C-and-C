// src/components/RelatedProducts.tsx
import ProductCard from "./ProductCard"; // Assuming ProductCard component is defined

const RelatedProducts = () => {
    const data = [
        { id: 0, img: "/product__1.webp", name: "Dried Mango", price: "" },
        { id: 1, img: "/product__1.webp", name: "Dried Mango", price: "" },
        { id: 2, img: "/product__1.webp", name: "Dried Mango", price: "" },
        { id: 3, img: "/product__1.webp", name: "Dried Mango", price: "" },
        { id: 4, img: "/product__1.webp", name: "Dried Mango", price: "" },
        { id: 5, img: "/product__1.webp", name: "Dried Mango", price: "" },
        { id: 6, img: "/product__1.webp", name: "Dried Mango", price: "" },
    ];

    return (
        <div className="container mx-auto py-16">
            <h2 className="text-2xl font-bold mb-8">Các sản phẩn tương tự</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {data.map((product) => (
                    <ProductCard
                        key={product.id}
                        img={product.img}
                        name={product.name}
                        price={product.price}
                        id={product.id} // Assuming you want to pass the product id here
                    />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
