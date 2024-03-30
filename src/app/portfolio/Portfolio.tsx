import Link from 'next/link';
import React from 'react';
import { projects } from '@/data/projects';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <div className="px-8 py-10 bg-gray-50">
      <Link
        aria-label="home"
        href="/"
        className="text-gray-500 text-sm hover:underline"
      >
        ← Back
      </Link>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5  gap-4 min-h-screen">
        <div className="col-span-1">
          <hr className="border-4 border-black w-40 my-4" />
          <h1 className="text-3xl font-bold">
            our <br /> work.
          </h1>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Link
              href={`${project.link}`}
              key={project.id}
              className="project flex relative text-white hover:scale-105"
            >
              <img
                src={project.cover_image}
                alt={project.title}
                className="w-full h-56 object-cover object-center"
              />
              <div className="project-details absolute p-4 flex flex-col  h-56 md:bg-black/80 bg-transparent transition-all duration-300 opacity-0 hover:opacity-100">
                <h1 className="font-bold text-xl mb-3 md:block hidden">{project.title}</h1>
                <p className="text-gray-200 text-sm md:block hidden">
                  {project.description.slice(0, 70)}...
                </p>
                <div className="justify-between items-center mt-4 md:flex hidden">
                  <Link
                    href={`${project.link}`}
                    className="hover:underline text-sm bg-black text-white px-4 py-2"
                  >
                    View Project
                  </Link>
                </div>
              </div>

              <div className="p-4 absolute  md:hidden flex flex-col justify-center h-56 bg-black/60">
                <h1 className="font-bold text-xl mb-3">{project.title}</h1>
                <Link
                  href={`${project.link}`}
                  className="hover:underline text-sm bg-black text-white px-4 py-2"
                >
                  View Project
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
