import { AiOutlineClose } from "react-icons/ai";

interface CartSidebarProps {
    isOpen: boolean;
    toggleCartSidebar: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, toggleCartSidebar }) => {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
            } z-50`}
        >
            <div className="p-4 flex justify-between items-center border-b">
                <h2 className="text-xl font-semibold">Shopping Cart</h2>
                <AiOutlineClose size={24} className="cursor-pointer" onClick={toggleCartSidebar} />
            </div>
            <div className="p-4">
                <div className="mb-4">
                    <img src="path/to/image.jpg" alt="Product" className="w-full h-32 object-cover rounded" />
                    <div className="flex justify-between items-center mt-2">
                        <div>
                            <h3 className="text-lg font-semibold">Product Name</h3>
                            <p className="text-gray-600">Quantity: 1</p>
                            <p className="text-gray-600">Price: $100</p>
                        </div>
                        <button className="text-red-600">Remove</button>
                    </div>
                </div>
                {/* Add more product items as needed */}
            </div>
            <div className="p-4 border-t">
                <button className="w-full bg-blue-600 text-white py-2 rounded mb-2">View Cart</button>
                <button className="w-full bg-green-600 text-white py-2 rounded">Checkout</button>
            </div>
        </div>
    );
};

export default CartSidebar;
