import React from "react";
import Link from "next/link";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Image from "next/image";
import Section4 from "./Section4";
import Section6 from "./Section6";
import Section5 from "./Section5";

function Main() {
  return (
    <div className="flex flex-col gap-8">
    <div className="flex flex-col items-center justify-center text-center relative px-auto">
      <div className="space-y-3 z-10  font-semibold pt-24">
        <h1 className=" tracking-tighter">
          <span>
            ROI Marketing,Only
          </span><br/>
          <span>
          pay per performance
          </span>
          
        </h1>
        <p className="mx-auto max-w-[700px]  text-xxl mb-12">
          No upfront costs. Your ROI Is Our Priority – Pay Us When You Profit.
        </p>
        <div className="space-x-4 py-7">
          <Link
            href="#_"
            className=" px-5  bg-[#19ACFF] text-white w-1/6  items-center justify-center p-4  py-3 overflow-hidden font-medium border-[1px] rounded-lg shadow-md group"
          >
              Find A Talent
          </Link>
        </div>
      </div>
    </div>

    <div className="flex justify-center">
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
