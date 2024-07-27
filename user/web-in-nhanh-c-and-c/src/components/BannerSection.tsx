// user/web-in-nhanh-c-and-c/src/components/BannerSection.tsx
const BannerSection = () => {
    return (
        <div className="container pt-16">
            <div className="flex justify-center gap-4 sm:gap-8">
                <div className="overflow-hidden rounded-lg">
                    <img
                        className="hover:scale-105 transition-transform"
                        src="/banner__1.webp"
                        alt="banner"
                    />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img
                        className="hover:scale-105 transition-transform"
                        src="/banner__2.webp"
                        alt="banner"
                    />
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
