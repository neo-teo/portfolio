import * as React from "react"

export default function Doodle() {
    return <div>
        <object
            data={"/angry_blob.svg"} type="image/svg+xml" width="50px"
            className={`absolute z-10 opacity-0 hover:opacity-100`}
        />
        <object data={"/blob.svg"} type="image/svg+xml" width="50px" />
    </div>
}