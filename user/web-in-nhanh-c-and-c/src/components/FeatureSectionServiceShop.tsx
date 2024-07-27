// user/web-in-nhanh-c-and-c/src/components/FeatureSectionInfoShop.tsx
import {
    LiaShippingFastSolid,
    LiaMoneyBillWaveSolid,
    LiaGiftSolid,
} from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import FeatureCard from "./FeatureCard.tsx";

const data = [
    {
        title: "Vận chuyển toàn quốc",
        icon: <LiaShippingFastSolid />,
    },
    {
        title: "Best Price Guarantee",
        icon: <LiaMoneyBillWaveSolid />,
    },
    {
        title: "Free Curbside Pickup",
        icon: <LiaGiftSolid />,
    },
    {
        title: "Support 24/7",
        icon: <FiPhoneCall />,
    },
];

const FeatureSectionServiceShop = () => {
    return (
        <div className="container pt-16">
            <div className="flex justify-center gap-4">
                {data.map((el) => (
                    <div key={el.title} className="flex justify-center w-full sm:w-1/2 lg:w-auto pl-14 pr-14">
                        <FeatureCard title={el.title} icon={el.icon} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureSectionServiceShop;
