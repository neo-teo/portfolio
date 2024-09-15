'use client'

import * as React from "react"

import HoverGifinator from "./HoverGifinator"
import ScrollyButton from "./ScrollyButton"
import LinkButton from "./LinkButton";

export default function Fun() {

    const [gif, setGif] = React.useState<string | undefined>(undefined);

    return <div className="border-red">
        <div className="p-4 border-t">
            <ScrollyButton
                label="FUN"
                sectionID="fun"
                color="red"
            />
        </div>
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