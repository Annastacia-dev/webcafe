import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { MdEmail, MdHeadphones } from 'react-icons/md';
import Link from 'next/link';

const socials = [
  {
    name: 'facebook',
    icon: <FaFacebookSquare />,
    link: 'https://www.facebook.com/webcafeafrica',
  },
  {
    name: 'twitter',
    icon: <FaXTwitter />,
    link: 'https://www.twitter.com/webcafeafrica',
  },
  {
    name: 'linkedin',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/company/webcafe-africa',
  },
  { name: 'email', icon: <MdEmail />, link: 'mailto:info@webcafe.africa' },
  { name: 'phone', icon: <MdHeadphones />, link: 'tel:+254768372439' },
];

const Footer = () => {
  return (
    <div className="bg-black text-white p-10 flex flex-col gap-3">
      <ul className="gap-3 sm:text-xl text-lg flex items-center">
        <li className="border border-white w-full" aria-label='divider' />
        {socials.map((social, index) => (
          <li key={index}>
            <Link
              aria-label={social.name}
              href={social.link}
              className="hover:underline"
              target="blank"
              rel="noopener"
            >
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-center mt-4 capitalize sm:text-base text-sm">
        &copy; {new Date().getFullYear()} webcafe africa
      </p>
    </div>
  );
};

export default Footer;
