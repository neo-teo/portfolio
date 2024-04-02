'use client'

import * as React from "react"

import HoverGifinator from "./HoverGifinator"
import ScrollyButton from "./ScrollyButton"
import Image from "next/image";

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
        <div id="fun" className="border-t border-b">
            <div className="p-4 flex flex-wrap gap-2">
                {"In my free time, I"}
                <HoverGifinator gifSrc={""} label={"hang out with friends"} updateGif={setGif} />
                <HoverGifinator gifSrc={""} label={"go biking"} updateGif={setGif} />
                <HoverGifinator gifSrc={""} label={"make things on figma"} updateGif={setGif} />
                <HoverGifinator gifSrc={""} label={"mix songs"} updateGif={setGif} />
                <HoverGifinator gifSrc={""} label={"do room rennovations"} updateGif={setGif} />
                <HoverGifinator gifSrc={""} label={"watch one piece"} updateGif={setGif} />
            </div>

            {gif && (
                <Image
                    className="max-w-[300px]"
                    src={gif}
                    alt={"Animated gif of photos with filename " + gif}
                />
            )}
        </div>
    </div>
}