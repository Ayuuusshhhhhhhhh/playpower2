import { useEffect } from 'react';
import { Icon } from './Icon';

export function Lightbox({ images, index, setIndex, onClose }) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowRight') {
        setIndex((current) => (current + 1) % images.length);
      }

      if (event.key === 'ArrowLeft') {
        setIndex((current) => (current - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [images.length, onClose, setIndex]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true">
      <div className="lb-top">
        <button type="button" onClick={onClose} aria-label="Close gallery">
          <Icon name="grid" />
        </button>

        <b>Additional photos</b>

        <div>
          <span>{index + 1} of 43</span>
          <button type="button" onClick={onClose} aria-label="Close">
            <Icon name="close" />
          </button>
        </div>
      </div>

      <button
        type="button"
        className="lb-arrow"
        onClick={() =>
          setIndex((current) => (current - 1 + images.length) % images.length)
        }
        aria-label="Previous photo"
      >
        <Icon name="left" size={30} />
      </button>

      <div className="lb-image">
        <img src={images[index]} alt="Gallery" />
      </div>

      <button
        type="button"
        className="lb-arrow"
        onClick={() => setIndex((current) => (current + 1) % images.length)}
        aria-label="Next photo"
      >
        <Icon name="right" size={30} />
      </button>
    </div>
  );
}
