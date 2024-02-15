import Image from 'next/image'
function Section4(){
    return (
        <div className='flex justify-center py-10'>
            <div className='flex flex-col md:flex-row justify-between w-3/4 items-center '>
                <div className='w-2/5 m-2'>
                    <h3 className='font-semibold'>
                        <span>
                            Help emerging
                        </span>
                        <span><br/>
                            marketers grow
                        </span>
                       
                    </h3> 
                    <p>
                        Emerging marketers use Tasks to build their portfolio
                        and launch their careers so every bit of feedback and
                        guidance you provide will go a long way.
                    </p>
                </div>

                <div className='w-1/2 m-2 min-w-60'>
                    <Image
                        src="/tasks-for-bussines-images/review-submissions.jpg.png"
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