import { socials } from "@/data/site";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
  /** "bordered" = boxed icon buttons, "plain" = inline muted icons. */
  variant?: "bordered" | "plain";
};

export function SocialLinks({
  className,
  iconSize = 18,
  variant = "bordered",
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          target={s.icon === "mail" ? undefined : "_blank"}
          rel="noreferrer noopener"
          className={cn(
            "transition-colors",
            variant === "bordered"
              ? "flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted hover:border-accent/40 hover:text-foreground"
              : "text-muted hover:text-foreground"
          )}
        >
          <Icon name={s.icon} size={iconSize} />
        </a>
      ))}
    </div>
  );
}
