import Image from "next/image"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLefttIcon from '@mui/icons-material/ChevronLeft'
import { rubik } from "@/app/fonts";

function Card({
    title,
    subtitle,
    description,
    imgSrcLarge,
    imgSrcSmall,
    imgAlt,
  }:{
    title:string
    subtitle:string
    description:string
    imgSrcLarge:string
    imgSrcSmall:string
    imgAlt:string
  }) {
    return (
        <div className=" bg-[#ffffff] w-[80%] md:w-1/3 border border-gray-500	rounded-3xl">
            <div className="bg-[#ffffff] w-full h-full border border-gray-500 rounde rounded-3xl relative left-1 bottom-1">
                <div className="bg-[#ffffff] p-5 gap-5  flex flex-col justify-between border-gray-500 rounded-3xl ">
                    <div className="flex gap-4">
                        <div>
                            <Image  src={imgSrcSmall} width={64} height={48} alt= {imgAlt}/>
             
                        </div>
                        <div>
                            <p className={`${rubik.className} font-bold`}>
                                {title}
                            </p>

                            <p className="text-sm text-[#484848]">
                                {subtitle}
                            </p>
                        </div>
                    
                    </div>

                    <p className="text-sm text-[#484848]">
                        {description}
                    </p>
                </div>
            </div>
            </div>
    );
  };
  
  
  
function Section5(){
    return(
        <div className="flex flex-col items-center  bg-[#F6F6F6] justify-center py-28	my-5">
            <h2 className="font-bold text-center text-[#413e3e]">
                <span>Finding remote digital marketers</span><br/> 
                <span>everywhere</span>
            </h2>
            <div className="flex flex-col lg:flex-row justify-center items-center md:w-3/4 gap-8 text-sm py-14">
                <Card title={"Jack Richardson"}
                    subtitle="Co founder, JSpace"
                    description="
                    Collaborating with Armada Marketing has proven to be a
                    transformative experience for JCommerce. Our partnership
                    has not only yielded a remarkable surge in user engagement 
                    but has also vividly demonstrated the unparalleled efficacy
                    of Armada's innovative strategies and seamless collaboration."
                    imgSrcLarge="/images/large/jack.svg"
                    imgSrcSmall="/images/small/jack.png"
                    imgAlt="Jacks Image"

                />
                <Card title={"Hanna Jackson"}
                    subtitle="CEO, Hilco"
                    description="      
                    Armada Marketing played a pivotal role in Hilco's success, driving a remarkable 200%
                    increase in user engagement. Their impactful strategies, innovative approach,
                    and collaborative expertise were invaluable, showcasing their prowess in delivering
                    tangible and lasting outcomes."

                    imgSrcLarge="/images/large/Hanna.svg"
                    imgSrcSmall="/images/small/Hanna.png"
                    imgAlt="Hannas Image"

                />
                <Card title={"Floyd Richard"}
                    subtitle="Co founder, DPro"
                    description="        
                    At DPro, our user engagement surged by 200% since partnering with Armada Marketing.
                    The impressive marketing team and strategies they implemented played a crucial role
                    in this success. We highly recommend leveraging their talents for notable results,
                    solidifying them as invaluable partners in our growth journey."
                    imgSrcLarge="/images/large/floyd.svg"
                    imgSrcSmall="/images/small/floyd.png"
                    imgAlt="Floyd Image"

                />
            </div>

            <div className="flex gap-4 hover:gap-7 font-thin"> 
              
                <div className="border-2 rounded-full border-gray-950  p-1 flex justify-center items-center">
                    <ChevronLefttIcon style={{ margin: 0, padding: 0}} />  
                </div>  
                <div className="border-2 rounded-full border-gray-950  p-1 flex justify-center items-center">
                <ChevronRightIcon style={{ margin: 0, padding: 0}} />  
                </div>  
            </div>

        </div>
    )
}

export default Section5