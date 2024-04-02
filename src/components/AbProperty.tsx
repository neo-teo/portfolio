import Image, { StaticImageData } from "next/image";
import * as React from "react"

interface AbPropertyProps {
    title: string,
    img: StaticImageData,
    subtitle: string,
}

const AbProperty = ({ title, img, subtitle }: AbPropertyProps) => {
    return (
        <div className={"bg-slate-50 p-5 rounded-md flex flex-col gap-[15px]"}>
            <div className={"text-sm font-mono"}>
                {title}
            </div>
            <div className={"text-sm text-slate-400"}>
                {subtitle}
            </div>
            <div>
                <Image className="max-w-[500px] w-full" src={img} alt={"ab property"} />
            </div>

        </div>
    )
};

export default AbProperty;