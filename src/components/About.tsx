'use client'

import * as React from "react"

import LinkButton from "./LinkButton"
import ScrollyButton from "./ScrollyButton"

export default function About() {
    return (
        <div className="border-green">
            <div className="p-4 border-t">
                <ScrollyButton
                    label="ABOUT"
                    sectionID="about"
                    color="green"
                />
            </div>
            <div id="about" className="border-green border-t">
                <div className="border-b p-4 flex flex-col gap-3">
                    <div className="flex flex-wrap text-nowrap gap-1">
                        {"Currently contracting at"}
                        <LinkButton
                            label={"stuut"}
                            to={"https://stuut.co"}
                        />
                        {"and doing an"}
                        <LinkButton
                            label={"MFA at Parsons"}
                            to={"https://blog.teo.fyi"}
                        />
                    </div>
                    {"Based in New York City. "}
                </div>
            </div>
        </div>
    )
}