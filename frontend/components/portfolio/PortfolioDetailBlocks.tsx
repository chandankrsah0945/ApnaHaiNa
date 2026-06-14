import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

type SectionCardProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
  titleClassName?: string;
};

type BulletListCardProps = {
  items: string[];
  tone?: "cyan" | "rose";
  title: string;
};

type StatCardProps = {
  label: string;
  value: string;
};

type GalleryImage = {
  alt: string;
  src: string;
  title: string;
};

type GalleryGridProps = {
  images: GalleryImage[];
};

const baseSectionClassName =
  "rounded-[2rem] border border-slate-800/80 bg-slate-950/70 p-7 shadow-[0_20px_50px_rgba(2,6,23,0.26)] backdrop-blur-xl sm:p-8";

export function PortfolioSectionCard({
  children,
  className = "",
  title,
  titleClassName = "text-cyan-300",
}: SectionCardProps) {
  return (
    <section className={`${baseSectionClassName} ${className}`.trim()}>
      <h2
        className={`text-3xl font-bold tracking-[-0.03em] ${titleClassName}`}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export function PortfolioBulletListCard({
  items,
  tone = "cyan",
  title,
}: BulletListCardProps) {
  const iconClassName =
    tone === "rose" ? "mt-1 text-rose-300" : "mt-1 text-cyan-300";
  const titleClassName = tone === "rose" ? "text-rose-300" : "text-cyan-300";

  return (
    <PortfolioSectionCard title={title} titleClassName={titleClassName}>
      <ul className="mt-6 space-y-4 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <FaCheckCircle aria-hidden="true" className={iconClassName} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </PortfolioSectionCard>
  );
}

export function PortfolioStatCard({ label, value }: StatCardProps) {
  return (
    <article className="group rounded-[2rem] border border-slate-800/80 bg-slate-950/70 p-6 shadow-[0_20px_50px_rgba(2,6,23,0.24)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:shadow-[0_24px_60px_rgba(8,145,178,0.18)] sm:p-7">
      <div className="mb-4 h-px w-full bg-gradient-to-r from-cyan-400/80 via-cyan-300/20 to-transparent" />
      <h3 className="text-4xl font-black tracking-[-0.04em] text-cyan-300 sm:text-5xl">
        {value}
      </h3>
      <p className="mt-3 text-sm text-slate-400 sm:text-base">{label}</p>
    </article>
  );
}

export function PortfolioGalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {images.map((image) => (
        <article
          key={image.src}
          className="group overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-950/70 shadow-[0_20px_50px_rgba(2,6,23,0.24)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:shadow-[0_24px_60px_rgba(8,145,178,0.18)]"
        >
          <div className="relative overflow-hidden border-b border-white/6">
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={720}
              className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          </div>

          <div className="p-5 sm:p-6">
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-white">
              {image.title}
            </h3>
          </div>
        </article>
      ))}
    </div>
  );
}
