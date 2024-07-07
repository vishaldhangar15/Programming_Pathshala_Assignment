'use client';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CauroselItem1 from './CauroselItem1';
import CarousalItem3 from './CarousalItem3';
import CauroselItem2 from './CauroselItem2';
import Autoplay from 'embla-carousel-autoplay';
const Carousal = () => {
  const plugin = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="flex w-screen h-screen justify-center items-center  ">
      <Carousel
        plugins={[plugin.current]}
        className="w-[80%]  md:w-[90%]  md:h-[90%]   rounded-3xl"
      >
        <CarouselContent>
          <CarouselItem className="flex items-center justify-center">
            <CauroselItem2 />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center">
            <CauroselItem1 />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center">
            <CarousalItem3 />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Carousal;
