'use client'

import * as React from "react"

import { useState } from "react";

export default function Doodle() {
    const [isAngry, setIsAngry] = useState(false);

    return <div
        onMouseEnter={() => setIsAngry(true)}
        onMouseLeave={() => setIsAngry(false)}
    >
        <object data={"/angry_blob.svg"} type="image/svg+xml" width="50px" className={`absolute z-10 ${isAngry ? '' : 'hidden'}`} />
        <object data={"/blob.svg"} type="image/svg+xml" width="50px" />
    </div>
}