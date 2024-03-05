"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {jost, rubik} from '@/app/fonts'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export  function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faBars} style={{margin : 0, padding : 0}}/>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem><NavLink link ='#' text={'Carear'}/></MenuItem>
        <MenuItem><NavLink link ='#' text={'Blog'}/></MenuItem>
        <MenuItem><NavLink link ='#' text={'Contact'}/></MenuItem>
        <MenuItem><NavLink link ='#' text={'Contact'}/></MenuItem>
        <MenuItem>
          <div className="px-4 py-2 bg-[#19ACFF] text-white items-center hover:bg-blue-700 justify-center overflow-hidden border-[1px] rounded-lg shadow-md group">
            <NavLink link ='#' text={'Find Talent'}/>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

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
        className={`${rubik.className} z-20 fixed w-full bg-white transition-all duration-200 `}
      >
        <div className="md:hidden my-1">
          <FadeMenu/>
        </div>
        <div className="w-3/4 mx-auto px-4 md:py-4 flex justify-between items-center ">
          <div className="md:flex gap-2 items-center hidden">
            <Image
              src="/logo.svg"
              width={30}
              height={30}
              alt="Armada Marketing"
            />
            <h1 className="text-sm font-bold ">Armada Marketing</h1>
          </div>

          <nav className={`${jost.className} space-x-5 md:flex items-center min-w-fit hidden text-sm`}>
            <NavLink link ='#' text={'Carear'}/>
            <NavLink link ='#' text={'Blog'}/>
            <NavLink link ='#' text={'Contact'}/>
            <NavLink link ='#' text={'Contact'}/>
            <div className="px-4 py-2 bg-[#19ACFF] text-white items-center hover:bg-blue-700 justify-center overflow-hidden border-[1px] rounded-lg shadow-md group">
              <NavLink link ='#' text={'Find Talent'}/>
            </div>
          </nav>
        </div>
      </header>
  );
}

export default Header;
