"use client";

import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    className,
    children,
  } = props;

  const classes = cn(
    "btn",
    `btn-${size}`,
    `btn-${variant}`,
    className
  );

  const content = (
    <>
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const {
      href,
      external,
      // strip non-anchor props
      variant: _v,
      size: _s,
      leftIcon: _l,
      rightIcon: _r,
      className: _c,
      children: _ch,
      ...rest
    } = props;

    const externalAttrs = external
      ? { target: "_blank", rel: "noreferrer noopener" }
      : {};

    return (
      <a href={href} className={classes} {...externalAttrs} {...rest}>
        {content}
      </a>
    );
  }

  const {
    variant: _v,
    size: _s,
    leftIcon: _l,
    rightIcon: _r,
    className: _c,
    children: _ch,
    ...rest
  } = props;

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
