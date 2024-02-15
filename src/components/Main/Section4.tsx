import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import internal from 'stream';


function Card({
  title,
  subtitle,
  description,
  imgSrc,
  imgAlt,
  width,
  height
}:{
  title:string
  subtitle:string
  description:string
  imgSrc:string
  imgAlt:string
  width : number
  height : number
}) {
  return (
    <div className="text-black border-2 bg-blue-50 p-12 space-y-5 rounded-4xl flex flex-col justify-between rounded-3xl">
      <div className="space-y-7">
        <h4 className="text-2xl">{title}</h4>
        <h1 className="font-semibold text-3xl">{subtitle}</h1>
        <p>{description}</p>
      </div>

      <div>
        <Image src={imgSrc} alt={imgAlt} width={width} height={height} />
      </div>

      <p className="flex items-center gap-2 hover:gap-4 transition-all duration-200 ease-in-out">
        Learn more
        <FaArrowRight />
      </p>
    </div>
  );
};


function Section4() {
  return (
    <div className="bg-black text-white p-12 py-14 flex flex-col items-center ">
      <div className='flex flex-col w-3/4 items-center'>
        <h2 className="font-bold">Finding remote marketing talent</h2>
        <p className="my-7  text-center">
          {" "}
          Hunting for remote marketing stars is like finding digital unicorns – it
          takes a mix of tech savvy and a keen sense for the real gems who can
          spark online magic for your brand. Let's build a virtual dream team
          together! Tasks digital marketers Crowdsource simple marketing tasks
          Hire affordable digital marketers Post quick and simple tasks to get
          done by emerging marketers. Get connected with, manage, and pay vetted
          digital marketers Learn More Learn More
        </p>
        <div className="flex flex-col md:flex-row mx-7 gap-6 ">
          <Card
            title="Tasks"
            subtitle="Crowdsource simple
  marketing tasks"
            description="Post quick and simple tasks to get done by emerging
  marketers."
            imgSrc="images/marketing_tasks.svg"
            imgAlt="Marketing professional"
            width={500}
            height={500}
          />
          <Card
            title="Digital Marketers"
            subtitle="Hire affordable digital 
  marketers"
            description="Get connected with, manage, and pay vetted
  digital marketers"
            imgSrc="/circle-girl.svg"
            imgAlt="Marketing professional"
            width={351}
            height={322}
          />
        </div>
      </div>
    </div>
  );
}

export default Section4