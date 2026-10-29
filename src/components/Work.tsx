import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

const tints = ['bg-lime', 'bg-ice', 'bg-mint'];

interface Props {
  // Show the section heading and "see all" link (home page) or just the grid.
  compact?: boolean;
}

export const ProjectGrid = () => (
  <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
    {projects.map((project, index) => (
      <a
        key={project.id}
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col gap-4 text-move"
      >
        <div
          className={`${tints[index % tints.length]} overflow-hidden rounded-3xl p-3`}
        >
          <div className="relative h-60 overflow-hidden rounded-2xl">
            <Image
              src={project.cover_image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1152px) 360px, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="eyebrow">{project.category}</p>
          <h3 className="font-display text-2xl font-extrabold">
            {project.title}
          </h3>
          <p className="line-clamp-2 leading-relaxed text-muted">
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
