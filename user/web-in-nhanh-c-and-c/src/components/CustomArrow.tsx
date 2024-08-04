// src/components/CustomArrow.tsx
import React from 'react';

interface CustomArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

export const NextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', color: 'black', fontSize: '30px', right: '-25px', zIndex: 1, transform: 'translateY(-50%)' }}
            onClick={onClick}
        >
            <span style={{ fontSize: '40px', cursor: 'pointer' }}>&gt;</span>
        </div>
    );
};

export const PrevArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', color: 'black', fontSize: '30px', left: '-25px', zIndex: 1, transform: 'translateY(-50%)' }}
            onClick={onClick}
        >
            <span style={{ fontSize: '40px', cursor: 'pointer' }}>&lt;</span>
        </div>
    );
};
