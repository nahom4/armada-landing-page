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
                    <div className="bg-[#513DFF] px-3 py-2 md:px-6 md:py-4 text-sm md:text-base hover:bg-blue-700 rounded-xl text-white text-center">
                            <Link href={'#'}>
                            Get Started
                            </Link>
                    </div>
                </div>
                <div className="min-w-60">
                    <Image
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