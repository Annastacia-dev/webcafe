import { IoCloseSharp } from 'react-icons/io5';
import Link from 'next/link';
import Logo from '../Logo';
import { navLinks } from '@/data/navigation';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const MobileMenu = ({ isOpen, toggle }: Props) =>
  isOpen ? (
    <div className="fixed inset-0 z-40 flex flex-col bg-soft px-6 py-4 md:hidden">
      <div className="flex items-center justify-between">
        <Logo />
        <button
          type="button"
          aria-label="Close menu"
          onClick={toggle}
          className="flex h-11 w-11 items-center justify-center rounded-full text-2xl text-move"
        >
          <IoCloseSharp />
        </button>
      </div>
      <ul className="mt-16 flex flex-col gap-8 font-display text-4xl font-extrabold text-move">
        {[{ label: 'Home', href: '/' }, ...navLinks].map((link) => (
          <li key={link.href}>
            <Link href={link.href} onClick={toggle}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/#inquiry" onClick={toggle} className="btn-primary mt-auto">
        Start a project
      </Link>
    </div>
  ) : null;

export default MobileMenu;
