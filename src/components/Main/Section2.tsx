
import { rubik } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export default function Component() {
  return (
    <div className={`flex justify-center ${rubik.className} rounded-3xl`}>
      <div className="bg-[#052127] p-6 md:p-24 m-7 rounded-3xl">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 justify-between items-center">
          <div> 
            <div className="flex items-center space-x-2 mb-6">
              <Image src="/logo.svg" width={24} height={24} alt="check" />
              <span className="font-bold text-[#2EA7E0]">
                Armada Marketing
              </span>
            </div>
            <h3 className="text-white font-bold mb-4">
              Get full-time marketing talent for eight weeks
            </h3>
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
                <ChevronRightIcon style={{ margin: 0, padding: 0}} /> 
              </Link>
            </div>
          </div>
          <div className="min-w-40 order-first md:order-last w-3/4">
            <Image
              alt="Marketing professional"
              width={700}
              height={700}
              src="/images/small/circular-image.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


