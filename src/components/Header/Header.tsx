"use client";
import Link from "next/link";
import React from "react";

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
      <div className=" mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-sans font-bold ">
          Armada Marketing
        </h1>

        <nav className="space-x-5 flex items-center text-xl font-semibold min-w-fit">
          
          <Link
            className=" hover:text-yellow-500 dark:hover:text-yellow-500 "
            href="#"
          >
            Carear
          </Link>
          <Link
            className=" hover:text-yellow-500 dark:hover:text-yellow-500 "
            href="#"
          >
           Blog
          </Link>
          <Link
            className=" hover:text-yellow-500 dark:hover:text-yellow-500 "
            href="#"
          >
            Contact
          </Link>
          <Link
            href="#_"
            className="w-fit whitespace-nowrap px-7 bg-purple-500 text-white   items-center justify-center p-4  py-3 overflow-hidden font-medium border-[1px] border-purple-500 rounded-lg shadow-md group"
          >
            Find A Talent
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
