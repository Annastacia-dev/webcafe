import ServiceIcon, { Service } from './ServiceIcon';

const services: {
  id: Service;
  title: string;
  summary: string;
  items: string[];
  bg: string;
  glyph: string;
}[] = [
  {
    id: 'websites',
    title: 'Websites',
    summary:
      'Fast, beautiful sites that turn visitors into clients and customers.',
    items: [
      'Personal portfolios & branding',
      'Business websites',
      'E-commerce stores',
    ],
    bg: 'bg-lime',
    glyph: '#B4F05A',
  },
  {
    id: 'apps',
    title: 'Web apps',
    summary: 'Custom software shaped around how your business actually works.',
    items: [
      'CRM & ERP systems',
      'Point of sale',
      'Events & ticketing',
      'Productivity tools',
    ],
    bg: 'bg-ice',
    glyph: '#BFEDEB',
  },
  {
    id: 'integrations',
    title: 'Integrations',
    summary:
      'Connect the tools you already use so nobody copies and pastes again.',
    items: [
      'Payment gateways',
      'Tax management & e-invoicing',
      'Third-party APIs',
    ],
    bg: 'bg-mint',
    glyph: '#D4F2D2',
  },
];

const About = () => (
  <section
    id="services"
    className="mx-auto flex max-w-6xl scroll-mt-24 flex-col gap-10 px-6 py-24"
  >
    <div className="flex flex-wrap items-end justify-between gap-5">
      <h2 className="font-display text-[clamp(40px,5vw,64px)] font-extrabold leading-none tracking-[-0.03em] text-move">
        Three things.
        <br />
        Done properly.
      </h2>
      <p className="max-w-md text-lg leading-relaxed text-muted">
        From a one-page portfolio to the system your whole team runs on, every
        project gets the same senior care.
      </p>
    </div>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
      {services.map((service) => (
        <article
          key={service.id}
          className={`${service.bg} flex flex-col gap-5 rounded-[28px] p-8 text-move`}
        >
          <ServiceIcon service={service.id} color={service.glyph} />
          <h3 className="font-display text-4xl font-extrabold tracking-tight">
            {service.title}
          </h3>
          <p className="text-[17px] leading-relaxed">{service.summary}</p>
          <ul className="flex flex-col gap-2.5 font-medium">
            {service.items.map((item) => (
              <li key={item} className="border-t border-move/25 pt-2.5">
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default About;
