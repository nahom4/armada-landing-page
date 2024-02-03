import React from "react";
import Link from "next/link";

function Main() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center text-center relative px-auto">
      <div className="space-y-3 z-10  font-semibold pt-24">
        <h1 className="text-4xl  tracking-tighter sm:text-3xl xl:text-6xl/none">
          ROI Marketing,Only
        </h1>
        <h1 className="text-4xl  tracking-tighter sm:text-3xl xl:text-6xl/none">
        pay per performance
        </h1>
        <p className="mx-auto max-w-[700px]  text-xxl mb-12">
          No upfront costs. Your ROI Is Our Priority – Pay Us When You Profit.
        </p>
        <div className="space-x-4 py-7">
          <Link
            href="#_"
            className=" px-7 bg-purple-500 text-white w-1/6  items-center justify-center p-4  py-3 overflow-hidden font-medium border-[1px] border-purple-500 rounded-lg shadow-md group"
          >
              Find A Talent
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
