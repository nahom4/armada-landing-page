import { IbmPlexSerif, nunito } from "@/app/fonts"
import Image from "next/image"
function Section3(){
    return (
        <div className="flex justify-center py-10">
            <div className="flex flex-col md:flex-row  text-[#222222] justify-between w-3/4 items-center">
                <div className="md:w-1/2 m-2 min-w-60 order-last md:order-first">
                    <Image
                    src="/businessTaskImages/small/task-submission.png"
                    alt="Picture of the author"
                    width={588}
                    height={588}
                    /> 
                </div>

                <div className="md:w-2/5 m-2">
                    <h3 className={`${IbmPlexSerif.className} font-semibold`}>
                        <span>
                        Get submissions
                        </span><br/>
                        <span>
                        from emerging
                        </span><br/>
                        <span>
                        marketers
                        </span>
                    </h3>
                    <p className={`${nunito.className} font-semibold mt-4`}>
                        Post a task in minutes and get multiple submissions. In
                        exchange for the submissions give the candidates
                        feedback on their work. It’s that easy.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section3