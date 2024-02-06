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

const Card: React.FC<CardProps> = ({ title, subtitle, description, imgSrc, imgAlt }) => {
  return (
    <div className="border-2 bg-blue-50 p-12 space-y-5 rounded-4xl">
      <h4 className="text-2xl">{title}</h4>
      <h1 className="font-semibold text-3xl">{subtitle}</h1>
      <p>{description}</p>
      <div>
        <Image src={imgSrc} alt={imgAlt} width={500} height={700} />
      </div>
      <p className="flex items-center gap-2 hover:gap-4 transition-all duration-200 ease-in-out">
        Learn more
        <FaArrowRight />
      </p>
    </div>
  );
}

function Section3() {
  return (
    <div className="flex ">
      <Card
        title="Talents"
        subtitle="Gain marketing talent"
        description="Work with a marketer for 3 months and gain the marketing experience you need to find customers."
        imgSrc="/books.svg"
        imgAlt="Marketing professional"
      />
     <Card
        title="Talents"
        subtitle="Gain marketing talent"
        description="Work with a marketer for 3 months and gain the marketing experience you need to find customers."
        imgSrc="/talents.svg"
        imgAlt="Marketing professional"
      />
    </div>
  );
}

export default Section3