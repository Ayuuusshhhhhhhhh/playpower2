import { useEffect } from 'react';
import { amenityGroups } from '../data/listing';
import { Icon } from './Icon';

export function AmenitiesModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="amenities-modal"
        role="dialog"
        aria-modal="true"
        aria-label="All amenities"
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close amenities"
        >
          <Icon name="close" />
        </button>

        <div className="modal-scroll">
          <h2>What this place offers</h2>

          {amenityGroups.map(([group, items]) => (
            <div className="amenity-group" key={group}>
              <h3>{group}</h3>

              {items.map(([iconKey, name]) => {
                const unavailable =
                  group === 'Home safety' &&
                  (name === 'Carbon monoxide alarm' || name === 'Smoke alarm');

                return (
                  <div
                    className={`amenity-row${unavailable ? ' unavailable' : ''}`}
                    key={name}
                  >
                    <span className="amenity-svg">
                      <Icon name={iconKey} size={25} />
                    </span>
                    {unavailable ? <s>{name}</s> : <span>{name}</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
