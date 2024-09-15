import { commitDateTime } from "@/commitDate"
import * as React from "react"

export default function Footer() {
    return <div className="flex flex-col justify-center items-center  gap-5 text-sm pb-4">

        theodore.tsivranidis@gmail.com

        <div>
            Last updated: {commitDateTime}
        </div>
    </div>
}