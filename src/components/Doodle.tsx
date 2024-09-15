import * as React from "react"

export default function Doodle() {
    return <div className="fixed bottom-[12px] right-[10px] flex justify-end px-10">
        <div className="relative">
            <object
                data={"/angry_blob.svg"} type="image/svg+xml" width="100px"
                className={`absolute z-10 opacity-0 hover:opacity-100`}
            />
            <object data={"/blob.svg"} type="image/svg+xml" width="100px" />
            <div className="absolute top-[91%] w-[300px] transform z-[-10] flex flex-col">
                <div>{"||&&&&&&&&&||"}</div>
            </div>
        </div>
    </div>
}