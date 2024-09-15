'use client'

import * as React from "react"
import { useEffect, useState } from "react";
import Header from "./Header";

export default function HomeHeader() {
    const [borderColor, setBorderColor] = useState("border-gray-600");

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const handleScroll = () => {

        let ab = document.getElementById("about");
        let about = ab?.getBoundingClientRect();

        let proj = document.getElementById("projects");
        let projects = proj?.getBoundingClientRect();

        let f = document.getElementById("fun");
        let fun = f?.getBoundingClientRect();

        if (fun && fun.top < 70) {
            setBorderColor("header-red")
        }
        else if (projects && projects.top < 70) {
            setBorderColor("header-blue")
        }
        else if (about && about.top < 70) {
            setBorderColor("header-green")
        }
        else {
            setBorderColor("header-black")
        }
    };

    return <>
        <Header
            title={"TEO TSIVRANIDIS"}
            borderColor={borderColor}
        />
    </>
}