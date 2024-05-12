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
                    <div>
                        {"Currently based in New York City."}
                    </div>

                    <div>
                        {"Send me a message at theodore.tsivranidis@gmail.com if you want to work together."}
                    </div>
                </div>
            </div>
        </div>
    )
}