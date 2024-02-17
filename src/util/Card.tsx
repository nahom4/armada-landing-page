import { rubik } from "@/app/fonts"
import Image from "next/image"
function AdvertCard(){
    return (
        <div className="bg-[rgb(255,255,255)]  border-gray-950 border rounded-xl">
            <div className="h-full relative bg-[#ffffff] border-gray-950 border rounded-xl p-8 flex flex-col gap-4 left-1 bottom-1">
                <div className="flex justify-center">
                    <Image
                        src="/tasks-for-bussines-images/Rectangle-43079.png"
                        alt="Picture of the author"
                        width={101}
                        height={97}
                    />
                </div>
                <h1 className={`${rubik.className} text-xl text-[#111111] font-medium`}>
                <span>Facebook  Post for product</span><br/>
                <span>podium advertising</span>   
                </h1>
                <p className="text-[#d4d0d0]">
                    Social Ads
                </p>
                <p className="text-[#d4d0d0]">
                    4 tasks
                </p>
                <div className="flex gap-2">
                    <div className="flex">
                        <div className="relative" style={{marginRight: '-5px'}}>
                            <Image
                            src="/tasks-for-bussines-images/white-man-avatar.png"
                            alt="Picture of the author"
                            width={36}
                            height={37}
                            />
                        </div>
                        <div className="relative" style={{marginLeft: '-5px', marginRight: '-5px'}}>
                            <Image
                            src="/tasks-for-bussines-images/black-girl-avatar.png"
                            alt="Picture of the author"
                            width={36}
                            height={37}
                            />
                        </div>
                        <div className="relative" style={{marginLeft: '-5px'}}>
                            <Image
                            src="/tasks-for-bussines-images/asian-girl-avatar.png"
                            alt="Picture of the author"
                            width={36}
                            height={37}
                            />
                        </div>

                    </div>
                    <p className="text-[#d4d0d0]">
                        5 Submissions
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AdvertCard