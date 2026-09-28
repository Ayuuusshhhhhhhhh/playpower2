import { useEffect, useRef, useState } from 'react';
import { SectionNav } from './components/SectionNav';
import { HeroGallery } from './components/HeroGallery';
import { BookingCard } from './components/BookingCard';
import { Amenities } from './components/Amenities';
import { AmenitiesModal } from './components/AmenitiesModal';
import { PhotoTour } from './components/PhotoTour';
import { Lightbox } from './components/Lightbox';
import { HostSection } from './components/HostSection';
import { Icon } from './components/Icon';
import { Navbar } from './components/Navbar';
import {
  listing,
  highlights,
  reviews,
  reviewChips,
  nearbyPages,
} from './data/listing';

function HostSummary() {
  return (
    <div className="host-summary">
      <div className="host-summary-avatar">
        <img src="/images/host.jpeg" alt="Mirashya Homes" />
      </div>

      <div>
        <b>Hosted by Mirashya Homes</b>
        <span>2 years hosting</span>
      </div>
    </div>
  );
}

function Highlights() {
  return (
    <section className="highlights">
      {highlights.map(([title, copy, icon]) => (
        <div className="highlight" key={title}>
          <div className="highlight-icon"><Icon name={icon} size={28} /></div>
          <div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function Calendar() {
  const october = [
    '', '', '', '', 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31,
  ];
  const november = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <section className="calendar-wrap content-section">
      <h2>5 nights in Candolim</h2>
      <p className="subtle">18 Oct 2026 - 23 Oct 2026</p>

      <div className="cal-months">
        {[['October 2026', october], ['November 2026', november]].map(
          ([month, days], monthIndex) => (
            <div className="month" key={month}>
              <div className="month-title">
                <button type="button" aria-label="Previous month">
                  <Icon name="left" />
                </button>
                <b>{month}</b>
                <button type="button" aria-label="Next month">
                  <Icon name="right" />
                </button>
              </div>

              <div className="week">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                  <b key={`${day}-${index}`}>{day}</b>
                ))}
              </div>

              <div className="days">
                {days.map((day, index) => {
                  if (day === '') {
                    return <span key={`empty-${index}`} />;
                  }

                  const selected =
                    monthIndex === 0 && (day === 18 || day === 23);
                  const inRange =
                    monthIndex === 0 && day > 18 && day < 23;
                  const muted = monthIndex === 1 && ((day >= 18 && day <= 24) || day === 29 || day === 30);

                  return (
                    <span
                      key={`${month}-${day}`}
                      className={
                        selected
                          ? 'selected'
                          : inRange
                            ? 'range'
                            : muted
                              ? 'muted-day'
                              : ''
                      }
                    >
                      {day}
                    </span>
                  );
                })}
              </div>
            </div>
          ),
        )}
      </div>

      <div className="calendar-bottom">
        <button type="button" aria-label="Calendar">
          <Icon name="keyboard" size={22} />
        </button>
        <u>Clear dates</u>
      </div>
    </section>
  );
}

function Laurel() {
  return (
    <svg
      className="laurel-svg"
      viewBox="0 0 90 120"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <path d="M66 112C42 93 33 65 46 20" />
        <path d="M46 95c-12-1-20-6-25-15 10-2 19 2 25 10" />
        <path d="M40 76c-11-2-18-8-22-17 10 0 18 5 23 13" />
        <path d="M37 57c-9-3-15-9-18-17 9 1 15 6 19 13" />
        <path d="M39 40c-7-4-11-10-12-17 8 2 12 6 14 12" />
        <path d="M43 25c-5-4-7-9-6-14 6 2 9 6 10 11" />
      </g>
    </svg>
  );
}

function RatingMetricIcon({ name }) {
  return (
    <span className="rating-metric-icon">
      <Icon name={name} size={36} />
    </span>
  );
}

function RatingSection() {
  const metrics = [
    ['Cleanliness', '5.0', 'cleanliness'],
    ['Accuracy', '5.0', 'accuracy'],
    ['Check-in', '5.0', 'key'],
    ['Communication', '5.0', 'chat'],
    ['Location', '4.8', 'map'],
    ['Value', '4.8', 'tag'],
  ];

  return (
    <section id="reviews" className="content-section rating-section">
      <div className="rating-hero">
        <div className="laurel-wrap">
          <Laurel />
        </div>
        <b>4.95</b>
        <div className="laurel-wrap right">
          <Laurel />
        </div>

        <div className="rating-caption">
          <h3>Guest favourite</h3>
          <p>
            This home is a guest favourite based on ratings, reviews and
            <br />
            reliability
          </p>
          <u>How reviews work</u>
        </div>
      </div>

      <div className="rating-breakdown">
        <div className="overall">
          <h3>Overall rating</h3>
          {[5, 4, 3, 2, 1].map((number, index) => (
            <div className="bar-row" key={number}>
              <span>{number}</span>
              <div>
                <i
                  style={{
                    width:
                      index === 0 ? '94%' : index === 1 ? '5%' : '0%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {metrics.map(([name, value, icon]) => (
          <div className="rating-metric" key={name}>
            <h3>{name}</h3>
            <b>{value}</b>
            <RatingMetricIcon name={icon} />
          </div>
        ))}
      </div>

      <div className="review-chips">
        {reviewChips.map(([icon, count, label]) => (
          <button type="button" key={count}>
            <Icon name={icon} size={18} />
            <b>{count}</b> {label}
          </button>
        ))}
      </div>

      <div className="review-cards">
        {reviews.map((review) => (
          <article key={review.name}>
            <div className="review-head">
              {review.image ? (
                <img src={review.image} alt="" />
              ) : (
                <span className="review-avatar">{review.avatar}</span>
              )}
              <div>
                <b>{review.name}</b>
                <small>{review.time}</small>
              </div>
            </div>

            <div className="review-meta">★★★★★ · {review.when}</div>
            <p>{review.text}</p>

            {review.expandable && (
              <button type="button" className="review-show-more">
                <u>Show more</u>
              </button>
            )}
          </article>
        ))}
      </div>

      <button type="button" className="show-reviews-btn">
        Show all 19 reviews
        <Icon name="right" size={17} />
      </button>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="content-section location">
      <h2>Where you'll be</h2>
      <p className="location-name">Candolim, Goa, India</p>

      <div className="map">
        <button type="button" className="map-search" aria-label="Search map">
          <Icon name="search" size={21} />
        </button>
        <div className="map-zoom">
          <button type="button">＋</button>
          <button type="button">−</button>
        </div>
        <div className="map-dot left-dot" />
        <div className="map-dot right-dot" />
        <div className="map-marker"><Icon name="home" size={28} /></div>
      </div>

      <p>Exact location will be provided after booking.</p>

      <div className="neighborhood">
        <h3>Neighbourhood highlights</h3>
        <p>
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay
          with easy access to beaches, cafés, and popular attractions.
        </p>
        <button type="button">
          <u>Show more</u>
          <Icon name="right" size={18} />
        </button>
      </div>
    </section>
  );
}

function Things() {
  const columns = [
    {
      icon: 'calendar',
      title: 'Cancellation policy',
      paragraphs: [
        'Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.',
        'Review this host’s full policy for details.',
      ],
    },
    {
      icon: 'key',
      title: 'House rules',
      paragraphs: [
        'Check-in after 2:00 pm',
        'Checkout before 11:00 am',
        '3 guests maximum',
      ],
    },
    {
      icon: 'shield',
      title: 'Safety & property',
      paragraphs: [
        'Carbon monoxide alarm not reported',
        'Smoke alarm not reported',
        'Exterior security cameras on property',
      ],
    },
  ];

  return (
    <section className="content-section things-section">
      <h2>Things to know</h2>
      <div className="things-grid">
        {columns.map((column) => (
          <div key={column.title}>
            <div className="things-icon"><Icon name={column.icon} size={24} /></div>
            <h3>{column.title}</h3>
            {column.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <u>Learn more</u>
          </div>
        ))}
      </div>
    </section>
  );
}

function Nearby() {
  const [page, setPage] = useState(0);
  const allCards = [...nearbyPages[0], ...nearbyPages[1]];
  const cardStep = 5;
  const pageWidth = 266;

  return (
    <section className="content-section nearby-section">
      <div className="nearby-head">
        <h2>More stays nearby</h2>
        <div className="nearby-controls">
          <span>{page + 1} / 2</span>
          <button
            type="button"
            aria-label="Previous stays"
            disabled={page === 0}
            onClick={() => setPage(0)}
          >
            <Icon name="left" />
          </button>
          <button
            type="button"
            aria-label="Next stays"
            disabled={page === 1}
            onClick={() => setPage(1)}
          >
            <Icon name="right" />
          </button>
        </div>
      </div>

      <div className="nearby-viewport">
        <div
          className="nearby-track"
          style={{
            transform: `translateX(-${page * cardStep * pageWidth}px)`,
          }}
        >
          {allCards.map(([title, price, rating, image], cardIndex) => (
            <article key={cardIndex}>
              <img src={image} alt="" />
              <div className="nearby-row">
                <h3>{title}</h3>
                <span className="nearby-rating">★ {rating}</span>
              </div>
              <p><b>{price}</b> for 5 nights</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DescriptionSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="content-section description">
      <div className="translation">
        <span>Some info has been automatically translated.</span>
        <button type="button" className="inline-link">
          <u>Show original</u>
        </button>
      </div>

      <div
        className={`description-body ${expanded ? 'expanded' : 'collapsed'}`}
      >
        <p>
          🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨
          Stay in this cozy 1BHK in the heart of Candolim, featuring a private
          jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and
          stylish interiors. Just minutes from Candolim Beach 🏖️, popular
          cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking
          romance, relaxation, and a touch of luxury in North Goa. 💗🌴
        </p>
      </div>

      <button
        type="button"
        className="description-toggle"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
      >
        <u>{expanded ? 'Show less' : 'Show more'}</u>
        <Icon name="right" size={18} />
      </button>
    </section>
  );
}

export default function App() {
  const [view, setView] = useState('listing');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saveToast, setSaveToast] = useState('');
  const toastTimer = useRef(null);

  const tourPhotos = listing.rooms.flatMap(([, , images]) => images);
  const allPhotos = [
    ...tourPhotos,
    ...Array.from(
      { length: Math.max(0, 43 - tourPhotos.length) },
      (_, photoIndex) => listing.images[photoIndex % listing.images.length],
    ),
  ];

  const openLightbox = (photo) => {
    const photoIndex =
      typeof photo === 'number' ? photo : allPhotos.indexOf(photo);
    setIndex(photoIndex >= 0 ? photoIndex : 0);
    setLightboxOpen(true);
  };

  const handleSave = () => {
    setSaved((current) => {
      const next = !current;
      setSaveToast(next ? 'Saved to wishlist' : 'Removed from wishlist');
      window.clearTimeout(toastTimer.current);
      toastTimer.current = window.setTimeout(() => setSaveToast(''), 2600);
      return next;
    });
  };

  useEffect(() => {
    return () => window.clearTimeout(toastTimer.current);
  }, []);

  if (view === 'tour') {
    return (
      <>
        <PhotoTour
          rooms={listing.rooms}
          onBack={() => setView('listing')}
          onOpen={openLightbox}
          onSave={handleSave}
          saved={saved}
        />

        {saveToast && (
          <div className="save-toast" aria-live="polite">
            {saveToast}
          </div>
        )}

        {lightboxOpen && (
          <Lightbox
            images={allPhotos}
            index={index}
            setIndex={setIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </>
    );
  }

  return (
    <>
      <Navbar />
      <HeroGallery
        images={listing.images}
        onTour={() => setView('tour')}
        onLightbox={openLightbox}
        onSave={handleSave}
        saved={saved}
      />
      <SectionNav />

      <div className="listing-shell">
        <div className="top-layout">
          <main className="top-main">
            <section className="intro">
              <h2>{listing.subtitle}</h2>
              <p>3 guests · 1 bedroom · 1 bed · 1 bath</p>

              <div className="gf-card">
                <div className="gf-badge">
                  <Laurel />
                  <b>Guest<br />favourite</b>
                  <Laurel />
                </div>
                <p className="gf-copy">
                  One of the most loved homes on Airbnb, according to guests
                </p>
                <div className="gf-stat">
                  <b>4.95</b>
                  <span className="gf-stars">★★★★★</span>
                </div>
                <div className="gf-stat">
                  <b>19</b>
                  <u>Reviews</u>
                </div>
              </div>
            </section>

            <HostSummary />
            <Highlights />
            <DescriptionSection />

            <section className="content-section">
              <h2>Where you'll sleep</h2>
              <div className="sleep-grid">
                <div>
                  <img src={listing.images[3]} alt="Bedroom" />
                  <b>Bedroom</b>
                  <span>1 double bed</span>
                </div>
                <div>
                  <img src={listing.images[0]} alt="Living room" />
                  <b>Living room</b>
                  <span>1 sofa</span>
                </div>
              </div>
            </section>

            <Amenities onMore={() => setAmenitiesOpen(true)} />
            <Calendar />
          </main>

          <aside className="side-col">
            <BookingCard />
          </aside>
        </div>

        <div className="lower-content">
          <RatingSection />
          <Location />
          <HostSection />

          <section className="content-section protection">
            <div><Icon name="shield" size={24} /></div>
            <span>
              To help protect your payment, always use Airbnb to send money and
              communicate with hosts.
            </span>
          </section>

          <Things />
          <Nearby />
        </div>
      </div>

      {amenitiesOpen && (
        <AmenitiesModal onClose={() => setAmenitiesOpen(false)} />
      )}

      {lightboxOpen && (
        <Lightbox
          images={allPhotos}
          index={index}
          setIndex={setIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      {saveToast && (
        <div className="save-toast" aria-live="polite">
          {saveToast}
        </div>
      )}
    </>
  );
}
