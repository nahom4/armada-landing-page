import Link from "next/link";
import Image from 'next/image';
import AdvertCard from "../../../util/Card";
function Section1(){
    return(
        <div className="mt-28  bg-teal-100 w-full flex flex-col items-center justify-center py-18 my-25">
            <div className="p-8 mt-8 flex flex-col items-center justify-center ">
                <div className="p-8 flex justify-center flex-col items-center gap-5">
                    <p className="text-2xl text-center font-medium">
                    Tasks for Business
                    </p>
                    <h1 className="font-bold text-center">
                        <span>
                            Ease marketing task 
                        </span><br/>
                        <span>
                            delegation with shared skills.
                        </span>
                    </h1>
                    <p className="text-2xl text-center">
                    Post simple marketing tasks to get done by emerging marketers.
                    </p>
                    <div className="bg-[#19ACFF] px-3 py-2 rounded-xl text-white">
                        <Link href={'#'}>
                        Get Started
                        </Link>
                    </div>
                </div>
                <div className="flex justify-around items-stretch w-1/2 gap-5">
                    <div className="flex flex-col justify-center mx-4">
                        <Image
                        src="/tasks-for-bussines-images/black-man.png"
                        alt="Picture of the author"
                        width={71}
                        height={121}
                        /> 
                    </div>

                    <div>
                        <AdvertCard/>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <Image
                            src="/tasks-for-bussines-images/white-man.png"
                            alt="Picture of the author"
                            width={71}
                            height={121}
                            /> 
                        </div>
                        <div>
                            <Image
                            src="/tasks-for-bussines-images/asian-girl.png"
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