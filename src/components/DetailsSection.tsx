import * as React from "react"
import { PropsWithChildren } from "react";

interface DetailsSectionProps {
    title: string,
    tags: string[],
}

export default function DetailsSection({ title, tags, children }: PropsWithChildren<DetailsSectionProps>) {
    return (
        <>
            <div className={"border-b flex flex-col gap-3 p-4"}>
                <div className={"font-bold"}>{title}</div>
                {tags.length > 0 && <div className="flex flex-wrap gap-[15px]">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className={"w-fit border border-blue rounded-xl px-2"}
                        >
                            {tag}
                        </div>
                    ))}
                </div>}
                {children}
            </div>
        </>
    )
};