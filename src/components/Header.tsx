import Link from 'next/link';

const steps = [
  { label: 'discovery', status: 'done' },
  { label: 'design', status: 'done' },
  { label: 'build', status: 'done' },
  { label: 'payments', status: 'connected' },
];

const Header = () => (
  <section className="bg-soft text-move">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6 pb-24 pt-16 md:pt-20">
      <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-7">
        <p className="eyebrow">
          Software studio · Websites · Web apps · Integrations
        </p>
        <h1 className="font-display text-[clamp(64px,10vw,148px)] font-extrabold leading-[0.88] tracking-[-0.04em]">
          Built
          <br />
          <span className="highlight mt-[0.1em]">to move.</span>
        </h1>
        <p className="max-w-xl text-xl leading-relaxed text-muted">
          We design and build websites that sell, web apps that run your
          business, and integrations that keep money and data flowing.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/#inquiry" className="btn-primary">
            Get a quote
          </Link>
          <Link href="/#services" className="btn-outline">
            Explore services
          </Link>
        </div>
      </div>

      <div
        className="min-w-0 flex-[1_1_340px] overflow-hidden rounded-3xl border border-move-light bg-[#0A2A1B]"
        aria-hidden="true"
      >
        <div className="flex gap-2 border-b border-move-light px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-orange" />
          <span className="h-3 w-3 rounded-full bg-ice" />
          <span className="h-3 w-3 rounded-full bg-lime" />
        </div>
        <div className="px-6 pb-7 pt-6 font-mono text-[15px] leading-8 text-haze">
          <p>
            <span className="text-lime">&gt;_</span> webcafe brew --project
            yours
          </p>
          {steps.map((step) => (
            <p key={step.label} className="flex gap-2">
              <span className="text-ice">·</span>
              <span className="flex-1 overflow-hidden whitespace-nowrap after:content-['.................................']">
                {step.label}{' '}
              </span>
              <span className="text-lime">{step.status}</span>
            </p>
          ))}
          <p>
            <span className="text-orange">→</span>{' '}
            <span className="text-soft">live. ready to move.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
