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
                        {"I build web applications. Currently based in New York City."}
                    </div>

                    <div className="flex flex-wrap gap-1">
                        {"My most used technologies atm are:"}
                        <LinkButton label={"sveltekit"} to={"https://kit.svelte.dev"} />
                        <LinkButton label={"react.js"} to={"https://react.dev"} />
                        <LinkButton label={"prisma"} to={"https://www.prisma.io"} />
                        <LinkButton label={"tailwindcss"} to={"https://tailwindcss.com"} />
                        <LinkButton label={"notion"} to={"https://www.notion.so"} />
                        <LinkButton label={"figma"} to={"https://www.figma.com"} />
                    </div>
                    <div>
                        {"Send me a message at theodore.tsivranidis@gmail.com if you want to work together or say hello."}
                    </div>
                </div>
            </div>
        </div>
    )
}