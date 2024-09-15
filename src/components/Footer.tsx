import { commitDateTime } from "@/commitDate"
import * as React from "react"
import LinkButton from "./LinkButton"

export default function Footer() {
    return <div className="flex flex-col justify-center items-center  gap-5 text-sm pb-4">

        {/* <div className="">
            <LinkButton
                label={"previous version"}
                to={"https://2024.teo.fyi"}
            />
        </div> */}

        theodore.tsivranidis@gmail.com

        <div>
            Last updated: {commitDateTime}
        </div>
    </div>
}