import React from 'react';
import Link from 'next/link';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <video autoPlay muted className="w-80 h-full object-cover">
        <source src="/error.mp4" type="video/mp4" />
      </video>
      <Link
      aria-label='home'
      href="/" className="text-gray-500 text-sm">
        ← Back to home
      </Link>
    </div>
  );
};

export default Error;
