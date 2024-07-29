// user/web-in-nhanh-c-and-c/src/components/ProductDetail.tsx
import {AiFillStar, AiOutlineStar, AiOutlineShoppingCart} from "react-icons/ai";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
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
                                                         images, name,
                                                         // price,
                                                         description, rating, reviews
                                                     }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const navigate = useNavigate();

    const handleOrderClick = () => {
        navigate('/checkout');
    };

    return (
        <div className="container mx-auto py-16 px-4">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex flex-col w-full lg:w-1/2">
                    <img className="w-full h-full object-cover" src={selectedImage} alt={name}/>
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
                        {Array.from({length: 5}, (_, i) => i < rating ? <AiFillStar key={i}/> :
                            <AiOutlineStar key={i}/>)}
                    </div>
                    {/*<h2 className="text-2xl font-bold text-red-600">{price}</h2>*/}
                    <p className="text-gray-600">{description}</p>
                    <div className="flex items-center space-x-4 mt-4">
                        <button style={{fontSize: '20px'}}
                                className="flex items-center bg-blue-600 text-white text-4xl py-2 px-6 w-auto h-[60px] rounded-lg hover:bg-blue-700 transition duration-300">
                            <AiOutlineShoppingCart className="mr-2" size={30}/>
                            Thêm vào giỏ hàng
                        </button>
                        <button style={{fontSize: '20px'}}
                                onClick={handleOrderClick}
                                className="bg-blue-600 text-white text-4xl w-auto h-[60px] py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                            Đặt hàng
                        </button>
                    </div>
                    <h2 className="text-2xl font-bold text-red-600">Chú ý: Chúng tôi sẽ liên hệ sớm nhất tới bạn sau khi
                        đặt hàng</h2>
                </div>
            </div>
            <div className="mt-16">
                <h2 className="text-2xl font-bold">Đánh giá</h2>
                <div className="space-y-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="border border-gray-200 p-4 rounded-lg">
                            <div className="text-yellow-400 flex gap-[2px] text-[20px]">
                                {Array.from({length: 5}, (_, i) => i < review.rating ? <AiFillStar key={i}/> :
                                    <AiOutlineStar key={i}/>)}
                            </div>
                            <p className="mt-2 text-gray-600">{review.comment}</p>
                            {review.image && <img className="mt-2 w-full h-full object-cover" src={review.image}
                                                  alt={`Review ${index + 1} image`}/>}
                            {review.video && <video className="mt-2 w-full" controls style={{width:'60vh', height:'40vh'}}>
                                <source src={review.video} type="video/mp4"/>
                                Trình duyệt của bạn không hỗ trợ thẻ video.
                            </video>}
                        </div>
                    ))}
                </div>
            </div>
            <RelatedProducts/>
        </div>
    );
};

export default ProductDetail;
