'use client'

import * as React from "react"
import ColorfulHover from "./ColorfulHover"
import Link from "next/link";

interface LinkButtonProps {
    label: string,
    to: string,
    internalLink?: boolean
}

export default function LinkButton(props: LinkButtonProps) {
    if (props.internalLink) {
        return <Link href={props.to} className="w-fit italic underline">
            <ColorfulHover>
                {props.label}
            </ColorfulHover>
        </Link>
    }

    return <a href={props.to} className="w-fit italic underline" target="_blank" rel="noopener noreferrer">
        <ColorfulHover>
            {props.label}
        </ColorfulHover>
    </a>
}
