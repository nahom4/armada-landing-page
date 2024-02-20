import Link from "next/link";
import Image from "next/image";
import { IbmPlexSerif } from "@/app/fonts";
function Section6(){
    return (
        <div className="bg-[#FCF6F0] w-full my-11">
            <div className="flex flex-col justify-between items-center my-8">
                <div className="my-8 flex flex-col justify-around items-center">
                    <h1 className={`${IbmPlexSerif.className} font-semibold text-center my-8 text-[#222222]`}>
                        <span>Crowd source your</span> <br/>
                        <span>marketing tasks today</span> 
                    </h1>
                    <div className="bg-[#513DFF] py-4 hover:bg-blue-700 rounded-xl text-white w-1/4 text-center">
                            <Link href={'#'}>
                            Get Started
                            </Link>
                    </div>
                </div>
                <div className="min-w-60">
                    <Image
                            className="hidden md:block"
                            src="/businessTaskImages/large/tasks-business-hero.svg"
                            alt="Picture of the author"
                            width={792} 
                            height={594}
                        />
                    <Image
                            className="md:hidden"
                            src="/businessTaskImages/small/tasks-business-hero.png"
                            alt="Picture of the author"
                            width={792} 
                            height={594}
                        />
                </div>
            </div>
        </div>
    )
}

export default Section6