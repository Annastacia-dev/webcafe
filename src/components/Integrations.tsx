const chips = [
  { label: 'Mobile money', style: 'bg-lime' },
  { label: 'Card payments', style: 'border-2 border-move' },
  { label: 'Bank transfers', style: 'border-2 border-move' },
  { label: 'Tax e-invoicing', style: 'bg-ice' },
  { label: 'Accounting software', style: 'border-2 border-move' },
  { label: 'SMS & email', style: 'border-2 border-move' },
  { label: 'Your API', style: 'bg-orange' },
];

const Integrations = () => (
  <section className="bg-white text-move">
    <div className="mx-auto flex max-w-6xl flex-col gap-7 px-6 py-20">
      <h2 className="font-display text-[clamp(32px,4vw,48px)] font-extrabold tracking-[-0.03em]">
        Everything <span className="highlight">connects.</span>
      </h2>
      <ul className="flex flex-wrap gap-3">
        {chips.map((chip) => (
          <li
            key={chip.label}
            className={`${chip.style} rounded-full px-6 py-3.5 font-semibold`}
          >
            {chip.label}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Integrations;
