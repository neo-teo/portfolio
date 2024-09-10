"use client"

import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

interface P5CanvasProps {
    sketch: (p: p5) => void;
}

const P5Canvas: React.FC<P5CanvasProps> = ({ sketch }) => {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (canvasRef.current === null) return;

        const p5Instance = new p5(sketch, canvasRef.current);

        return () => {
            p5Instance.remove(); // Cleanup p5 instance when component is unmounted
        };
    }, [sketch]);

    return <div ref={canvasRef}></div>;
};

export default P5Canvas;
