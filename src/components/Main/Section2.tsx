
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Component() {
  return (
    <div className="bg-[#0f172a] p-24 m-7 rounded-xl">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Image src="/logo.svg" width={24} height={24} alt="check" />
            <span className=" text-2xl font-bold text-blue-300">
              Armada Marketing
            </span>
          </div>
          <h1 className="text-white text-4xl font-bold mb-4">
            Get full-time marketing talent for eight weeks
          </h1>
          <ul className="text-[#94a3b8] space-y-2">
            <li className="flex items-center space-x-2">
              <Image src="/plus.svg" width={24} height={24} alt="check" />
              <span>Access a pool of pre-vetted marketing professionals</span>
            </li>
            <li className="flex items-center space-x-2">
              <Image src="/plus.svg" width={24} height={24} alt="check" />
              <span>Find the perfect match for your market needs</span>
            </li>
            <li className="flex items-center space-x-2">
              <Image src="/plus.svg" width={24} height={24} alt="check" />
              <span>Delegate tasks with confidence.</span>
            </li>
          </ul>
          <div className="mt-6">
            <Link
              className="text-white hover:text-[#0ea5e9] inline-flex items-center"
              href="#"
            >
              Blog
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="relative w-[500px] h-[300px]  overflow-hidden">
          <Image
            alt="Marketing professional"
            className="absolute inset-0 w-full h-full object-cover"
            width={500}
            height={500}
            src="/images/section-image.png"
          />
        </div>
      </div>
    </div>
  );
}


