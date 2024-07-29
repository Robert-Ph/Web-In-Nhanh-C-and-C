// src/components/FeatureSection.tsx
import React from 'react';
import ProductCard from './ProductCard';

interface FeatureSectionProps {
    title: string;
    data: Array<{ id: number, img: string, name: string, price: string }>;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({title, data}) => {
    return (
        <div className="container pt-20 bg-gray-100" style={{paddingRight: '7.5rem', paddingLeft: '7.5rem'}}>
            <div className="lg:flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-2xl">{title}</h3>
                </div>
            </div>

            <div className="flex flex-wrap justify-center pt-8">
                {data.map(el => (
                    <div key={el.id} className="w-1/2 md:w-1/4 pl-5 pr-5">
                        <ProductCard
                            img={el.img}
                            name={el.name}
                            price={el.price}
                            id={el.id}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureSection;
