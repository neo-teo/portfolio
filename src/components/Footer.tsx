import { commitDateTime } from "@/commitDate"
import Image from "next/image"
import * as React from "react"
import me from "@/../public/me.png"

export default function Footer() {
    return <div className="flex flex-col justify-center items-center pb-[40px] gap-5 text-sm">

        <div className="relative">
            <Image src={me} className="w-48" alt="Photo of myself" />
            <div className="absolute top-2/3 transform z-[-10] flex flex-col">
                <div>----------------------------</div>
                <div>{"| $$$$$$$$$$$$$$$$$$$ |"}</div>
                <div>----------------------------</div>
            </div>
        </div>

        <div className={"flex flex-col items-center gap-2"}>
            <div>
                Built on Next.js / Typescript / Tailwindcss.
            </div>
            <div>
                Hosted on Netlify.
            </div>

        </div>

        <div>
            Last updated: {commitDateTime}
        </div>
    </div>
}