import { Icon } from './Icon';

export function PhotoTour({ rooms, onBack, onOpen, onSave, saved }) {
  return (
    <div className="photo-tour">
      <div className="tour-top">
        <button type="button" onClick={onBack} aria-label="Back">
          <Icon name="left" size={24} />
        </button>

        <h2>Photo tour</h2>

        <div>
          <button type="button" aria-label="Share">
            <Icon name="share" />
          </button>

          <button
            type="button"
            aria-label="Save"
            className={saved ? 'tour-saved' : ''}
            onClick={onSave}
          >
            <Icon name="heart" />
          </button>
        </div>
      </div>

      <div className="tour-inner">

        {/* Room thumbnails */}
        <div className="room-tabs">
          {rooms.map(([name, subtitle, images], index) => {
            const gallery = Array.isArray(images) ? images : [images];

            return (
              <button
                key={name}
                type="button"
                onClick={() =>
                  document
                    .getElementById(`room-${index}`)
                    ?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                }
              >
                <img src={gallery[0]} alt="" />
                <span>{name}</span>
              </button>
            );
          })}
        </div>

        {/* Individual room sections */}
        {rooms.map(([name, subtitle, images], index) => {
          const gallery = Array.isArray(images) ? images : [images];

          return (
            <section
              className="room-section"
              id={`room-${index}`}
              key={name}
            >

              {/* Left: sticky room description */}
              <div className="room-description">
                <h1>{name}</h1>
                <p>{subtitle}</p>
              </div>

              {/* Right: photos for this room */}
              <div
                className={
                  gallery.length > 1
                    ? 'room-gallery'
                    : 'room-gallery single'
                }
              >
                {gallery.map((image, imageIndex) => (
                  <button
                    type="button"
                    className={
                      imageIndex === 0
                        ? 'room-photo primary'
                        : 'room-photo secondary'
                    }
                    key={image}
                    onClick={() => onOpen(image)}
                    aria-label={`Open ${name}, photo ${imageIndex + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${name} ${imageIndex + 1}`}
                    />
                  </button>
                ))}
              </div>

            </section>
          );
        })}

      </div>
    </div>
  );
}