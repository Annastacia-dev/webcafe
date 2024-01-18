import React from 'react';
import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';

const socials = [
  {
    id: 1,
    name: 'twitter',
    link: 'https://twitter.com/webcafeafrica',
    icon: <FaXTwitter />,
  },
  {
    id: 2,
    name: 'linkedin',
    link: 'https://www.linkedin.com/company/webcafe-africa',
    icon: <FaLinkedinIn />,
  },
];

const Header = () => {
  return (
    <div
      className="bg-cover bg-center h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('/background.jpg')`,
      }}
    >
      <div className="absolute h-screen w-screen bg-black bg-opacity-10"></div>
      <div className="sm:h-[30rem] h-80 sm:w-[45rem] w-80 rounded-lg backdrop-blur-md bg-opacity-30 shadow-lg flex flex-col justify-center items-center shadow-gray-400 text-center border">
        <div className="flex flex-col sm:gap-10 gap-6 justify-center items-center">
          <Image
            src="/logo-black.png"
            width={40}
            height={40}
            alt="webcafe africa logo"
            className="animate-spin"
          />
          <h1 className="md:text-5xl text-xl font-bold">webcafe africa</h1>
          <small className="">
            Web Design | Web Development | Brand Identity
          </small>
          <h5 className="uppercase text-sm">launching soon</h5>
        </div>

        <div className="flex gap-4 mt-10 absolute bottom-3 right-5">
          {socials.map((social) => (
            <a
              href={social.link}
              key={social.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="bg-white bg-opacity-10 rounded-full p-2 flex justify-center align-center
              hover:bg-opacity-30 transition-all duration-300 ease-in-out
              "
              >
                {social.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
