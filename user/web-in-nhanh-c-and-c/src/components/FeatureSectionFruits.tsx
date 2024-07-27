// user/web-in-nhanh-c-and-c/src/components/FeatureSectionFruits.tsx
import ProductCard from "./ProductCard.tsx";

const data = [
    {id: 0, img: "product__1.webp", name: "Dried Mango", price: ""},
    {id: 1, img: "product__2.webp", name: "Crunchy Crisps", price: ""},
    {id: 2, img: "product__3.webp", name: "Jewel Cranberries", price: ""},
    {id: 3, img: "product__4.webp", name: "Almond Organic", price: ""},
];

const FeatureSectionFruits = () => {
    return (
        <div className="container pt-5">
            <div className="lg:flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
                    <p className="text-gray-600 mt-2">
                        Buy farm fresh fruits and vegetables online at the best prices
                    </p>
                </div>
                <div className="space-x-4 mt-8 lg:mt-0 lg:ml-auto">
                    <button className="feature_btn">Fruits</button>
                    <button className="text-gray-600 hover:text-accent">Vegetables</button>
                    <button className="text-gray-600 hover:text-accent">Bread & Bakery</button>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
                <div>
                    <img className="w-full h-full object-cover" src="/feature__1.webp" alt="banner"/>
                </div>
                {data.map(el => (
                    <ProductCard
                        key={el.id}
                        img={el.img}
                        name={el.name}
                        price={el.price}
                        id={0}/>
                ))}
            </div>
        </div>
    );
};

export default FeatureSectionFruits;
