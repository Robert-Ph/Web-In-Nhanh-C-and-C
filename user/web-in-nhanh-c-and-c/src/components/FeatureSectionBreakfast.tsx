// src/components/FeatureSectionBreakfast.tsx
import FeatureSection from './FeatureSection';

const data = [
    {id: 0, img: "product__1.webp", name: "Dried Mango", price: ""},
    {id: 1, img: "product__2.webp", name: "Crunchy Crisps", price: ""},
    {id: 2, img: "product__3.webp", name: "Jewel Cranberries", price: ""},
    {id: 3, img: "product__4.webp", name: "Almond Organic", price: ""},
    {id: 4, img: "product__4.webp", name: "Almond Organic", price: ""},
    {id: 5, img: "product__4.webp", name: "Almond Organic", price: ""},
    {id: 6, img: "product__4.webp", name: "Almond Organic", price: ""},
    {id: 7, img: "product__4.webp", name: "Almond Organic", price: ""},
];

const FeatureSectionBreakfast = () => {
    return (
        <FeatureSection title="Breakfast" data={data} />
    );
};

export default FeatureSectionBreakfast;
