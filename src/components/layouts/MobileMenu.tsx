import { IoCloseSharp } from 'react-icons/io5';
import Link from 'next/link';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const MobileMenu = ({ isOpen, toggle }: Props) => {
  return (
    isOpen && (
      <ul className="flex-col flex items-center fixed inset-0 left-1/4 bg-black/95 gap-8 justify-center p-10text-white font-normal uppercase text-sm">
        <li className="absolute right-16 top-10 cursor-pointer">
          <IoCloseSharp className="text-xl cursor-pointer" onClick={toggle} />
        </li>
        <li>
          <Link aria-label="home" href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link
            aria-label="portfolio"
            href="/portfolio"
            className="hover:underline"
          >
            Portfolio
          </Link>
        </li>
      </ul>
    )
  );
};

export default MobileMenu;
