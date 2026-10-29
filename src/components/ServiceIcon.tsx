export type Service = 'websites' | 'apps' | 'integrations';

interface Props {
  service: Service;
  size?: number;
  // Glyph colour; the circle is always Move Green.
  color: string;
}

const ServiceIcon = ({ service, size = 64, color }: Props) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="32" fill="#0F3A26" />
    {service === 'websites' && (
      <>
        <rect
          x="15"
          y="18"
          width="34"
          height="28"
          rx="5"
          fill="none"
          stroke={color}
          strokeWidth="5"
        />
        <path d="M15 27H49" stroke={color} strokeWidth="5" />
      </>
    )}
    {service === 'apps' && (
      <>
        <rect x="17" y="17" width="13" height="13" rx="3" fill={color} />
        <rect x="34" y="17" width="13" height="13" rx="3" fill={color} />
        <rect x="17" y="34" width="13" height="13" rx="3" fill={color} />
        <rect x="34" y="34" width="13" height="13" rx="6.5" fill="#FF7A45" />
      </>
    )}
    {service === 'integrations' && (
      <path
        d="M17 26H45L38 19M47 38H19L26 45"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);

export default ServiceIcon;
