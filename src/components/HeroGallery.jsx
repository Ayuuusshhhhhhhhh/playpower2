import { Icon } from './Icon';

export function HeroGallery({
  images,
  onTour,
  onLightbox,
  onSave,
  saved,
}) {
  return (
    <section className="hero-wrap" id="photos">
      <div className="title-row">
        <h1>Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>

        <div className="title-actions">
          <button type="button">
            <span className="title-action-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32" focusable="false">
                <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" />
              </svg>
            </span>
            <span>Share</span>
          </button>
          <button
            type="button"
            className={saved ? 'saved' : ''}
            onClick={onSave}
            aria-pressed={saved}
          >
            <span className="title-action-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32" focusable="false">
                <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z" />
              </svg>
            </span>
            <span>Save</span>
          </button>
        </div>
      </div>

      <div className="hero-grid">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            className={`hero-img hero-${index}`}
            onClick={() => onLightbox(index)}
            aria-label={`Open photo ${index + 1}`}
          >
            <img src={src} alt="Apartment" />
          </button>
        ))}

        <button type="button" className="show-photos" onClick={onTour}>
          <Icon name="grid" size={18} />
          Show all photos
        </button>
      </div>
    </section>
  );
}
