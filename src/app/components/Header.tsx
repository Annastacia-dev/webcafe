import { projects } from '../data/projects';
import { useState, useEffect } from 'react';

const Header = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => {
        if (current === projects.length - 1) {
          return 0;
        } else {
          return current + 1;
        }
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [projects.length, current]);

  const previousProject = () => {
    if (current === 0) {
      setCurrent(projects.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextProject = () => {
    if (current === projects.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const handleIndicator = (index: number) => {
    setCurrent(index);
  };

  return (
    <header
      className="text-white min-h-screen bg-cover bg-fixed bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${projects[current].cover_image})`,
      }}
    >
      <div className=" min-h-screen bg-gradient-to-r from-black/95 to-black/50">
        <div className="sm:pt-32 pt-40 sm:px-16 px-10 grid sm:grid-cols-2 grid-cols-1 items-center sm:gap-0 gap-8">
          <div className="">
            <h1 className=" text-5xl font-bold w-1/2 leading-[4rem]">
              {projects[current].title}
            </h1>
            <p className="sm:text-base text-sm mt-4 leading-7 sm:w-3/4">
              {projects[current].description}
            </p>
            <a
              href={projects[current].link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 border border-white text-white px-4 py-2 hover:bg-white hover:text-black"
            >
              Explore
            </a>
          </div>

          <div className="grid sm:grid-cols-2">
            {projects[current].images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={projects[current].title}
                className={`sm:h-60 w-full object-cover px-4 py-2 ${index === 0 || index === 1 ? 'sm:border-t-0 border' : 'border'} ${index === 2 || index === 3 ? 'border-b-0' : 'border-b-0'}`}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center sm:mt-4 mt-4 sm:pb-6 pb-4 gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full border-4 border-white transition-opacity duration-300 ease-in-out ${
                index === current
                  ? 'opacity-100 bg-white'
                  : 'opacity-50 hover:opacity-100 bg-transparent'
              }`}
              onClick={() => handleIndicator(index)}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
