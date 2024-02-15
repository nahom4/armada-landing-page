import React from 'react'
import Link from 'next/link'

function Section6() {
  return (
    <div className="flex flex-col items-center justify-center text-center relative px-auto">
      <div className="space-y-3 z-10  font-semibold pt-24">
        <h2 className="text-4xl  tracking-tighter sm:text-3xl xl:text-6xl/none">
          <span>
              Get started with
          </span><br/>
          <span>
              Armada Marketing
          </span>
        </h2>
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
  );
}

export default Section6