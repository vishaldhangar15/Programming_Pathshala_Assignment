import React from 'react';
import Image from 'next/image';
import logo1 from '@/public/logo1.svg';
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
          <img src="logo1.svg" className=" h-16 w-16 m-4 " alt="logo1" />
          <img src="logo2.svg" className=" h-16 w-16 m-4 " alt="logo2" />
          <img src="logo3.svg" className=" h-16 w-16 m-4 " alt="logo3" />
          {/* write same line for logo 4 to logo 8
           */}
          <img src="logo4.svg" className=" h-16 w-16 m-4 " alt="logo4" />
          <img src="logo5.svg" className=" h-16 w-16 m-4 " alt="logo5" />
          <img src="logo6.svg" className=" h-16 w-16 " m-4 alt="logo6" />
          <img src="logo7.svg" className=" h-16 w-16 m-4 " alt="logo7" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
