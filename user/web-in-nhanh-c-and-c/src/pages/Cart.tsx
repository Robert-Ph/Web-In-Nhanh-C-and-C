import {AiOutlineMinus, AiOutlinePlus, AiOutlineClose} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Cart = () => {
    const navigate = useNavigate();

    const initialCartItems = [
        {
            id: 1,
            name: "Dried Mango",
            price: 20,
            quantity: 1,
            image: "/product__1.webp",
        },
        {
            id: 2,
            name: "Dried Banana",
            price: 15,
            quantity: 2,
            image: "/product__2.webp",
        },
    ];

    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleRemoveItem = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleUpdateQuantity = (id: number, quantity: number) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? {...item, quantity: Math.max(1, quantity)} : item
        ));
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    // const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-6">Giỏ hàng của bạn</h1>
            <div className="space-y-6">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-white p-4 shadow rounded-lg">
                        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg"/>
                        <div className="flex-1 ml-4">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            {/*<p className="text-gray-600">Giá: {item.price}</p>*/}
                            <div className="flex items-center mt-2">
                                <button
                                    className="text-gray-500 hover:text-gray-700"
                                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                >
                                    <AiOutlineMinus size={20}/>
                                </button>
                                <span className="mx-2 text-lg">{item.quantity}</span>
                                <button
                                    className="text-gray-500 hover:text-gray-700"
                                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                >
                                    <AiOutlinePlus size={20}/>
                                </button>
                            </div>
                        </div>
                        <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => handleRemoveItem(item.id)}
                        >
                            <AiOutlineClose size={24}/>
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-between items-center bg-white p-4 shadow rounded-lg">
                {/*<span className="text-lg font-semibold">Tổng giá: {totalPrice}</span>*/}
                <button onClick={handleCheckout}
                        className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">Thanh toán
                </button>
            </div>
        </div>
    );
};

export default Cart;
