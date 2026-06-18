type BrandMarkProps = {
  className?: string;
  iconClassName?: string;
  showWordmark?: boolean;
  textClassName?: string;
};

function BrandMarkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="8" width="48" height="48" rx="16" fill="#020617" />
      <rect
        x="8.75"
        y="8.75"
        width="46.5"
        height="46.5"
        rx="15.25"
        stroke="#38BDF8"
        strokeOpacity="0.6"
        strokeWidth="1.5"
      />
      <path
        d="M20 42L30.75 18L41.5 42"
        stroke="#67E8F9"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 32H37.5"
        stroke="#67E8F9"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M43 22V42"
        stroke="#38BDF8"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M36 28H50"
        stroke="#38BDF8"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="49.5" cy="21.5" r="2.5" fill="#67E8F9" />
    </svg>
  );
}

export default function BrandMark({
  className = "",
  iconClassName = "h-11 w-11",
  showWordmark = true,
  textClassName = "text-xl font-semibold tracking-[-0.03em] text-white",
}: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`.trim()}>
      <span className="relative inline-flex shrink-0 items-center justify-center rounded-2xl bg-slate-950/80 shadow-[0_14px_32px_rgba(2,6,23,0.34)]">
        <BrandMarkIcon className={iconClassName} />
      </span>

      {showWordmark ? (
        <span className={textClassName}>
          Apna<span className="text-cyan-300">Hai</span>Na
        </span>
      ) : null}
    </span>
  );
}
