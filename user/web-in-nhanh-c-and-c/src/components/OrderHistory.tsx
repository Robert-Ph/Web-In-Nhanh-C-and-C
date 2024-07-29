interface Product {
    name: string;
    img: string;
    quantity: number;
}

interface Order {
    id: string;
    date: string;
    status: string;
    products: Product[];
}

const orders: Order[] = [
    {
        id: '123456',
        date: '2024-07-29',
        status: 'Delivered',
        products: [
            { name: 'Xoài sấy dẻo', img: 'product__1.webp', quantity: 1 },
            { name: 'Chuối sấy giòn', img: 'product__2.webp', quantity: 2 },
        ],
    },
    {
        id: '654321',
        date: '2024-07-25',
        status: 'Processing',
        products: [
            { name: 'Táo sấy tự nhiên', img: 'product__3.webp', quantity: 3 },
        ],
    },
];

const OrderHistory = () => {
    return (
        <div className="container mx-auto py-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Lịch sử đơn hàng</h2>
            <div className="bg-white p-8 rounded-lg shadow">
                {orders.map((order) => (
                    <div key={order.id} className="mb-8">
                        <div className="flex justify-between items-center border-b pb-4 mb-4">
                            <div>
                                <h3 className="text-xl font-semibold">Đơn hàng #{order.id}</h3>
                                <p>Ngày đặt: {order.date}</p>
                                <p>Trạng thái: {order.status}</p>
                            </div>
                        </div>
                        <div>
                            {order.products.map((product, index) => (
                                <div key={index} className="flex items-center mb-4">
                                    <img src={product.img} alt={product.name} className="w-16 h-16 mr-4" />
                                    <div>
                                        <p className="font-semibold">{product.name}</p>
                                        <p>Số lượng: {product.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderHistory;
