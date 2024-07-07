'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
const CountUpSection = () => {
  const [countOn, setCountOn] = useState(false);

  return (
    <section className=" mt-16 container grid lg:grid-cols-2 place-items-center py-20 md:py-16 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold  text-center md:text-left">
          Helping a local
          <br />
          <span className="text-primary">business reinvent itself</span>
        </h1>
        <h2>We reached here with our hardwork and dedication</h2>
      </div>

      {/* Hero cards sections */}
      <ScrollTrigger
        onEnter={() => setCountOn(true)}
        onExit={() => setCountOn(false)}
      >
        <div
          className="grid  grid-cols-1  md:grid-cols-2 gap-4
        text-2xl md:text-3xl text-foreground font-bold  "
        >
          <div className="flex  ">
            <Image
              height={32}
              width={32}
              className="m-4"
              src="countup1.svg"
              alt="countup1"
            />
            <div>
              {countOn && (
                <CountUp className="m-4" start={0} end={2245341} duration={2} />
              )}
              <span className="text-sm block ml-4 text-muted-foreground">
                Members
              </span>
            </div>
          </div>
          <div className="flex">
            <Image
              height={32}
              width={32}
              className="m-4"
              src="countup2.svg"
              alt="countup2"
            />
            <div>
              {countOn && (
                <CountUp className="m-4" start={0} end={46328} duration={2} />
              )}
              <span className="text-sm block ml-4 text-muted-foreground">
                Clubs
              </span>
            </div>
          </div>
          <div className="flex">
            <Image
              height={32}
              width={32}
              className="m-4"
              src="countup3.svg"
              alt="countup3"
            />
            <div>
              {countOn && (
                <CountUp className="m-4" start={0} end={828867} duration={2} />
              )}
              <span className="text-sm block ml-4 text-muted-foreground">
                Event Bookings
              </span>
            </div>
          </div>
          <div className="flex">
            <Image
              height={32}
              width={32}
              className="m-4"
              src="countup4.svg"
              alt="countup4"
            />
            <div>
              {countOn && (
                <CountUp className="m-4" start={0} end={1926436} duration={2} />
              )}
              <span className="text-sm block ml-4 text-muted-foreground">
                Payments
              </span>
            </div>
          </div>
        </div>
      </ScrollTrigger>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};

export default CountUpSection;
