import { useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";



const socials = [
  {name: 'facebook', icon: <FaFacebookSquare/>, link: 'https://www.facebook.com/webcafeafrica'},
  {name: 'twitter', icon: <FaXTwitter />, link: 'https://www.twitter.com/webcafeafrica'},
  {name: 'linkedin', icon: <FaLinkedin />, link: 'https://www.linkedin.com/company/webcafe-africa'},
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [active, setActive] = useState(false);

  return (
    <nav
      className='fixed flex justify-between items-center z-10 ml-10 mt-10 sm:w-10/12 w-8/12 border-t pt-4'
    >
      <div className="flex items-center gap-2 hover:-translate-y-1">
        <Image
          src="/logo.png"
          width={24}
          height={28}
          alt="webcafe africa logo"
          className="animate-spin"
        />
        <Link
          href="/"
          className="font-bold text-black font-quicksand uppercase transition duration-500 ease-in-out transform"
        >
          webcafe africa
        </Link>
      </div>
      <div
        className='absolute right-16 md:hidden'
      >
        {!isOpen && <HiOutlineMenuAlt2 className="text-xl" onClick={toggle} />}
      </div>
      <ul className="hidden md:flex gap-6 p-2 font-normal text-black text-sm uppercase">
        <li>
          <Link href="#about" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="hover:underline">
            Portfolio
          </Link>
        </li>
      </ul>
      <ul className='gap-3 text-2xl sm:flex hidden'>
        {socials.map((social, index) => (
          <li key={index}>
            <Link href={social.link} className="hover:underline" target='blank' rel='noopener'>
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
    </nav>
  );
};

export default Navbar;
