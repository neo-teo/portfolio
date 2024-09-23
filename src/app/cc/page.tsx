"use client"

import LinkButton from "@/components/LinkButton"
import * as React from "react"

export default function Cc() {
    return <div className="flex flex-col space-y-4 items-center">

        <img src={"/skater.gif"} className="py-16 w-[10rem] mr-[3.5rem]" alt="skater gif made on ps2nostalgia.win" />


        <LinkButton
            label={"coins"}
            to={"/cc/coins"}
            internalLink
        />

        <LinkButton
            label={"clock?"}
            to={"/cc/clock"}
            internalLink
        />

        <LinkButton
            label={"face"}
            to={"/cc/face"}
            internalLink
        />

        <LinkButton
            label={"mouse"}
            to={"/cc/mouse"}
            internalLink
        />


    </div>
}