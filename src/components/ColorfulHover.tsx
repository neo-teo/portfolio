'use client'

import * as React from "react"
import { useState } from "react";

export default function ColorfulHover({ children }: React.PropsWithChildren) {
    const primaryColors = [
        'hover:bg-[#FF6666]', // Red
        'hover:bg-[#33FF33]', // Green
        'hover:bg-[#FFDD66]', // Yellow
        'hover:bg-[#6666FF]', // Blue
        'hover:bg-[#FF66FF]', // Magenta
        'hover:bg-[#FFA500]', // Orange
        'hover:bg-[#CC66CC]', // Purple
    ];

    const [colorIndex, increaseColorIndex] = useState(
        Math.floor(Math.random() * primaryColors.length)
    );

    const handleHover = () => {
        increaseColorIndex((colorIndex + 1) % primaryColors.length);
    };

    return <div
        className={`flex items-center gap-1 ml-[-4px] px-1 ${primaryColors[colorIndex]}`}
        onMouseLeave={handleHover}
    >
        {children}
    </div>
}