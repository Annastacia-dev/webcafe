import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

const tints = ['bg-lime', 'bg-ice', 'bg-mint'];

interface Props {
  // Show the section heading and "see all" link (home page) or just the grid.
  compact?: boolean;
}

export const ProjectGrid = () => (
  // On phones each project reads text-first, with a rule between projects;
  // from sm up they sit side by side, image first.
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
    {projects.map((project, index) => (
      <a
        key={project.id}
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col gap-5 text-move max-sm:border-t-2 max-sm:border-move/15 max-sm:pt-8 max-sm:first:border-t-0 max-sm:first:pt-0 sm:gap-4"
      >
        <div
          className={`${tints[index % tints.length]} order-2 overflow-hidden rounded-3xl p-3 sm:order-1`}
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={project.cover_image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1152px) 360px, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>
        <div className="order-1 flex flex-col gap-2 sm:order-2">
          <p className="eyebrow">{project.category}</p>
          <h3 className="font-display text-2xl font-extrabold">
            {project.title}
          </h3>
          <p className="leading-relaxed text-muted sm:line-clamp-2">
            {project.description}
          </p>
          <span className="font-semibold underline decoration-lime decoration-4 underline-offset-4">
            View project ↗
          </span>
        </div>
      </a>
    ))}
  </div>
);

const Work = ({ compact = false }: Props) => (
  <section
    id="work"
    className="mx-auto flex max-w-6xl scroll-mt-24 flex-col gap-10 px-6 pb-24"
  >
    {!compact && (
      <div className="flex flex-wrap items-end justify-between gap-5">
        <h2 className="font-display text-[clamp(40px,5vw,64px)] font-extrabold leading-none tracking-[-0.03em] text-move">
          Fresh from the studio
        </h2>
        <Link href="/portfolio" className="btn-outline">
          See all work
        </Link>
      </div>
    )}
    <ProjectGrid />
  </section>
);

export default Work;
