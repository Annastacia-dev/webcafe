import { faqs } from '@/data/faq';

const Faq = () => (
  <section
    id="faq"
    className="mx-auto flex max-w-6xl scroll-mt-24 flex-wrap gap-10 px-6 pb-24"
  >
    <h2 className="min-w-0 flex-[1_1_280px] font-display text-[clamp(40px,5vw,64px)] font-extrabold leading-none tracking-[-0.03em] text-move">
      Questions,
      <br />
      <span className="highlight mt-[0.1em]">answered.</span>
    </h2>
    <div className="flex min-w-0 flex-[2_1_480px] flex-col">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group border-b-2 border-move/15 py-5 first:border-t-2"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-extrabold text-move [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime text-2xl leading-none transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  </section>
);

export default Faq;
