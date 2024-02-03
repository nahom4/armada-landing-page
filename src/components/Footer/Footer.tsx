import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

interface socialMediaProps {
  href: string;
  icon: any;
}
function SocialMedia({ href, icon }: socialMediaProps) {
  return (
    <Link
      className=" w-12 h-12 p-3 rounded-full bg-white text-blue-500"
      href={href}
    >
      <FontAwesomeIcon icon={icon} size="2x" />
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-[#f6f7f9] text-black py-12 mt-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-between">
          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <Image
                src="/logo.svg"
                width={30}
                height={30}
                alt="Armada Marketing"
              />
              <h1 className="text-2xl font-sans font-bold ">Armada Marketing</h1>
            </div>
            <p className="">
              We are a team of marketing experts dedicated to helping startups
              succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              <SocialMedia href="https://www.facebook.com/" icon={faFacebook} />
              <SocialMedia href="https://www.twitter.com/" icon={faTwitter} />
              <SocialMedia
                href="https://www.instagram.com/"
                icon={faInstagram}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <ul className="space-y-3">
              <li className="text-xl font-bold  mb-4">Pages</li>
              <li>Why Us?</li>
              <li>What Makes Us Unique?</li>
              <li>How it works?</li>
              <li>About Us</li>
              <li>Testemonial</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <ul className="space-y-3">
              <li className="text-xl font-bold  mb-4">Engage </li>
              <li>Armada Venture</li>
              <li>FAQ</li>
              <li>Privacy policy</li>
              <li>About us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
