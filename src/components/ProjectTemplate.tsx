import * as React from "react"
import { PropsWithChildren } from "react"
import Header from "./Header"
import LinkButton from "./LinkButton"

export interface ProjectTemplateProps {
    title: string,
}

const ProjectTemplate = (props: PropsWithChildren<ProjectTemplateProps>) => (
    <div>
        <Header
            title={props.title}
            borderColor="header-blue"
        >
            <LinkButton
                label={"Close"}
                to={"/"}
                internalLink
            />
        </Header>

        <div className="border-blue">
            {props.children}
        </div>
    </div>
)

export default ProjectTemplate