import { IbmPlexSerif, nunito } from '@/app/fonts'
import Image from 'next/image'
function Section4(){
    return (
        <div className='flex justify-center  md:py-10'>
            <div className='flex flex-col md:flex-row justify-between w-3/4 items-center  text-[#222222]'>
                <div className='md:w-2/5 m-2'>
                    <h3 className={`${IbmPlexSerif.className} font-semibold`}>
                        <span>
                            Help emerging
                        </span>
                        <span><br/>
                            marketers grow
                        </span>
                       
                    </h3> 
                    <p className={`${nunito.className} font-semibold mt-4`}>
                        Emerging marketers use Tasks to build their portfolio
                        and launch their careers so every bit of feedback and
                        guidance you provide will go a long way.
                    </p>
                </div>

                <div className='w-1/2 m-2 min-w-60'>
                    <Image
                        src="/businessTaskImages/small/review-submissions.png"
                        alt="Picture of the author"
                        width={588}
                        height={588}
                    />
                </div>
            </div>
        </div>
    )
}

export default Section4