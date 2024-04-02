"use client"

import * as React from "react"

export default function ScrollyButton({ label, sectionID, color }: {
    label: string,
    sectionID?: string,
    color: string
}) {
    const scrollToSection = () => {
        if (!sectionID) {
            window.scrollTo({ top: 0, behavior: "smooth" })
            return;
        }

        var headerOffset = 65
        var elementPosition = document.getElementById(sectionID)?.getBoundingClientRect().top ?? 0
        var offsetPosition = elementPosition + window.scrollY - headerOffset

        console.log("element is located at", elementPosition);
        console.log("position scrolling to", offsetPosition);

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        })
    }

    // These maps are queried below to set the classNames
    const colorVariants = new Map([
        ["black", "text-black black-scrolly-btn"],
        ["blue", "text-blue blue-scrolly-btn"],
        ["green", "text-green green-scrolly-btn"],
        ["red", "text-red red-scrolly-btn"],
    ])

    return <button
        onClick={scrollToSection}>
        <div
            id="scrolly-text"
            className={`${colorVariants.get(color)} text-left text-lg`}
        >
            {label}
        </div>
    </button>
}