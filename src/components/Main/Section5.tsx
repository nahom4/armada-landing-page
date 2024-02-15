import { Box } from "@/util/Box";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image"
import { FaChevronCircleRight } from 'react-icons/fa';
import { FaChevronCircleLeft} from 'react-icons/fa';
function Card({
    title,
    subtitle,
    description,
    imgSrc,
    imgAlt,
  }:{
    title:string
    subtitle:string
    description:string
    imgSrc:string
    imgAlt:string
  }) {
    return (
      <div className="shadow-bottom-left text-black border bg-[#ffffff] border-slate-950 p-12 space-y-5 rounded-4xl flex flex-col justify-between rounded-3xl">
        <div className="flex gap-4 ">
            <div>
                <Image src={imgSrc} width={64} height={48} alt= {imgAlt}>
                </Image>
            </div>
            <div>
                <p className="	font-bold">
                    {title}
                </p>

                <p>
                    {subtitle}
                </p>
            </div>
           
        </div>

        <p>
            {description}
        </p>
      </div>
    );
  };
  
  
  
function Section5(){
    return(
        <div className="flex flex-col items-center gap-8 bg-[#F6F6F6] justify-center py-20 my-10">
            <h1 className="font-medium text-center text-[#222222] ">
                <span>Finding remote digital marketers</span><br/> 
                <span>everywhere</span>
            </h1>
            <div className="flex flex-col lg:flex-row justify-center w-3/4 gap-8 text-sm">
                <Card title={"Jack Richardson"}
                    subtitle="Co founder, JSpace"
                    description="
                    Collaborating with Armada Marketing has proven to be a
                    transformative experience for JCommerce. Our partnership
                    has not only yielded a remarkable surge in user engagement 
                    but has also vividly demonstrated the unparalleled efficacy
                    of Armada's innovative strategies and seamless collaboration."
                    imgSrc="/images/jack.svg"
                    imgAlt="Jacks Image"

                />
                <Card title={"Hanna Jackson"}
                    subtitle="CEO, Hilco"
                    description="      
                    Armada Marketing played a pivotal role in Hilco's success, driving a remarkable 200%
                    increase in user engagement. Their impactful strategies, innovative approach,
                    and collaborative expertise were invaluable, showcasing their prowess in delivering
                    tangible and lasting outcomes."

                    imgSrc="/images/Hanna.svg"
                    imgAlt="Hannas Image"

                />
                <Card title={"Floyd Richard"}
                    subtitle="Co founder, DPro"
                    description="        
                    At DPro, our user engagement surged by 200% since partnering with Armada Marketing.
                    The impressive marketing team and strategies they implemented played a crucial role
                    in this success. We highly recommend leveraging their talents for notable results,
                    solidifying them as invaluable partners in our growth journey."
                    imgSrc="/images/floyd.svg"
                    imgAlt="Floyd Image"

                />
            </div>



            <div className="flex gap-4">
                <div>
                    <FaChevronCircleLeft style={{ backgroundColor: 'transparent' }} />
                </div>
                <div>
                    <FaChevronCircleRight style={{ backgroundColor: 'transparent' }} />
                </div>
            </div>

        </div>
    )
}

export default Section5