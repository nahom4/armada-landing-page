import Link from "next/link";
import Image from 'next/image';
import AdvertCard from "../../util/Card";
import { IbmPlexSerif, nunito } from "@/app/fonts";
function Section1(){
    return(
        
        <div className="bg-blue-50 w-full flex flex-col items-center justify-center pt-28 pb-14 border-b border-black">
            <div className="p-8 mt-8 flex flex-col items-center justify-center ">
                <div className="p-8 flex justify-center flex-col items-center gap-6">
                    <p className={`${nunito.className} md:text-2xl text-center font-semibold`}>
                    Tasks for Business
                    </p>
                    <h1 className={`${IbmPlexSerif.className} text-[#222222] font-bold text-center`}>
                        <span>
                            Ease marketing task 
                        </span><br/>
                        <span>
                            delegation with shared skills.
                        </span>
                    </h1>
                    <p className={`${nunito.className} font-medium	text-[#444444] text-2xl text-center`}>
                    Post simple marketing tasks to get done by emerging marketers.
                    </p>
                    <div className={`${nunito.className} bg-[#19ACFF] hover:bg-blue-700 px-5 py-3 rounded-xl text-white`}>
                        <Link href={'#'}>
                        Get Started
                        </Link>
                    </div>
                </div>
                <div className="flex justify-around items-stretch w-2/3">
                    <div className="my-auto">
                        <div>
                            <Image
                            className="hidden md:block"
                            src="/businessTaskImages/large/black-man.svg"
                            alt="Picture of the author"
                            width={71}
                            height={121}
                            /> 
                            <Image
                            className="md:hidden"
                            src="/businessTaskImages/small/black-man.png"
                            alt="Picture of the author"
                            width={71}
                            height={121}
                            /> 
                        </div>
                    </div>

                    <div>
                        <AdvertCard/>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <Image
                            className="hidden md:block"
                            src="/businessTaskImages/large/white-man.svg"
                            alt="Picture of the author"
                            width={71}
                            height={121}
                            /> 

                            <Image
                            className="md:hidden"
                            src="/businessTaskImages/small/white-man.png"
                            alt="Picture of the author"
                            width={71}
                            height={121}
                            /> 
                        </div>
                        <div>
                            <Image
                            className="hidden md:block"
                            src="/businessTaskImages/large/asian-girl.svg"
                            alt="Picture of the author"
                            width={71}
                            height={121}
                            /> 
                            <Image
                            className="md:hidden"
                            src="/businessTaskImages/small/asian-girl.png"
                            alt="Picture of the author"
                            width={71}
                            height={121}
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1