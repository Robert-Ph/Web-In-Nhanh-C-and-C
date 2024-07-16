// src/components/ProductDetail.tsx
import { AiFillStar, AiOutlineStar, AiOutlineShopping } from "react-icons/ai";
import { useState } from "react";
import RelatedProducts from "./RelatedProducts.tsx";

interface Review {
    rating: number;
    comment: string;
    image?: string;
    video?: string;
}

interface ProductDetailProps {
    id: number;
    images: string[];
    name: string;
    price: string;
    description: string;
    rating: number;
    reviews: Review[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({
                                                         // id,
                                                         images, name, price, description, rating, reviews }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="container mx-auto py-16 px-4">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex flex-col w-full lg:w-1/2">
                    <img className="w-full h-full object-cover" src={selectedImage} alt={name} />
                    <div className="flex space-x-2 mt-4">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                className={`w-16 h-16 object-cover cursor-pointer ${selectedImage === img ? 'border-2 border-accent' : 'border-2 border-transparent'}`}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col w-full lg:w-1/2 space-y-4">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <div className="text-yellow-400 flex gap-[2px] text-[20px]">
                        {Array.from({ length: 5 }, (_, i) => i < rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />)}
                    </div>
                    <h2 className="text-2xl font-bold text-red-600">{price}</h2>
                    <p className="text-gray-600">{description}</p>
                    <button className="mt-4 bg-accent text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer">
                        <AiOutlineShopping />
                    </button>
                </div>
            </div>
            <div className="mt-16">
                <h2 className="text-2xl font-bold">Đánh giá</h2>
                <div className="space-y-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="border border-gray-200 p-4 rounded-lg">
                            <div className="text-yellow-400 flex gap-[2px] text-[20px]">
                                {Array.from({ length: 5 }, (_, i) => i < review.rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />)}
                            </div>
                            <p className="mt-2 text-gray-600">{review.comment}</p>
                            {review.image && <img className="mt-2 w-full h-full object-cover" src={review.image} alt={`Review ${index + 1} image`} />}
                            {review.video && <video className="mt-2 w-full" controls>
                                <source src={review.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>}
                        </div>
                    ))}
                </div>
            </div>
            <RelatedProducts />
        </div>
    );
};

export default ProductDetail;
