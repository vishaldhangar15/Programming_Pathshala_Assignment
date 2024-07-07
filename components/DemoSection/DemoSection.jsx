import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const DemoSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="m-8 md:m-16">
        <h1 className="text-center  text-3xl md:text-5xl font-extrabold">
          Pellentesuq suscipit <br />
          fringilia libero eu
        </h1>
      </div>
      <Button>
        Get a Demo
        <ArrowRight />
      </Button>
    </div>
  );
};

export default DemoSection;
