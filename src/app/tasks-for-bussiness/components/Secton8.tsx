
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa';
interface CardProps {
    title: string;
    subtitle: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
  }
  
  const Card: React.FC<CardProps> = ({
    title,
    subtitle,
    description,
    imgSrc,
    imgAlt,
  }) => {
    return (
      <div className="w-1/2 my-20 text-black border-2 bg-blue-50 p-12 space-y-5 rounded-4xl flex flex-col justify-between rounded-3xl">
        <div className="space-y-7">
          <h4>{title}</h4>
          <h3 className="font-semibold ">{subtitle}</h3>
          <p>{description}</p>
        </div>
  
        <div>
          <Image src={imgSrc} alt={imgAlt} width={792} height={527} />
        </div>
  
        <p className="flex items-center gap-2 hover:gap-4 transition-all duration-200 ease-in-out">
          Learn more
          <FaArrowRight />
        </p>
      </div>
    );
  };
function Section8(){

   return(<Card title='Apprenticeships' 
   subtitle='Mentor marketing apprentices' 
   description='Mentor vetted marketing apprentices as they help grow your business.' 
   imgSrc='/tasks-for-bussines-images/app-card-biz.jpg.png' imgAlt='Apprenticeships'/>)
      
}

export default Section8