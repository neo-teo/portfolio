'use client'

import * as React from "react"

import { useState } from "react";

export default function Doodle() {
    const [isHovered, setIsHovered] = useState(false);

    return <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <object data={"/angry_blob.svg"} type="image/svg+xml" width="50px" className={`absolute z-10 ${isHovered ? '' : 'hidden'}`} />
        <object data={"/blob.svg"} type="image/svg+xml" width="50px" />
    </div>
}