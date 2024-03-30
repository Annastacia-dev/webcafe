import Link from 'next/link';
import React from 'react';

const Portfolio = () => {
  return (
    <div className="px-10 py-10 bg-gray-50">
      <Link
      aria-label='home'
      href="/" className="text-gray-500 text-sm hover:underline">
        ← Back
      </Link>
      <div className="grid grid-cols-1 py-5  gap-10 min-h-screen">
        <div className="col-span-1">
          <hr className="border-4 border-black w-40 my-4" />
          <h1 className="text-3xl font-bold">
            our <br /> work.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
