'use client'

import * as React from "react"

import LinkButton from "./LinkButton"

export default function About() {
    return (
        <div className="border-green">
            <div id="about" className="border-green border-t">
                <div className="border-b p-4 flex flex-col gap-3">
                    <div className="flex flex-wrap text-nowrap gap-1">
                        {"Currently contract software developer at"}
                        <LinkButton
                            label={"stuut"}
                            to={"https://stuut.co"}
                        />
                        {"and MFA student at"}
                        <LinkButton
                            label={"Parsons"}
                            to={"https://blog.teo.fyi"}
                        />
                    </div>
                    {"Based in New York City. "}
                </div>
            </div>
        </div>
    )
}