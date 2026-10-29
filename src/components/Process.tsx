const steps = [
  {
    title: 'Inquiry',
    text: 'Fill out the inquiry form. We review your needs and, if we are a good fit, book a consultation to go through the details.',
  },
  {
    title: 'Proposal',
    text: 'You get a proposal with scope, timeline and cost. A 50% deposit secures your spot in our production schedule.',
  },
  {
    title: 'Production',
    text: 'We build to the agreed timeline, keep you updated, and give you chances to give feedback and request revisions.',
  },
  {
    title: 'Delivery',
    text: 'We hand over the finished product, plus any training and support you need to run it with confidence.',
  },
];

const Process = () => (
  <section
    id="process"
    className="mx-auto flex max-w-6xl scroll-mt-24 flex-col gap-10 px-6 py-24"
  >
    <h2 className="font-display text-[clamp(40px,5vw,64px)] font-extrabold leading-none tracking-[-0.03em] text-move">
      How we work
    </h2>
    <ol className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
      {steps.map((step, index) => {
        const last = index === steps.length - 1;
        return (
          <li
            key={step.title}
            className={`flex flex-col gap-3 rounded-3xl p-7 ${last ? 'bg-move text-soft' : 'bg-white text-move'}`}
          >
            <span
              className={`font-mono text-[15px] ${last ? 'text-lime' : 'text-leaf'}`}
            >
              0{index + 1}
            </span>
            <h3 className="font-display text-[28px] font-extrabold">
              {step.title}
            </h3>
            <p
              className={`leading-relaxed ${last ? 'text-haze' : 'text-muted'}`}
            >
              {step.text}
            </p>
          </li>
        );
      })}
    </ol>
  </section>
);

export default Process;
