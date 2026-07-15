type ProfilePictureProps = {
  className?: string;
  priority?: boolean;
  sizes: string;
};

const alt = "Nihal Anand, Founder and Recruitment Consultant";

export function ProfilePicture({
  className,
  priority = false,
  sizes,
}: ProfilePictureProps) {
  const classes = ["profile-picture", className].filter(Boolean).join(" ");

  return (
    <picture className={classes}>
      <source
        type="image/webp"
        srcSet="/images/nihal-anand-profile-480.webp 480w, /images/nihal-anand-profile-720.webp 720w, /images/nihal-anand-profile-960.webp 960w"
        sizes={sizes}
      />
      <img
        src="/images/nihal-anand-profile.jpg"
        alt={alt}
        width="1122"
        height="1402"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
