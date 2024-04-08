import * as React from "react"
import LinkButton from "./LinkButton";
import GitButton from "./GitButton";

export interface ProjectThumbnailProps {
    title: string,
    timeline: string,
    description: string,
    liveLink?: string,
    fullInfoUrl?: string,
    gitRepo?: string
}

export default function ProjectThumbnail(props: React.PropsWithChildren<ProjectThumbnailProps>) {

    return <div className="border-b flex flex-col" >
        <div className="p-4 flex flex-col gap-3" >
            <div className="flex items-center gap-3 h-6">
                <div className="font-bold" > {props.title} </div>
                {props.gitRepo &&
                    <GitButton
                        repoUrl={props.gitRepo}
                    />}
            </div>

            {props.liveLink
                ? <LinkButton
                    label={props.description}
                    to={props.liveLink}
                />
                : props.fullInfoUrl
                    ? <LinkButton
                        label={props.description}
                        to={props.fullInfoUrl}
                        internalLink
                    />
                    : props.description}

        </div>
    </div>

}