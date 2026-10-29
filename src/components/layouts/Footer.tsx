import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { MdEmail, MdHeadphones } from 'react-icons/md';
import Link from 'next/link';
import Logo from '../Logo';

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
    <footer className="bg-move text-haze">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-12">
        <div className="flex flex-wrap items-center gap-4">
          <Logo dark size={36} />
          <span>· Built to move.</span>
        </div>
        <ul className="flex items-center gap-2 text-xl">
          {socials.map((social) => (
            <li key={social.name}>
              <Link
                aria-label={social.name}
                href={social.link}
                className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-move-light hover:text-lime"
                target="_blank"
                rel="noopener"
              >
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-move-light px-6 py-5 text-center text-sm">
        &copy; {new Date().getFullYear()} webcafe.africa
      </p>
    </footer>
  );
};

export default Footer;
