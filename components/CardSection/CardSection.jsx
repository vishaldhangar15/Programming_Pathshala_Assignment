import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
const CardSection = () => {
  return (
    <section className="text-muted-foreground body-font mb-8 ">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center">
          <h1 className="sm:text-3xl text-foreground text-2xl font-bold title-font  mb-4">
            Managing your entire communnity
            <br />
            in a single system
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            who is Nextcent suitable for <span>&#63;</span>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-around gap-4  px-4 md:px-24 w-screen ">
        <div className="flex    items-center justify-between   bg-gray-100">
          <div className="relative bg-red-300   md:w-full md:h-full rounded overflow-hidden shadow-lg">
            <img className="w-full" src="img1.svg" alt="image" />
            <div
              className="absolute bottom-0 left-0
            bg-opacity-50 w-full bg-white text-black p-4 flex  flex-col items-center justify-center "
            >
              <h2 className="text-xl font-bold text-center ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h2>
              <Button variant="link" className="text-2xl font-bold">
                Read More <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between   bg-gray-100">
          <div className="relative bg-red-300  w-full h-full rounded overflow-hidden shadow-lg">
            <img className="w-full" src="img2.svg" alt="image" />
            <div
              className="absolute bottom-0 left-0
            bg-opacity-50 w-full bg-white text-black p-4 flex  flex-col items-center justify-center "
            >
              <h2 className="text-xl font-bold text-center ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h2>
              <Button variant="link" className="text-2xl font-bold">
                Read More <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between   bg-gray-100">
          <div className="relative bg-red-300  w-full h-full rounded overflow-hidden shadow-lg">
            <img className="w-full" src="img3.svg" alt="image" />
            <div
              className="absolute bottom-0 left-0
            bg-opacity-50 w-full bg-white text-black p-4 flex  flex-col items-center justify-center "
            >
              <h2 className="text-xl font-bold text-center ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h2>
              <Button variant="link" className="text-2xl font-bold">
                Read More <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
