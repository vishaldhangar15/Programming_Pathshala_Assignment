'use client';
import Togglebtn from '../ToggleButton/ToggleButton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Cross2Icon } from '@radix-ui/react-icons';
import { ArrowRightIcon } from '@radix-ui/react-icons';
function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const Links = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Service',
      link: '/service',
    },
    {
      name: 'Feature',
      link: '/feature',
    },
    {
      name: 'Product',
      link: '/product',
    },
    {
      name: 'Testimonial',
      link: '/testimonial',
    },
    {
      name: 'FAQ',
      link: '/faq',
    },
  ];
  return (
    <div className="Navbar relative">
      <nav className="fixed top-0 left-0 right-0  shadow-sm backdrop-blur-md z-10 p-4">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <div className="text-2xl text-foreground font-bold ">
                  {/* <svg
                    className="w-4 h-4"
                    color="black"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M41.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 41.4 86.6zM288 416H576c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                    />
                  </svg> */}
                  Nexcent
                </div>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <Togglebtn className="mx-4" />
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Cross2Icon className="w-4 h-4 text-foreground" />
                  ) : (
                    <HamburgerMenuIcon className="w-4 h-4 text-foreground " />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen  md:h-auto items-center justify-center md:flex sm:text-base text-lg font-bold  ">
                <li className="    py-2 px-6 text-center  border-b-2 md:border-b-0 border-purple-900 hover:underline md:hover:bg-transparent">
                  {/* using map method to iterate through an array of objects
                   */}
                  {Links.map((link) => (
                    <Link
                      className=" no-underline block md:inline font-semibold py-2 px-4 rounded-lg hover:bg-[#ffffff33] hover:shadow-md hover:backdrop-blur-md "
                      href={link.link}
                      onClick={() => setNavbar(!navbar)}
                      key={link.name}
                    >
                      {link.name}
                    </Link>
                  ))}
                </li>
                <li className="md:hidden">
                  <div
                    className=" no-underline flex justify-center items-center font-semibold py-2 px-4 rounded-lg hover:bg-[#ffffff33] hover:shadow-md hover:backdrop-blur-md "
                    onClick={() => setNavbar(!navbar)}
                  >
                    <Button variant="link" className=" ">
                      Login
                    </Button>
                  </div>
                </li>
                <li className="md:hidden">
                  <div
                    className=" no-underline flex justify-center items-center font-semibold py-2 px-4 rounded-lg hover:bg-[#ffffff33] hover:shadow-md hover:backdrop-blur-md "
                    onClick={() => setNavbar(!navbar)}
                  >
                    <Button className=" ">Sign Up</Button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className=" hidden  md:flex items-center justify-cente ">
            <Togglebtn className="" />
            <Button variant="link" className="ml-4 ">
              Login
            </Button>
            <Button className="ml-4">Sign Up</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
