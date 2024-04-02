import * as React from "react"
import ColorfulHover from "./ColorfulHover"
import Link from "next/link";
import Image from "next/image";

interface LinkButtonProps {
    label: string,
    to: string,
    git?: boolean,
    internalLink?: boolean
}

export default function LinkButton(props: LinkButtonProps) {

    const content = <ColorfulHover>
        {props.git && <Image src={"/git.png"} alt="Github logo" className="w-3 h-3" />}
        {props.label}
    </ColorfulHover>;

    if (props.internalLink) {
        return <Link href={props.to} className="w-fit italic underline">
            {content}
        </Link>
    }

    return <a href={props.to} className="w-fit italic underline" target="_blank" rel="noopener noreferrer">
        {content}
    </a>
}
