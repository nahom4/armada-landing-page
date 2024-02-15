import Image from "next/image";

function Section2(){
    return (
            <div className="flex flex-col  md:flex-row justify-between w-3/4 items-center flex-wrap mx-auto">
                <div className="w-2/5 min-w-60 p-2">
                    <h3 className="font-semibold ">
                        <span>
                            Post a quick and
                        </span><br/>
                        <span>
                            simple task
                        </span>
                    </h3>
                    <p className="">
                    Need a simple blog? Perhaps a social media post? Or
                    a book launch strategy? Whatever the task, if it’s
                    under 5 hours you can post it and get candidates to
                    complete it for free.
                    </p>
                </div>

                <div className="w-1/2 min-w-60 p-2">
                    <Image
                        src="/tasks-for-bussines-images/post.jpg.png"
                        alt="Picture of the author"
                        width={588}
                        height={588}
                    /> 
                </div>
            </div>
    )
}
export default Section2

