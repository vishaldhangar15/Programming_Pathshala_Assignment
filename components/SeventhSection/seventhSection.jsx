import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
const SeventhSection = () => {
  return (
    <div>
      <div className="w-screen mt-24 md:mt-0  h-auto flex flex-col md:flex-row  justify-center items-center px-8 md:px-0 ">
        <div className=" md:flex w-full md:w-[40%]   justify-center items-center">
          <Image height={400} width={400} src="Tesla.svg" />
        </div>
        <div className=" w-full md:w-[50%]   text-left md:pr-24 ">
          <p className=" ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            harum, saepe atque explicabo beatae accusamus, quas laboriosam nisi
            recusandae nam, suscipit officia vero maiores ab eius impedit
            perferendis incidunt sequi quia vitae eum laborum alias. Atque
            saepe, quis ut quidem praesentium ipsum assumenda dolore cupiditate.
            Libero deserunt consequatur, cupiditate porro dignissimos culpa
            perferendis magni rem corporis corrupti ratione ullam soluta quae
            unde vel distinctio facilis quasi dolores magnam animi. Velit ab,
            sint quis quaerat incidunt sunt officiis dicta corrupti debitis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium omnis praesentium commodi mollitia adipisci, iste atque
            accusamus soluta distinctio quam necessitatibus, vel, voluptatibus
            voluptatum!
          </p>
          <h1 className="text-2xl my-4 text-primary">Tim Smith</h1>
          <span className="text-muted-foreground">
            British Dragon Boat Racing Association
          </span>
          <div className="flex justify-between flex-wrap">
            <Image
              height={16}
              width={16}
              src="logo11.svg"
              className=" h-16 w-16 m-4 "
              alt="logo11"
            />
            <Image
              height={16}
              width={16}
              src="logo12.svg"
              className=" h-16 w-16 m-4 "
              alt="logo12"
            />
            <Image
              height={16}
              width={16}
              src="logo13.svg"
              className=" h-16 w-16 m-4 "
              alt="logo13"
            />
            <Image
              height={16}
              width={16}
              src="logo14.svg"
              className=" h-16 w-16 m-4 "
              alt="logo14"
            />
            <Image
              height={16}
              width={16}
              src="logo15.svg"
              className=" h-16 w-16 m-4 "
              alt="logo15"
            />
            <Image
              height={16}
              width={16}
              src="logo16.svg"
              className=" h-16 w-16 m-4 "
              alt="logo16"
            />
            <div className=" h-16 w-16 m-4 ">
              <Button variant="link" className="text-xl my-2 font-bold">
                Meet all customers
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
