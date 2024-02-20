import React from 'react'
import Link from 'next/link'

function Section6() {
  return (
    <div className="flex flex-col items-center justify-center text-center relative px-auto">
      <div className="flex flex-col gap-5 font-semibold pt-6">
        <h2 className="tracking-tighter text-[#3a3838]">
              Get started with 
        </h2>
        <h2 className='tracking-tighter text-[#3a3838]'>
          Armada Marketing
        </h2>
        <div className="space-x-4 py-7">
          <Link
            href="#_"
            className="bg-[#19ACFF] hover:bg-blue-700 py-4 px-5 text-sm text-white w-1/6  items-center justify-center overflow-hidden border-[1px] rounded-xl shadow-md group"
          >
              Find A Talent
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section6