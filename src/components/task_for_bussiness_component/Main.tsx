
import React from "react";
import { IbmPlexSerif } from "@/app/fonts"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"
import Section6 from "./Section6"
import Section7 from "./Section7"
import Section8 from "./Secton8"

function Main(){
    return (
        <div className="flex flex-col items-center">
            <Section1/>
            <h2 className={`${IbmPlexSerif.className} font-semibold text-[#222222] my-20`}>
                How it Works
            </h2>
            <Section2/>
            <Section3/>
            <Section4/>
            <h2 className={`${IbmPlexSerif.className} font-semibold my-8 text-center text-[#222222]`}>
                <span>Get the tasks you need</span><br/>
                <span>done</span>
            </h2>
            <Section5/>
            <Section6/>
            <h2 className={`${IbmPlexSerif.className} text-[#222222] font-semibold my-8 text-center`}>
                Still have questions?
            </h2>
            <Section7/>
            <Section8/>
        </div>
    )
}

export default Main