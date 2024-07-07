import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

const ThirdSection = () => {
  return (
    <section className="  text-muted-foreground body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-foreground text-2xl font-bold title-font  mb-4">
            Managing your entire communnity
            <br />
            in a single system
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            who is Nextcent suitable for <span>&#63;</span>
          </p>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-tl-2xl rounded-br-2xl bg-green-100 text-primary mb-5 flex-shrink-0">
              <Image height={50} width={50} src="Client1.svg" />
            </div>
            <div className="flex-grow">
              <h2 className="text-3xl text-foreground font-bold title-font  mb-3">
                Membership
                <br /> Organisations
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-tl-2xl rounded-br-2xl bg-green-100 text-primary mb-5 flex-shrink-0">
              {/* client 2 */}
              <Image
                height={50}
                width={50}
                src="Client2.svg"
                alt="client2.svg"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-foreground  text-3xl title-font font-bold mb-3">
                National
                <br />
                Associations
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-tl-2xl rounded-br-2xl bg-green-100 text-primary mb-5 flex-shrink-0">
              <Image
                height={50}
                width={50}
                src="Client3.svg"
                alt="client3.svg"
              />
            </div>
            <div className="flex-grow">
              <h2 className=" text-3xl title-font font-bold text-foreground mb-3">
                Clubs And
                <br /> Groups
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
