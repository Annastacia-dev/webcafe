interface MarkProps {
  size?: number;
  circle?: string;
  cup?: string;
  className?: string;
}

// The cup-prompt icon: a cup holding a ">_" terminal prompt, set in a circle.
export const LogoMark = ({
  size = 40,
  circle = '#B4F05A',
  cup = '#0F3A26',
  className,
}: MarkProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    aria-hidden="true"
    className={className}
  >
    <circle cx="32" cy="32" r="32" fill={circle} />
    <g transform="translate(11.5 13) scale(0.62)">
      <path
        d="M24 17c-3-3 3-5 0-9M33 17c-3-3 3-5 0-9"
        fill="none"
        stroke={cup}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M10 22h36v15a16 16 0 0 1-16 16h-4a16 16 0 0 1-16-16z"
        fill={cup}
      />
      <path
        d="M46 27h3a7 7 0 0 1 0 14h-3"
        fill="none"
        stroke={cup}
        strokeWidth="5"
      />
      <path
        d="M18 31l6 5-6 5M28 43h9"
        fill="none"
        stroke={circle}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

interface LogoProps {
  dark?: boolean;
  size?: number;
}

const Logo = ({ dark = false, size = 40 }: LogoProps) => (
  <span className="flex items-center gap-3">
    <LogoMark size={size} />
    <span
      className={`font-display text-2xl font-extrabold tracking-tight ${dark ? 'text-soft' : 'text-move'}`}
    >
      webcafe
      <span className={dark ? 'text-lime' : 'text-leaf'}>.africa</span>
    </span>
  </span>
);

export default Logo;
