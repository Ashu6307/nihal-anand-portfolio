import Link from "next/link";
import { profile } from "@/data/profile";

interface BrandProps {
  compact?: boolean;
}

export function Brand({ compact = false }: BrandProps) {
  return (
    <Link className="brand" href="/" aria-label="Nihal Anand — Home">
      <span className="brand__mark" aria-hidden="true">
        {profile.shortMark}
      </span>
      {!compact && (
        <span className="brand__copy">
          <strong>{profile.name}</strong>
          <small>Hiring consultant</small>
        </span>
      )}
    </Link>
  );
}
