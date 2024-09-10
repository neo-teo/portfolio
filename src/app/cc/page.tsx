"use client"

import * as React from "react"

import P5Canvas from "@/components/P5Canvas";
import MovingMouse from "./sketches/MovingMouse";

export default function Cc() {
    return <div className="flex flex-wrap items-center">
        <MovingMouse />
        {/* <img src={"/skater.gif"} className="w-[400px] border border-blue rounded-md border-[14px] p-5" alt="skater gif made on ps2nostalgia.win" /> */}
    </div>
}