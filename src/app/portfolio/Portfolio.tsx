import React from 'react';
import { ProjectGrid } from '@/components/Work';

const Portfolio = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-16">
      <div className="flex flex-col gap-4">
        <p className="eyebrow">Portfolio</p>
        <h1 className="font-display text-[clamp(56px,8vw,112px)] font-extrabold leading-[0.9] tracking-[-0.04em] text-move">
          Our <span className="highlight">work.</span>
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Websites and web apps we’ve designed and built for our clients.
        </p>
      </div>
      <ProjectGrid />
    </section>
  );
};

export default Portfolio;
