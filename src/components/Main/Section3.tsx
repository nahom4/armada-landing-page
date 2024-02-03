import Image from 'next/image';
import React from 'react'

function Section3() {
  return (
    <div className='border-2 bg-blue-50 rounded-lg p-12'>
      <h4>Talents</h4>
      <h1>Gain marketing talent</h1>
      <p>
        Work with a marketer for 3 months and gain the marketing experience you
        need to find customers.
      </p>
      <div>
        <Image
            src="/images/card-image.png"
            alt="Marketing professional"
            width={500}
            height={500}
            />

      </div>
    </div>
  );
}

export default Section3