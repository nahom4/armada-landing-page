
import { IbmPlexSerif, nunito } from '@/app/fonts';
import Image from 'next/image'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
      <div className="w-[90%] my-20 text-black border-2 mx-auto bg-blue-50 p-4 md:p-12 space-y-5 rounded-4xl flex flex-col justify-between rounded-3xl">
        <div className="space-y-4">
        <p className={`${nunito.className} font-bold`}>{title}</p>
          <h3 className={`${IbmPlexSerif.className} font-bold`}>{subtitle}</h3>
          <p>{description}</p>
        </div>
  
        <div>
          <Image src={imgSrc} alt={imgAlt} width={792} height={527} />
        </div>
  
        <p className="flex text-sm items-center gap-2 hover:gap-4 transition-all duration-200 ease-in-out">
          Learn more
          <ChevronRightIcon style={{ margin: 0, padding: 0}} /> 
        </p>
      </div>
    );
  };
function Section8(){

   return(
      <div>
        <div>
          <Card title='Apprenticeships' 
          subtitle='Mentor marketing apprentices' 
          description='Mentor vetted marketing apprentices as they help grow your business.' 
          imgSrc='/businessTaskImages/small/app-card-biz.png' imgAlt='Apprenticeships'/>
        </div>
      </div>
   
   )
      
}

export default Section8