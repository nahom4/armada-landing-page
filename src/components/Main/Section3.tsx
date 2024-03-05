import Image from 'next/image';
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IbmPlexSerif, jost } from '@/app/fonts';


interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  imgSrcLarge: string;
  imgSrcSmall : string;
  imgAlt: string;
  bgColor : string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  imgSrcLarge,
  imgSrcSmall,
  imgAlt,
  bgColor,
}) => {
  return (
    <div className={`${bgColor} ${jost.className}  md:w-1/2 text-[#222222] border-2 p-12 space-y-5 rounded-4xl flex flex-col justify-between rounded-3xl`}>
      <div className='flex flex-col gap-4'>
          <p >{title}</p>
          <h3 className={`${IbmPlexSerif.className} font-semibold`}>{subtitle}</h3>
          <p >{description}</p>
        </div>

        <div>
          <Image src={imgSrcSmall} alt={imgAlt} width={500} height={700}  blurDataURL='blurImage'/>
        </div>
   
      <p className="flex items-center text-sm font-medium	 gap-2 hover:gap-4 transition-all duration-200 ease-in-out ">
        Learn more
        <ChevronRightIcon style={{ margin: 0, padding: 0}} /> 
      </p>
    </div>
  );
};

function Section3() {
  return (
   
      <div className="flex flex-col md:flex-row m-7 gap-6 w-3/4 justify-center md:items-stretch items-center mx-auto ">
        <Card
          title="Talents"
          subtitle="Gain marketing talent"
          description="Work with a marketer for 3 months and gain the marketing experience you need to find customers."
          imgAlt="Marketing professional"
          imgSrcLarge="/images/large/talents.svg"
          imgSrcSmall="/images/small/talents.png"
          bgColor='bg-blue-50'
        />
        <Card
          title="Our blogs"
          subtitle="Learn about marketing"
          description="Learn marketing basics with our blog and build an
            impressive talented marketing team. "
          imgSrcLarge="/images/large/books.svg"
          imgSrcSmall="/images/small/books.png"
          imgAlt="Marketing professional"
          bgColor = "bg-[#D7D7D7]"
        />
      </div>
    
  );
}

export default Section3