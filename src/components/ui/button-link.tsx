import Link from "next/link";
import { Icon } from "@/components/ui/icon";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  const classes = `button button--${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </>
  );

  if (external) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
