"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Popover} from "@headlessui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavLink({link,text }:{link : string, text : string}){
    return (
            <Link
              className="hover:text-yellow-500 dark:hover:text-yellow-500"
              href={link}
            >
              {text}
            </Link> )
}
function Header() {
  const [scroll, setScroll] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
      <header
        className={`z-20 fixed w-full bg-white transition-all duration-200 px-6 `}
      >
        <div className="mx-auto px-4 py-2 flex justify-between items-center ">
          <div className="md:flex gap-2 items-center hidden">
            <Image
              src="/logo.svg"
              width={30}
              height={30}
              alt="Armada Marketing"
            />
            <h1 className="text-lg font-sans font-bold ">Armada Marketing</h1>
          </div>

          <Popover className="md:hidden w-full ">
            <Popover.Button>
              <div>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </Popover.Button>
            <Popover.Panel className="md:hidden w-full bg-white-500">
              <div className="flex flex-col space-y-4 md:hidden ">
                <div className="w-full py-2 mb-2 bg-slate-50">
                  <NavLink link ='#' text={'Carear'}/>
                </div>
                <div className="w-full py-2 mb-2 bg-slate-50">
                  <NavLink link ='#' text={'Blog'}/>
                </div>
                <div className="w-full py-2 mb-2 bg-slate-50">
                  <NavLink link ='#' text={'Contact'}/>
                </div>
                <div className="w-full py-2 mb-2 bg-slate-50">
                  <NavLink link ='#' text={'Carear'}/>
                </div>
                <div className="w-full py-2 mb-2 bg-slate-50">
                  <NavLink link ='#' text={'Find A Talent'}/>
                </div> 
              </div>
            </Popover.Panel>
          </Popover>
          <nav className="space-x-5 md:flex items-center min-w-fit hidden">

            <NavLink link ='#' text={'Carear'}/>
            <NavLink link ='#' text={'Blog'}/>
            <NavLink link ='#' text={'Contact'}/>
            <NavLink link ='#' text={'Contact'}/>
            <div className="px-3 py-2 bg-[#19ACFF] text-white items-center justify-center overflow-hidden border-[1px] rounded-lg shadow-md group">
              <NavLink link ='#' text={'Find Talent'}/>
            </div>
          </nav>
        </div>
      </header>
  );
}

export default Header;
