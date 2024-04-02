import * as React from "react"
import ProjectTemplate from "@/components/ProjectTemplate"
import DetailsSection from "@/components/DetailsSection"
import AbProperty from "@/components/AbProperty"
import Image from "next/image"

import a360Combo from "@/../public/a360/a360_combo.png"
import base from "@/../public/a360/property/base.png"
import business from "@/../public/a360/property/business.png"
import checkbox from "@/../public/a360/property/checkbox.png"
import description from "@/../public/a360/property/description.png"
import dropdown from "@/../public/a360/property/dropdown.gif"
import identifying from "@/../public/a360/property/identifying.gif"
import text from "@/../public/a360/property/text.gif"

export default function A360() {
    return <ProjectTemplate
        title={"ACTIVE>360"}
    >
        <DetailsSection title="BRIEF" tags={[]}>
            <p>{"Active>360 is a real-time event processing platform."}</p>
            <div className="flex flex-col gap-2">
                <p>{"Some example use cases of Active>360 are:"}</p>
                <div className="italic pl-2 flex flex-col gap-1 text-slate-600">
                    <p>{"A ski resort may want to send a reminder for customers to buy lift passes if there is a particularly snowy day coming up."}</p>
                    <p>{"A bank may want to send a potential fraud alert to customers if there are more than 3 ATM visits using their card in the past 24 hours."}</p>
                </div>
            </div>
            <p>{"More broadly:"}</p>
            <p className="italic pl-2 text-slate-600">{"A360 users configure events they want to observe, calculations on those events, and notifications they want to send to their customers based on those calculations."}</p>
        </DetailsSection>
        <DetailsSection
            title={"DEVELOPMENT"}
            tags={[
                "react.js",
                "typescript",
                "mobx",
                "cypress",
                "java"
            ]}
        >
            <p>{"I developed the web application the business user interacts with in React.js Typescript, with MobX for reactivity."}</p>
            <p>{"This involved making editable pages for each type of metadata object."}</p>

            <div className="flex justify-center">
                <div className="max-w-[700px]">
                    <Image src={a360Combo} alt="example object pages" />
                </div>
            </div>

            <p>{"It also involved creating re-usable, extensible input component infrastructure."}</p>
            <div className="flex justify-center">
                <AbProperty
                    title="<BaseProperty />"
                    img={base}
                    subtitle="Simply renders a label and a value. In this case, Favorite Fruit and an image of a fig."
                />
            </div>
            <div className="grid gap-[30px] grid-cols-1 lg:grid-cols-2">
                <AbProperty
                    title="<TextProperty />"
                    img={text}
                    subtitle="Renders the value as a text input when in edit mode and regular text when in readonly mode"
                />
                <AbProperty
                    title="<TextAreaProperty />"
                    img={description}
                    subtitle="Renders the value as a resizable text area input when in edit mode and regular text when in readonly mode"
                />
                <AbProperty
                    title="<BusinessNameProperty />"
                    img={business}
                    subtitle="The user is required to fill this in, as denoted by the star"
                />
                <AbProperty
                    title="<IdentifyingNameProperty />"
                    img={identifying}
                    subtitle="This property has custom validation logic relevant to an Identifying Name built into it "
                />
                <AbProperty
                    title="<DropdownProperty />"
                    img={dropdown}
                    subtitle="Renders the value as a dropdown of passed in options when in edit mode"
                />
                <AbProperty
                    title="<CheckboxProperty />"
                    img={checkbox}
                    subtitle="Renders the value as a checkbox which can be toggled when in edit mode"
                />
            </div>

            <p>{"I also implemented a Java service to determine dependencies between metadata objects."}</p>
            <p className="italic pl-2 text-slate-600">{"For example, a \"Number of Upcoming Snow Days\" Calculation likely depends on the \"Weather Forecast\" Event"}</p>
            <p>{"These object relationships could get very complicated and multiple levels deep. My implementation accounted for edge cases such as cyclical dependency."}</p>
            <p>{"I will spare you a screenshot of the Java code."}</p>
        </DetailsSection>

    </ProjectTemplate >
}