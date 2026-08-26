import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  /** Zero-padded sequence marker, e.g. "01". Encodes reading order. */
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/** Consistent section header: mono eyebrow + display title + optional lede. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start",
        className
      )}
    >
      <Reveal>
        <span className="eyebrow">
          {index ? `${index} · ` : ""}
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-balance text-[clamp(1.9rem,5vw,3.15rem)] font-semibold leading-[1.05] tracking-tight",
            centered && "mx-auto"
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-[0.975rem] leading-relaxed text-muted",
              centered && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
