import React from 'react'
import Link from 'next/link'

function Section6() {
  return (
    <div className="flex flex-col items-center justify-center text-center relative px-auto">
      <div className="space-y-3 z-10  font-semibold pt-24">
        <h1 className="text-4xl  tracking-tighter sm:text-3xl xl:text-6xl/none">
          Get started with
        </h1>
        <h1 className="text-4xl  tracking-tighter sm:text-3xl xl:text-6xl/none">
          Armada Marketing
        </h1>
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

export default Section6