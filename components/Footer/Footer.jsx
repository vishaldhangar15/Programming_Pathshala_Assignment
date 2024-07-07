import React from 'react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Input } from '@/components/ui/input';

import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className="mt-16 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex flex-col justify-center   items-center md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/"
              className="flex title-font font-medium md:items-center md:justify-start justify-center text-white"
            >
              <img src="logo0.svg" alt="logo0.svg" />
              <span className="ml-3 text-xl">Nexcent</span>
            </Link>
            <p className="mt-2 text-sm text-center text-gray-500">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
            <div className="flex my-4 gap-2 text-white ">
              <Link href="#facebook">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#instagram">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#twitter">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#youtube">
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            {['Company'].map((category, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                  {category}
                </h2>
                <nav className="list-none mb-10">
                  {[
                    'About Us',
                    'Blog',
                    'Contact Us',
                    'Pricing',
                    'Testimonicals',
                  ].map((link, idx) => (
                    <li key={idx}>
                      <a className="text-gray-400 hover:text-white">{link}</a>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
            {['Support'].map((category, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                  {category}
                </h2>
                <nav className="list-none mb-10">
                  {[
                    'Help Center',
                    'Terms of Service',
                    'Legal',
                    'Privacy Policy',
                    'Status',
                  ].map((link, idx) => (
                    <li key={idx}>
                      <a className="text-gray-400 hover:text-white">{link}</a>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>
          <div className="mt-10 md:mt-0">
            <div className="text-white">
              <h2>Stay up to date</h2>
              <Input
                className="w-full bg-gray-900"
                type="email"
                placeholder="Your email address"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
