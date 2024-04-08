'use client'

import * as React from "react"
import ColorfulHover from "./ColorfulHover"
import Image from "next/image";

import gitLogo from "@/../public/git.png"

interface GitButtonProps {
    repoUrl: string,
}

export default function GitButton({ repoUrl }: GitButtonProps) {

    return <a
        href={repoUrl}
        className=""
        target="_blank"
        rel="noopener noreferrer"
    >
        <ColorfulHover>
            <div className="px-1 py-2">
                <div className="">
                    <Image src={gitLogo} alt="Github logo" className="w-4 h-4" />
                </div>
            </div>
        </ColorfulHover>
    </a>
}
