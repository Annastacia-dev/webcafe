import { IoCloseSharp } from 'react-icons/io5';
import Link from 'next/link';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const MobileMenu = ({ isOpen, toggle }: Props) => {
  return (
    isOpen && (
      <ul className="flex-col flex items-center fixed inset-0 left-1/4 bg-white gap-8 justify-center p-10text-white font-normal uppercase text-sm">
        <div className="absolute right-16 top-10">
          <IoCloseSharp className="text-xl" onClick={toggle} />
        </div>
        <li>
          <Link href="#about" className="hover:underline" onClick={toggle}>
            About
          </Link>
        </li>
        <li>
          <Link href="#skills" className="hover:underline" onClick={toggle}>
            Skills
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="hover:underline" onClick={toggle}>
            Portfolio
          </Link>
        </li>
      </ul>
    )
  );
};

export default MobileMenu;
