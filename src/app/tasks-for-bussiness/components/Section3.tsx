import Image from "next/image"
function Section3(){
    return (
        <div className="flex justify-center py-10">
            <div className="flex flex-col md:flex-row justify-between w-3/4 items-center">
                <div className="w-1/2 m-2 min-w-60">
                    <Image
                    src="/tasks-for-bussines-images/task-submission.jpg.png"
                    alt="Picture of the author"
                    width={588}
                    height={588}
                    /> 
                </div>

                <div className="w-2/5 m-2">
                    <h3 className="font-semibold">
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
                    <p className="">
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