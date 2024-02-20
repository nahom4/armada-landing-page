import Image from 'next/image';
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IbmPlexSerif, jost, rubik } from '@/app/fonts';

function Card({
  title,
  subtitle,
  description,
  imgSrc,
  imgAlt,
  width,
  height,
  bgColor
}:{
  title:string
  subtitle:string
  description:string
  imgSrc:string
  imgAlt:string
  width : number
  height : number
  bgColor : string
}) {
  return (
    <div className={`${bgColor} ${jost.className} font-medium	 text-black border-2 p-10 space-y-5 mt-10 rounded-6xl flex flex-col justify-between items-center rounded-3xl`}>
      <div className="space-y-4">
        <p>{title}</p>
        <p className={`${IbmPlexSerif.className} font-semibold md:text-3xl`}>{subtitle}</p>
        <p className={`font-normal  text-[#444444]`}>{description}</p>
      </div>

      <div>
        <Image src={imgSrc} alt={imgAlt} width={width} height={height} />
      </div>

      <p className={`${jost.className} font-normal flex self-start items-center gap-2 hover:gap-4 transition-all duration-200 ease-in-out`}>
        Learn more
        <ChevronRightIcon style={{ margin: 0, padding: 0}} /> 
      </p>
    </div>
  );
};


function Section4() {
  return (
    <div className={`bg-[#111111] text-white p-12 py-28 flex flex-col items-centerd`}>
      <div className='flex flex-col items-center w-5/6 mx-auto'>
        <h2 className= {`${rubik.className} font-bold`}>Finding remote marketing talent</h2>
        <p className="my-7 md:text-lg  text-center font-sans">
          {" "}
          Hunting for remote marketing stars is like finding digital unicorns – it takes a mix of tech savvy and a
          keen sense for the real gems who can spark online magic for your brand. Let's build a virtual dream
          team together!
        </p>
        <div className="flex flex-col md:flex-row mx-7 gap-6 ">
          <Card
            title="Tasks"
            subtitle="Ease marketing task delegation with skills."
            description="Post quick and simple tasks to get done by emerging
  marketers."
            imgSrc="/images/marketing_tasks.png"
            imgAlt="Marketing professional"
            width={500}
            height={500}
            bgColor='bg-[#EEFBFF]'
          />
          <Card
            title="Digital Marketers"
            subtitle="Hire affordable digital 
  marketers"
            description="Get connected with, manage, and pay vetted
  digital marketers"
            imgSrc="/images/circle-girl.png"
            imgAlt="Marketing professional"
            width={250}
            height={220}
            bgColor='bg-[#D7D7D7]'
          />
        </div>
      </div>
    </div>
  );
}

export default Section4