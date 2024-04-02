import { commitDateTime } from "@/commitDate"
import * as React from "react"

export default function Footer() {
    return <div className="flex flex-col justify-center items-center pb-[40px] gap-5 text-sm">

        <div className="relative">
            <img src={"/me.png"} className="w-48" />
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