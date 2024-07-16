import {AiOutlineClose, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface CartSidebarProps {
    isOpen: boolean;
    toggleCartSidebar: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, toggleCartSidebar }) => {
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
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        ));
    };

    const handleViewCart = () => {
        toggleCartSidebar();
        navigate('/cart');
    };

    const handleCheckout = () => {
        toggleCartSidebar();
        navigate('/checkout');
    };

    // const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
            } z-50`}
        >
            <div className="p-4 flex justify-between items-center border-b">
                <h2 className="text-xl font-semibold">Giỏ hàng</h2>
                <AiOutlineClose size={24} className="cursor-pointer" onClick={toggleCartSidebar} />
            </div>
            <div className="p-4 space-y-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                        <div className="ml-4 flex-1">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            {/*<p className="text-gray-600">Price: ${item.price}</p>*/}
                            <div className="flex items-center mt-2">
                                <button
                                    className="text-gray-500 hover:text-gray-700"
                                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                >
                                    <AiOutlineMinus size={20} />
                                </button>
                                <span className="mx-2 text-lg">{item.quantity}</span>
                                <button
                                    className="text-gray-500 hover:text-gray-700"
                                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                >
                                    <AiOutlinePlus size={20} />
                                </button>
                            </div>
                        </div>
                        <button
                            className="text-red-600 ml-4"
                            onClick={() => handleRemoveItem(item.id)}
                        >
                            <AiOutlineClose size={24} />
                        </button>
                    </div>
                ))}
            </div>
            <div className="p-4 border-t">
                {/*<div className="flex justify-between mb-4">*/}
                {/*    <span className="text-lg font-semibold">Total</span>*/}
                {/*    <span className="text-lg font-semibold">${totalPrice}</span>*/}
                {/*</div>*/}
                <button onClick={handleViewCart} className="w-full bg-blue-600 text-white py-2 rounded mb-2">Xem giỏ hàng</button>
                <button onClick={handleCheckout} className="w-full bg-green-600 text-white py-2 rounded">Thanh toán</button>
            </div>
        </div>
    );
};

export default CartSidebar;
