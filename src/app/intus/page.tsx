import * as React from "react"
import ProjectTemplate from "@/components/ProjectTemplate"
import DetailsSection from "@/components/DetailsSection"
import LinkButton from "@/components/LinkButton"

export default function Intus() {
    const finalCareRequestImages = [
        "intus/final_care_request/new_job1.png",
        "intus/final_care_request/new_job2.png",
        "intus/final_care_request/new_job3.png",
        "intus/final_care_request/new_job4.png",
        "intus/final_care_request/new_job5.png",
        "intus/final_care_request/new_job_review.png",
    ]

    return <ProjectTemplate
        title={"INTUS CARE"}
    >
        <DetailsSection
            title={"BRIEF"}
            tags={[]}
        >
            <p>{"Intus Care's mission was to connect those in need of at-home care with care providers, through the use of a mobile application."}</p>
            <div className="flex flex-col gap-1">
                <p>{"Through the application the user can schedule appointments for physical assistance and also for mental assistance."}</p>
                <p className="pl-2 italic text-slate-600">{"e.g. of physical assistance: preventative care and screening, medication reminders, exercise"}</p>
                <p className="pl-2 italic text-slate-600">{"e.g. of mental assistance: memory recalling stimulus exercises, companionship"}</p>
            </div>
        </DetailsSection>

        <DetailsSection
            title={"WHAT WE DID"}
            tags={[
                "figma",
                "swift"
            ]}
        >
            <p>{"I was the sole developer in a team of 4."}</p>

            <p>{"Through continued customer interaction including multiple visits to PACE Health Centers in Rhode Island, I created iterative mocks of the application on figma."}</p>
            <p>{"Here is the final version of the \"Create a care request\" flow"}</p>
            <div className="flex justify-center">
                <div className="max-w-[1300px] bg-slate-50 p-4 rounded-md w-full ">
                    <div className="flex items-center gap-[25px] overflow-scroll">
                        {finalCareRequestImages.map((img, i) =>
                            <img key={i} src={img} className="max-w-xs rounded-md" />
                        )}
                    </div>
                </div>
            </div>

            <p>{"And here's me playing around with the completed Figma prototype"}</p>
            <div className="flex justify-center my-[30px]">
                <div className="bg-slate-50 p-5 rounded-md">
                    <video src={"/intus/intus_mock_v1.mp4"} playsInline autoPlay loop muted className="max-w-xs w-full rounded-md" />
                </div>
            </div>

            <p>{"I ended up developing some of the product in Swift with a tiny Node.js, Firebase backend."}</p>
            <p>{"The functionality I achieved was:"}</p>
            <div className="flex flex-col gap-1">
                <p>{"Allow a care recipient to:"}</p>
                <p className="pl-2 italic text-slate-600">{"(a) create an account and profile"}</p>
                <p className="pl-2 italic text-slate-600">{"(b) fill out and submit the care request creation dialog"}</p>
                <p className="pl-2 italic text-slate-600">{"(c) view a flat list of all available providers"}</p>
            </div>
            <div className="flex flex-col gap-1">
                <p>{"Allow a care provider to:"}</p>
                <p className="pl-2 italic text-slate-600">{"(a) create an account and profile"}</p>
                <p className="pl-2 italic text-slate-600">{"(b) view a flat list of all care requests"}</p>
            </div>
        </DetailsSection>

        <DetailsSection
            title={"INTUS IN THE NEWS"}
            tags={[]}
        >
            <LinkButton
                label={"Boston Globe: These hot R.I. startups are getting lots of buzz, October 2019"}
                to={"https://www.bostonglobe.com/metro/rhode-island/2019/10/04/these-hot-startups-are-getting-lots-buzz/1NEu7HIDHZvqvIMrdH7RSN/story.html"}
            />
            <LinkButton
                label={"MassChallenge Awards over $1M in Cash Prizes to Top Boston and Rhode Island Startups, October 2019"}
                to={"https://masschallenge.org/news/masschallenge-awards-over-1m-cash-prizes-top-boston-rhode-island-startups/"}
            />
            <LinkButton
                label={"2019 Brown Venture Prize Finalists, Judges, and Event Press!"}
                to={"https://entrepreneurship.brown.edu/the-brown-venture-prize/2019-finalists/"}
            />
        </DetailsSection>

    </ProjectTemplate>
}