import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
const CauroselItem2 = () => {
  return (
    <section className="  md:mt-16  container grid lg:grid-cols-2 place-items-center py-20 md:py-16 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Lessons and insights
            <br />
            <span className="text-primary">from 8 years</span>
            {/* <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Home
            </span>{' '} */}
          </h1>{' '}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Build your React landing page effortlessly with the required sections
          to your project.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/about">
            <Button className="w-full md:w-1/3">About Us</Button>
          </Link>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="hidden md:block">
        <div>
          <Image
            height={500}
            width={700}
            src="illustration1.svg"
            alt="Hostel"
            className="image-animation h-[500px] w-[700px] "
          />
        </div>
      </div>
      <div className="shadow"></div>
    </section>
  );
};

export default CauroselItem2;
