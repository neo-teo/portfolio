import * as React from "react"
import { PropsWithChildren } from "react"
import ScrollyButton from "./ScrollyButton"
import Doodle from "./Doodle"

export default function Header({ title, borderColor, children }: PropsWithChildren<{
    title: string,
    borderColor: string,
}>) {
    return <div className={"sticky top-0 z-50 flex flex-col border-b"}>
        <div className="flex justify-between border-b bg-white bg-opacity-90">
            <div className={"p-4 flex gap-4 items-center"}>
                <ScrollyButton
                    label={title}
                    color="black"
                />
                {children}
            </div>
            <div className="absolute right-8 bottom-1">
                <Doodle />
            </div>
        </div>
        <div className={`header-border ${borderColor}`}></div>
    </div>
}