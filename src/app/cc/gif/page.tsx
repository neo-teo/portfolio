'use client'

import HoverGifinator from "@/components/HoverGifinator";
import * as React from "react"


export default function Gif() {

    const [gif, setGif] = React.useState<string | undefined>(undefined);

    return <div className="border-red">
        <div id="fun" className="border-t border-b">
            <div className="p-4 flex flex-wrap gap-2">
                <HoverGifinator gifSrc={"coming soon"} label={"go biking"} updateGif={setGif} />
                <HoverGifinator gifSrc={"coming soon"} label={"make things on figma"} updateGif={setGif} />
                <HoverGifinator gifSrc={"coming soon"} label={"mix songs"} updateGif={setGif} />
                <HoverGifinator gifSrc={"coming soon"} label={"do room rennovations"} updateGif={setGif} />
                <HoverGifinator gifSrc={"coming soon"} label={"watch one piece"} updateGif={setGif} />
                {gif}
            </div>
        </div>
    </div>
}
