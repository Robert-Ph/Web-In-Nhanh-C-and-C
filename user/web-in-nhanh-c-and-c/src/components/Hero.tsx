import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
    return (
        <div className="container pt-8">
            <div className="grid xl:grid-cols-3 gap-8">
                <div className="relative xl:col-span-2" style={{ width: '1000px', height: '600px' }}>
                    <img
                        style={{ width: '100%', height: '100%' }}
                        className="object-cover rounded-lg"
                        src="/hero__1.webp"
                        alt="hero image"
                    />

                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                        <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
                        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
                            Dried Fruits Best Quality
                        </h2>
                        <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
                        <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">
                            100.000 VND
                        </div>
                        <div
                            className="bg-accentDark hover:bg-accent text-white rounded-full w-fit items-center gap-4 px-4 py-2 sm:px-6 sm:py-3 cursor-pointer text-[14px]"
                        >
                            Shop Now <BsArrowRight/>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="relative" style={{ width: '550px', height: '300px' }}>
                        <img
                            style={{ width: '100%', height: '100%' }}
                            className="object-cover rounded-lg"
                            src="/hero__2.webp"
                            alt="hero image"
                        />

                        <div className="absolute max-w-[370px] sm:ml-8 ml-4 top-[50%] -translate-y-[50%] sm:space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-bold">Best Yummy Pizza</h2>
                            <p className="text-gray-500 text-xl pt-4">Starting At</p>
                            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
                                $25
                            </div>
                            <div
                                className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 sm:px-6 sm:py-3 text-[14px] cursor-pointer"
                            >
                                Shop Now <BsArrowRight/>
                            </div>
                        </div>
                    </div>

                    <div className="relative" style={{ width: '550px', height: '270px' }}>
                        <img
                            style={{ width: '100%', height: '100%' }}
                            className="object-cover rounded-lg"
                            src="/hero__3.webp"
                            alt="hero image"
                        />

                        <div className="absolute max-w-[370px] sm:ml-8 ml-4 top-[50%] -translate-y-[50%] sm:space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-bold">Fresh Juicy Fruits</h2>
                            <p className="text-gray-500 text-xl pt-4">Starting At</p>
                            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
                                $15
                            </div>
                            <div
                                className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 sm:px-6 sm:py-3 text-[14px] cursor-pointer"
                            >
                                Shop Now <BsArrowRight/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
