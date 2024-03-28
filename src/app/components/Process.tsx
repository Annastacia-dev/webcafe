import React from 'react';

const Process = () => {
  return (
    <div
      className="gap-4 g-cover bg-fixed bg-center bg-no-repeat relative text-white"
      style={{
        backgroundImage: `url(bg.jpg)`,
      }}
    >
      <div className="bg-black/80 grid sm:grid-cols-3 grid-cols-1 px-10 py-20 gap-10">
        <div className="col-span-2">
          <a href="#inquiry" className="text-lg font-bold">contact us.</a>
          <p className="text-sm leading-7 sm:w-3/4">
            Fill out our inquiry form to get started on your project. We will
            evaluate your needs and if we are a good fit, we will schedule a
            consultation to discuss your project in more details.
          </p>
          <br />
          <h5 className="text-lg font-bold">payment.</h5>
          <p className="text-sm leading-7 sm:w-3/4">
            Once we have agreed on the scope of work, we will send you a proposal
            outlining the project details, timeline, and cost. A 50% deposit is
            required to secure your spot in our production schedule.
          </p>
          <br />
          <h5 className="text-lg font-bold">production.</h5>
          <p className="text-sm leading-7 sm:w-3/4">
            Our team will work on your project according to the agreed timeline.
            We will keep you updated on our progress and provide you with
            opportunities to provide feedback and make revisions.
          </p>
          <br />
          <h5 className="text-lg font-bold">delivery.</h5>
          <p className="text-sm leading-7 sm:w-3/4">
            Once the project is complete, we will deliver the final product to you
            and provide you with any necessary training or support to ensure that
            you are satisfied with the work.
          </p>
        </div>
        <div className="col-span-1">
          <hr className="border-4 border-white w-40 my-4" />
          <h1 className="text-3xl font-bold">our process.</h1>
        </div>
      </div>
    </div>
  );
};

export default Process;
