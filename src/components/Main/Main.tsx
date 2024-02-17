import React from "react";
import Link from "next/link";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Image from "next/image";
import Section4 from "./Section4";
import Section6 from "./Section6";
import Section5 from "./Section5";
import {rubik,jost} from '@/app/fonts'
function Main() {
  return (
    <div className="flex flex-col gap-8">
    <div className="flex flex-col items-center justify-center text-center relative px-auto">
      <div className="space-y-3 z-10  font-medium	 pt-40 flex flex-col gap-2">
        <h2 className={`${rubik.className} tracking-tighter text-[#222222]`}>
            ROI Marketing, 
        </h2>
        <h2 className={`${rubik.className} tracking-tighter text-[#222222]`}>
          Only pay per performance
        </h2>

        <p className={`${jost.className} text-xl font-normal mx-auto max-w-[700px]  text-[#444444]`}>
          <span>No upfront costs. Your ROI Is Our Priority – Pay Us</span><br/>
          <span> When You Profit.</span> 
        </p>
        <div className="space-x-4 py-4">
          <Link
            href="#_"
            className=" px-5 text-sm bg-[#19ACFF] text-white w-1/6  items-center justify-center py-4 overflow-hidden  border-[1px] rounded-xl shadow-md group"
          >
              Find A Talent
          </Link>
        </div>
      </div>
    </div>

    <div className="flex justify-center w-3/4 mx-auto">
      <Image
        src="/images/group.svg"
        alt="Picture of the author"
        width={1235}
        height={560}
      /> 
    </div>
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />  
    </div>
  );
}

export default Main;
