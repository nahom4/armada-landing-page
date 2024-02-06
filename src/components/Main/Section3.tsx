import Image from 'next/image';
import React from 'react'
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
    <div className="border-2 bg-blue-50 p-12 space-y-5 rounded-4xl flex flex-col justify-between rounded-3xl">
      <div className='space-y-7'>
          <h4 className="text-2xl">{title}</h4>
          <h1 className="font-semibold text-3xl">{subtitle}</h1>
          <p>{description}</p>
        </div>

        <div>
          <Image src={imgSrc} alt={imgAlt} width={500} height={700} />
        </div>
   
      <p className="flex items-center gap-2 hover:gap-4 transition-all duration-200 ease-in-out">
        Learn more
        <FaArrowRight />
      </p>
    </div>
  );
};

function Section3() {
  return (
    <div className="flex m-7 gap-6">
      <Card
        title="Talents"
        subtitle="Gain marketing talent"
        description="Work with a marketer for 3 months and gain the marketing experience you need to find customers."
        imgAlt="Marketing professional"
        imgSrc="/talents.svg"
      />
      <Card
        title="Our blogs"
        subtitle="Learn about marketing"
        description="Learn marketing basics with our blog and build an
impressive talented marketing team. "
        imgSrc="/books.svg"
        imgAlt="Marketing professional"
      />
    </div>
  );
}

export default Section3