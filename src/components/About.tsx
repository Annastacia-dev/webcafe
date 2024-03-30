import React from 'react';

const About = () => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 px-10 py-20 bg-gray-50 gap-10">
      <div className="col-span-1">
        <hr className="border-4 border-gray-900 w-40 my-4" />
        <h1 className="text-3xl font-bold">
          what <br /> we do.
        </h1>
      </div>
      <div className="col-span-2">
        <p className="text-lg font-bold">branding.</p>
        <p className="text-sm leading-7 sm:w-3/4">
          We specialize in crafting compelling brand identities that resonate
          with your target audience. From logo design and brand guidelines to
          messaging strategies and brand storytelling, we ensure that every
          aspect of your brand reflects your values and vision.
        </p>
        <br />
        <p className="text-lg font-bold">web design.</p>
        <p className="text-sm leading-7 sm:w-3/4">
          Our team of experienced web designers creates visually stunning
          websites that are not only aesthetically pleasing but also highly
          functional. We use the latest design trends and technologies to ensure
          that your website stands out from the competition and delivers an
          exceptional user experience.
        </p>
        <br />
        <p className="text-lg font-bold">web development.</p>
        <p className="text-sm leading-7 sm:w-3/4">
          We offer custom web development services to help you build a unique
          online presence that reflects your brand and engages your audience.
          Whether you need a simple website or a complex web application, we
          have the expertise to bring your vision to life. Our team of
          developers uses the latest technologies and best practices to ensure
          that your website is secure, scalable, and easy to maintain.
        </p>
      </div>
    </div>
  );
};

export default About;
