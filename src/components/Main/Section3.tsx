import Image from 'next/image';
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IbmPlexSerif, jost } from '@/app/fonts';


interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  bgColor : string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  imgSrc,
  imgAlt,
  bgColor,
}) => {
  return (
    <div className={`${bgColor} ${jost.className} w-1/2 text-[#222222] border-2 p-12 space-y-5 rounded-4xl flex flex-col justify-between rounded-3xl`}>
      <div className='flex flex-col gap-4'>
          <p >{title}</p>
          <h3 className={`${IbmPlexSerif.className} font-semibold`}>{subtitle}</h3>
          <p >{description}</p>
        </div>

        <div>
          <Image src={imgSrc} alt={imgAlt} width={500} height={700}  blurDataURL='blurImage'/>
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
    <div className='flex justify-center'>
      <div className="flex flex-col md:flex-row m-7 gap-6 w-5/6 justify-center items-stretch ">
        <Card
          title="Talents"
          subtitle="Gain marketing talent"
          description="Work with a marketer for 3 months and gain the marketing experience you need to find customers."
          imgAlt="Marketing professional"
          imgSrc="/images/talents.png"
          bgColor='bg-blue-50'
        />
        <Card
          title="Our blogs"
          subtitle="Learn about marketing"
          description="Learn marketing basics with our blog and build an
  impressive talented marketing team. "
          imgSrc="/images/books.png"
          imgAlt="Marketing professional"
          bgColor = "bg-[#D7D7D7]"
        />
      </div>
    </div>
  );
}

export default Section3