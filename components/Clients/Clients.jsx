import React from 'react';
import Image from 'next/image';
const Clients = () => {
  return (
    <div>
      <div>
        <h1 className="sm:text-3xl text-2xl text-foreground font-bold text-center">
          Our Clients
        </h1>
        <h1 className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
        </h1>
      </div>
      <div className="mt-10">
        <div className=" flex text-foreground justify-around items-center flex-wrap">
          <Image
            height={16}
            width={16}
            src="logo1.svg"
            className=" h-16 w-16 m-4 "
            alt="logo1"
          />
          <Image
            height={16}
            width={16}
            src="logo2.svg"
            className=" h-16 w-16 m-4 "
            alt="logo2"
          />
          <Image
            height={16}
            width={16}
            src="logo3.svg"
            className=" h-16 w-16 m-4 "
            alt="logo3"
          />
          {/* write same line for logo 4 to logo 8
           */}
          <Image
            height={16}
            width={16}
            src="logo4.svg"
            className=" h-16 w-16 m-4 "
            alt="logo4"
          />
          <Image
            height={16}
            width={16}
            src="logo5.svg"
            className=" h-16 w-16 m-4 "
            alt="logo5"
          />
          <Image
            height={16}
            width={16}
            src="logo6.svg"
            className=" h-16 w-16 "
            m-4
            alt="logo6"
          />
          <Image
            height={16}
            width={16}
            src="logo7.svg"
            className=" h-16 w-16 m-4 "
            alt="logo7"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
