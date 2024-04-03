'use client'

import * as React from "react"

import { useState } from "react";

export default function Doodle() {
    const [isAngry, setIsAngry] = useState(false);

    return <div
        onMouseEnter={() => setIsAngry(true)}
        onMouseLeave={() => setIsAngry(false)}
    >
        <object data={isAngry ? "/angry_blob.svg" : "/blob.svg"} type="image/svg+xml" width="50px" />
    </div>
}