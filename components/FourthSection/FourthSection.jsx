import React from 'react';
import { Button } from '../ui/button';
const FourthSection = () => {
  return (
    <div>
      <div className=" mt-24 md:mt-0 w-screen h-[500px] flex justify-center items-center">
        <div className="hidden md:flex md:w-[40%]   justify-center items-center">
          <img src="illustration3.svg" />
        </div>
        <div className="md:w-[60%]  text-left px-8 md:px-0 md:pr-48 ">
          <h1 className="text-2xl md:text-3xl flex  flex-col font-bold md:my-12 mt-8 md:mt-0   ">
            How to design your site footer like we did
          </h1>
          <p className="  md:my-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            harum, saepe atque explicabo beatae accusamus, quas laboriosam nisi
            recusandae nam, suscipit officia vero maiores ab eius impedit
            perferendis incidunt sequi quia vitae eum laborum alias. Atque
            saepe, quis ut quidem praesentium ipsum assumenda dolore cupiditate.
            Libero deserunt consequatur, cupiditate porro dignissimos culpa
            perferendis magni rem corporis corrupti ratione ullam soluta quae
            unde vel distinctio facilis quasi dolores magnam animi. Velit ab,
            sint quis quaerat incidunt sunt officiis dicta corrupti debitis!
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
