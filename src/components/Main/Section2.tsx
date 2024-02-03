
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-[#0f172a] p-24 m-7 rounded-xl">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <AnchorIcon className="text-[#22d3ee]" />
            <span className=" text-2xl font-bold text-blue-300">
              Armada Marketing
            </span>
          </div>
          <h1 className="text-white text-4xl font-bold mb-4">
            Get full-time marketing talent for eight weeks
          </h1>
          <ul className="text-[#94a3b8] space-y-2">
            <li className="flex items-center space-x-2">
              <CheckIcon className="text-[#22d3ee]" />
              <span>Access a pool of pre-vetted marketing professionals</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="text-[#22d3ee]" />
              <span>Find the perfect match for your market needs</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="text-[#22d3ee]" />
              <span>Delegate tasks with confidence.</span>
            </li>
          </ul>
          <div className="mt-6">
            <Link
              className="text-[#22d3ee] hover:text-[#0ea5e9] inline-flex items-center"
              href="#"
            >
              Blog
              <ArrowRightIcon className="ml-2" />
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

function AnchorIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="3" />
      <line x1="12" x2="12" y1="22" y2="8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
