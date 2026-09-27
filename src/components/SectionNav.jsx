import { useEffect, useState } from 'react';

const sections = ['photos', 'amenities', 'reviews', 'location'];

export function SectionNav() {
  const [active, setActive] = useState('photos');
  const [heroGone, setHeroGone] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('photos');
    if (!hero) return undefined;

    const updateHeroState = () => {
      setHeroGone(hero.getBoundingClientRect().bottom <= 0);
    };

    updateHeroState();
    window.addEventListener('scroll', updateHeroState, { passive: true });
    window.addEventListener('resize', updateHeroState);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-25% 0px -65% 0px' },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', updateHeroState);
      window.removeEventListener('resize', updateHeroState);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`section-nav ${heroGone ? 'is-visible' : 'is-hidden'}`}>
      <div className="section-nav-inner">
        <div className="links">
          {sections.map((section) => (
            <button
              key={section}
              type="button"
              className={active === section ? 'active' : ''}
              onClick={() => scrollTo(section)}
            >
              {section[0].toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        <div className="nav-price">
          <div>
            <b>₹28,499 for 5 nights</b>
            <span>★ 4.95 · 19 reviews</span>
          </div>
          <button type="button">Reserve</button>
        </div>
      </div>
    </div>
  );
}
