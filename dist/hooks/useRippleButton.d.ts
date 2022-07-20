import React from 'react';
export declare const useRippleButton: (isRippleEffect: boolean) => {
    setCoords: React.Dispatch<React.SetStateAction<{
        x: number;
        y: number;
    }>>;
    coords: {
        x: number;
        y: number;
    };
    isRippling: boolean;
} | undefined;
