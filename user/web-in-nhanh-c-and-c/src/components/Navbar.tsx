// src/components/Navbar.tsx
import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import CartCountBadge from "./CartCountBadge";
import CartSidebar from "./CartSidebar";
import ReactCountryFlag from "react-country-flag";

const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("VN");

    const toggleCartSidebar = () => {
        setIsCartOpen(!isCartOpen);
    };

    const toggleLanguageDropdown = () => {
        setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    };

    const handleLanguageChange = (countryCode: string) => {
        setSelectedLanguage(countryCode);
        setIsLanguageDropdownOpen(false);
    };

    return (
        <div className="container hidden lg:block">
            <div className="flex justify-between items-center pt-8">
                <h1 className="text-4xl font-medium">Logo</h1>
                <div className="relative w-full max-w-[500px]">
                    <input
                        className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
                        type="text"
                        placeholder="Search Product..."
                    />
                    <BsSearch
                        className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
                        size={20}
                    />
                </div>

                <div className="flex gap-4 items-center">
                    <div className="relative" onClick={toggleLanguageDropdown}>
                        <ReactCountryFlag
                            countryCode={selectedLanguage}
                            svg
                            style={{
                                width: '2em',
                                height: '2em',
                                cursor: 'pointer'
                            }}
                            title={selectedLanguage === "VN" ? "Tiếng Việt" : "English"}
                        />
                        {isLanguageDropdownOpen && (
                            <div className="absolute top-full mt-1 right-0 bg-white border rounded shadow-lg z-50">
                                {selectedLanguage !== "VN" && (
                                    <div
                                        className="p-2 cursor-pointer hover:bg-gray-200"
                                        onClick={() => handleLanguageChange("VN")}
                                    >
                                        <ReactCountryFlag
                                            countryCode="VN"
                                            svg
                                            style={{
                                                width: '2em',
                                                height: '2em'
                                            }}
                                            title="Tiếng Việt"
                                        />
                                    </div>
                                )}
                                {selectedLanguage !== "US" && (
                                    <div
                                        className="p-2 cursor-pointer hover:bg-gray-200"
                                        onClick={() => handleLanguageChange("US")}
                                    >
                                        <ReactCountryFlag
                                            countryCode="US"
                                            svg
                                            style={{
                                                width: '2em',
                                                height: '2em'
                                            }}
                                            title="English"
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="icon_wrapper transition transform hover:scale-110 active:scale-90">
                        <AiOutlineUser />
                    </div>
                    <div className="icon_wrapper relative transition transform hover:scale-110 active:scale-90" onClick={toggleCartSidebar}>
                        <AiOutlineShoppingCart />
                        <CartCountBadge size="w-[25px] h-[25px]" />
                    </div>
                </div>
            </div>

            <CartSidebar isOpen={isCartOpen} toggleCartSidebar={toggleCartSidebar} />
        </div>
    );
};

export default Navbar;
