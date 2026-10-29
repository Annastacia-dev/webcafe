import React from 'react';
import Link from 'next/link';
import { LogoMark } from '@/components/Logo';

const Error = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-soft px-6 text-center text-move">
      <LogoMark size={96} />
      <p className="eyebrow">&gt;_ error 404</p>
      <h1 className="font-display text-[clamp(48px,8vw,96px)] font-extrabold leading-none tracking-[-0.04em]">
        Page not <span className="highlight">found.</span>
      </h1>
      <p className="max-w-md text-lg text-muted">
        This page moved on without us. Let’s get you back.
      </p>
      <Link href="/" className="btn-primary">
        Back to home
      </Link>
    </main>
  );
};

export default Error;
