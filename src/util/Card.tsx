import Image from "next/image"
function AdvertCard(){
    return (
        <div className="shadow-bottom-left border bg-[#ffffff] border-gray-950 rounded-xl p-8 flex flex-col gap-4 ">
            <div className="flex justify-center">
                <Image
                    src="/tasks-for-bussines-images/Rectangle-43079.png"
                    alt="Picture of the author"
                    width={101}
                    height={97}
                />
            </div>
             <h1 className="text-xl	font-bold">
               <span>Facebook  Post for product</span><br/>
               <span>podium advertising</span>   
             </h1>
             <p className="text-[#676161]">
                Social Ads
             </p>
             <p className="text-[#676161]">
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
                <p className="text-[#676161]">
                    5 Submissions
                </p>
             </div>
        </div>
    )
}

export default AdvertCard