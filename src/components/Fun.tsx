'use client'

import * as React from "react"

import LinkButton from "./LinkButton";

export default function Fun() {

    return <div className="border-red">
        <div id="fun" className="border-t border-b p-4 ">
            <div className="w-fit">
                <LinkButton
                    label={"????"}
                    to={"/cc"}
                    internalLink
                />
            </div>
        </div>
    </div>
}