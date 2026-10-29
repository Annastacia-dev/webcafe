'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Logo from '../Logo';
import MobileMenu from './MobileMenu';
import { navLinks } from '@/data/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // The menu sits outside <header>: its backdrop-blur would otherwise become the
  // containing block for the menu's fixed positioning.
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-haze bg-soft/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/" aria-label="webcafe.africa home">
            <Logo />
          </Link>
          <ul className="hidden items-center gap-8 text-[15px] font-medium text-move md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-leaf">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#inquiry"
                className="btn-primary px-5 py-3 text-[15px]"
              >
                Start a project
              </Link>
            </li>
          </ul>
          <button
            type="button"
            aria-label="Open menu"
            onClick={toggle}
            className="flex h-11 w-11 items-center justify-center rounded-full text-2xl text-move md:hidden"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </nav>
      </header>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navbar;
