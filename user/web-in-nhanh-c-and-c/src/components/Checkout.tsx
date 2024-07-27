// src/components/Checkout.tsx
import { useEffect, useState } from "react";

interface City {
    id: number;
    full_name: string;
}

interface District {
    id: number;
    full_name: string;
}

interface Ward {
    id: number;
    full_name: string;
}

const Checkout = () => {
    const cartItems = [
        {
            id: 1,
            name: "Xoài Sấy",
            price: 20,
            quantity: 1,
            image: "/product__1.webp",
        },
        {
            id: 2,
            name: "Chuối Sấy",
            price: 15,
            quantity: 2,
            image: "/product__2.webp",
        },
    ];

    const [cities, setCities] = useState<City[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [wards, setWards] = useState<Ward[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectedDistrict, setSelectedDistrict] = useState<string>('');
    const [selectedWard, setSelectedWard] = useState<string>('');
    const [streetAddress, setStreetAddress] = useState<string>('');

    useEffect(() => {
        // Lấy danh sách tỉnh/thành
        fetch('https://esgoo.net/api-tinhthanh/1/0.htm')
            .then(response => response.json())
            .then(data => {
                if (data.error === 0) {
                    setCities(data.data);
                }
            });
    }, []);

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const cityId = e.target.options[e.target.selectedIndex].dataset.id;
        if (cityId) {
            setSelectedCity(e.target.value);
            fetch(`https://esgoo.net/api-tinhthanh/2/${cityId}.htm`)
                .then(response => response.json())
                .then(data => {
                    if (data.error === 0) {
                        setDistricts(data.data);
                        setWards([]);
                        setSelectedDistrict('');
                        setSelectedWard('');
                    }
                });
        }
    };

    const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const districtId = e.target.options[e.target.selectedIndex].dataset.id;
        if (districtId) {
            setSelectedDistrict(e.target.value);
            fetch(`https://esgoo.net/api-tinhthanh/3/${districtId}.htm`)
                .then(response => response.json())
                .then(data => {
                    if (data.error === 0) {
                        setWards(data.data);
                        setSelectedWard('');
                    }
                });
        }
    };

    const handleWardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedWard(e.target.value);
    };

    const getAddress = () => {
        return `${streetAddress} ${selectedWard} ${selectedDistrict} ${selectedCity}`;
    };

    // const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-6">Thanh Toán</h1>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    <div className="bg-white p-4 shadow rounded-lg mb-6">
                        <h2 className="text-xl font-semibold mb-4">Thông Tin Thanh Toán</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Họ và Tên</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    placeholder="Nguyễn Văn A"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Địa Chỉ Email</label>
                                <input
                                    type="email"
                                    className="w-full p-2 border rounded"
                                    placeholder="nguyenvana@example.com"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Số Điện Thoại</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    placeholder="+84 123 456 789"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="bg-white p-4 shadow rounded-lg mb-6">
                        <h2 className="text-xl font-semibold mb-4">Địa Chỉ Giao Hàng</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Số nhà, Đường</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    placeholder="123 Đường Chính"
                                    value={streetAddress}
                                    onChange={(e) => setStreetAddress(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Thành Phố</label>
                                <select
                                    id="city"
                                    onChange={handleCityChange}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Chọn Thành Phố</option>
                                    {cities.map((city) => (
                                        <option key={city.id} data-id={city.id} value={city.full_name}>
                                            {city.full_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Quận/Huyện</label>
                                <select
                                    id="district"
                                    onChange={handleDistrictChange}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Chọn Quận/Huyện</option>
                                    {districts.map((district) => (
                                        <option key={district.id} data-id={district.id} value={district.full_name}>
                                            {district.full_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Phường/Xã</label>
                                <select
                                    id="ward"
                                    onChange={handleWardChange}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Chọn Phường/Xã</option>
                                    {wards.map((ward) => (
                                        <option key={ward.id} value={ward.full_name}>
                                            {ward.full_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Địa Chỉ</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded bg-gray-100"
                                    placeholder="Địa chỉ đầy đủ"
                                    value={getAddress()}
                                    readOnly
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Mã Bưu Điện</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    placeholder="100000"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Quốc Gia</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    placeholder="Việt Nam"
                                />
                            </div>
                        </form>
                    </div>
                    {/*<div className="bg-white p-4 shadow rounded-lg mb-6">*/}
                    {/*    <h2 className="text-xl font-semibold mb-4">Phương Thức Thanh Toán</h2>*/}
                    {/*    <form>*/}
                    {/*        <div className="mb-4">*/}
                    {/*            <label className="block text-gray-700">Số Thẻ</label>*/}
                    {/*            <input*/}
                    {/*                type="text"*/}
                    {/*                className="w-full p-2 border rounded"*/}
                    {/*                placeholder="1234 5678 9012 3456"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*        <div className="flex gap-4">*/}
                    {/*            <div className="mb-4 flex-1">*/}
                    {/*                <label className="block text-gray-700">Ngày Hết Hạn</label>*/}
                    {/*                <input*/}
                    {/*                    type="text"*/}
                    {/*                    className="w-full p-2 border rounded"*/}
                    {/*                    placeholder="MM/YY"*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div className="mb-4 flex-1">*/}
                    {/*                <label className="block text-gray-700">CVV</label>*/}
                    {/*                <input*/}
                    {/*                    type="text"*/}
                    {/*                    className="w-full p-2 border rounded"*/}
                    {/*                    placeholder="123"*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                </div>
                <div className="w-full lg:w-1/3">
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Tóm Tắt Đơn Hàng</h2>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center mb-4">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                                <div className="ml-4 flex-1">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    {/*<p className="text-gray-600">Số Lượng: {item.quantity}</p>*/}
                                    {/*<p className="text-gray-600">Giá: {item.price}</p>*/}
                                </div>
                            </div>
                        ))}
                        {/*<div className="border-t pt-4 mt-4">*/}
                        {/*    <div className="flex justify-between mb-2">*/}
                        {/*        <span className="text-gray-700">Tạm Tính</span>*/}
                        {/*        /!*<span className="text-gray-700">{totalPrice}</span>*!/*/}
                        {/*    </div>*/}
                        {/*    <div className="flex justify-between mb-2">*/}
                        {/*        <span className="text-gray-700">Phí Vận Chuyển</span>*/}
                        {/*        <span className="text-gray-700">5</span>*/}
                        {/*    </div>*/}
                        {/*    <div className="flex justify-between font-semibold">*/}
                        {/*        <span className="text-lg">Tổng</span>*/}
                        {/*        <span className="text-lg">{totalPrice + 5}</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700">Đặt Hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
