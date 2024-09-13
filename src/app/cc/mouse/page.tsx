"use client"

import * as React from "react"

import MovingMouse from "../sketches/MovingMouse";

export default function Mouse() {
    return <div className="flex flex-wrap items-center">
        <MovingMouse />
    </div>
}