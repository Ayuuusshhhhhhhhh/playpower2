import { Icon } from './Icon';

export function Amenities({ onMore }) {
  const items = [
    ['utensils', 'Kitchen'],
    ['wifi', 'Wifi'],
    ['workspace', 'Dedicated workspace'],
    ['car', 'Free parking on premises'],
    ['pool', 'Pool'],
    ['hot-tub', 'Hot tub'],
    ['paw', 'Pets allowed'],
    ['camera', 'Exterior security cameras on property'],
    ['co2', 'Carbon monoxide alarm'],
    ['smoke', 'Smoke alarm'],
  ];

  return (
    <section id="amenities" className="content-section amenities-preview">
      <h2>What this place offers</h2>

      <div className="amenity-grid">
        {items.map(([icon, name], index) => {
          const unavailable = index > 7;

          return (
            <div
              className={`amenity${unavailable ? ' unavailable' : ''}`}
              key={name}
            >
              <span className="amenity-icon">
                <Icon name={icon} size={26} />
              </span>
              {unavailable ? <s>{name}</s> : name}
            </div>
          );
        })}
      </div>

      <button type="button" className="outline-btn" onClick={onMore}>
        Show all 50 amenities
        <Icon name="right" size={17} />
      </button>
    </section>
  );
}
