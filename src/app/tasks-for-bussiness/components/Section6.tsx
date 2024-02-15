import Link from "next/link";
import Image from "next/image";
function Section6(){
    return (
        <div className="bg-[#FCF6F0] w-full my-11">
            <div className="flex flex-col justify-between items-center my-8">
                <div className="my-8 flex flex-col justify-around items-center">
                    <h2 className="font-semibold text-center my-8">
                        <span>Crowdsource your</span> <br/>
                        <span>marketing tasks today</span> 
                    </h2>
                    <div className="bg-[#513DFF] px-4 py-2 rounded-lg text-white w-1/3 text-center">
                            <Link href={'#'}>
                            Get Started
                            </Link>
                    </div>
                </div>
                <div className="min-w-60">
                    <Image
                            src="/tasks-for-bussines-images/tasks-business-hero.jpg.png"
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