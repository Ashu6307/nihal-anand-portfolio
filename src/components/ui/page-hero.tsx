interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero section-grid" aria-labelledby="page-title">
      <div className="container page-hero__inner">
        <div className="page-hero__copy reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h1 id="page-title">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
