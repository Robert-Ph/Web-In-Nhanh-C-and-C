import React from 'react';

interface BannerProps {
    img: string;
    alt: string;
    link?: string;
    width?: string;
    height?: string;
}

const Banner: React.FC<BannerProps> = ({ img, alt, link, width = '100%', height = 'auto' }) => {
    return (
        <div className="mb-4" style={{ width, height }}>
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={img} alt={alt} className="rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </a>
            ) : (
                <img src={img} alt={alt} className="rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            )}
        </div>
    );
};

export default Banner;
