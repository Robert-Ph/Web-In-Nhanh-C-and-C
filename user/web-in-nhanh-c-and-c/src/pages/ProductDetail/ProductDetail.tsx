import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import RelatedProducts from "../../components/RelatedProducts.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productDetail.css"; // Import file CSS

interface Media {
    mediaId: number;
    fileUrl: string;
    fileType: string;
    fileSize: number;
    uploadedAt: string;
}

interface ProductDetailProps {
    productId: number;
    categoryId: number;
    categoryName: string;
    productName: string;
    description: string;
    status: string;
    createdAt: string;
    medias: Media[];
}

const ProductDetail: React.FC = () => {
    const [product, setProduct] = useState<ProductDetailProps | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/${id}`)
            .then(response => {
                setProduct(response.data);
                if (response.data.medias.length > 0) {
                    setSelectedImage(`http://localhost:8080/api/images/${response.data.medias[0].fileUrl}`);
                }
            })
            .catch(error => {
                console.error("There was an error fetching the product data!", error);
            });
    }, [id]);

    const handleOrderClick = () => {
        navigate('/checkout');
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container mx-auto py-16 px-4">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex flex-col w-full lg:w-1/2">
                    {selectedImage && (
                        <img className="w-full h-full object-cover" src={selectedImage} alt={product.productName} style={{ height: "75vh" }} />
                    )}
                    <div className="mt-4">
                        <Slider {...settings}>
                            {product.medias.map((media, index) => (
                                <img
                                    key={index}
                                    className={`slider-image ${selectedImage === `http://localhost:8080/api/images/${media.fileUrl}` ? 'selected' : ''}`}
                                    src={`http://localhost:8080/api/images/${media.fileUrl}`}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => setSelectedImage(`http://localhost:8080/api/images/${media.fileUrl}`)}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:w-1/2 space-y-4">
                    <h1 className="text-3xl font-bold">{product.productName}</h1>
                    <div className="text-yellow-400 flex gap-[2px] text-[20px]">
                        {Array.from({ length: 5 }, (_, i) => i < 4 ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />)}
                    </div>
                    <p className="text-gray-600">{product.description}</p>
                    <div className="flex items-center space-x-4 mt-4">
                        <button style={{ fontSize: '20px' }}
                                className="flex items-center bg-blue-600 text-white text-4xl py-2 px-6 w-auto h-[60px] rounded-lg hover:bg-blue-700 transition duration-300">
                            <AiOutlineShoppingCart className="mr-2" size={30} />
                            Thêm vào giỏ hàng
                        </button>
                        <button style={{ fontSize: '20px' }}
                                onClick={handleOrderClick}
                                className="bg-blue-600 text-white text-4xl w-auto h-[60px] py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                            Đặt hàng
                        </button>
                    </div>
                    <h2 className="text-2xl font-bold text-red-600">Chú ý: Chúng tôi sẽ liên hệ sớm nhất tới bạn sau khi đặt hàng</h2>
                </div>
            </div>
            <RelatedProducts />
        </div>
    );
};

export default ProductDetail;
