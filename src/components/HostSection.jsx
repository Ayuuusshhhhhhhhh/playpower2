import { coHosts } from '../data/listing';
import { Icon } from './Icon';

export function HostSection() {
  return (
    <section className="content-section host-section">
      <h2>Meet your host</h2>

      <div className="host-layout">
        <div className="host-left">
          <div className="host-card">
            <div className="host-card-main">
              <div className="host-logo">
                <img src="/images/host.jpeg" alt="Mirashya Homes" />
              </div>

              <h3>
                Mirashya
                <br />
                Homes
              </h3>

            <span>Host</span>
            </div>

            <div className="host-stats">
              <div>
                <b>1,463</b>
                <span>Reviews</span>
              </div>
              <div>
                <b>4.68 ★</b>
                <span>Rating</span>
              </div>
              <div>
                <b>2</b>
                <span>Years hosting</span>
              </div>
            </div>
          </div>

          <p className="host-fact"><Icon name="balloon" size={24} /> Born in the 80s</p>
          <p className="host-fact"><Icon name="school" size={24} /> Where I went to school: NICMAR GOA</p>
        </div>

        <div className="host-right">
          <h3>Co-Hosts</h3>

          <div className="cohost-grid">
            {coHosts.map(([name, initial, image]) => (
              <div className="cohost" key={name}>
                {image ? (
                  <img src={image} alt="" />
                ) : (
                  <span>{initial}</span>
                )}
                <b>{name}</b>
              </div>
            ))}
          </div>

          <div className="host-details">
            <h3>Host details</h3>
            <p>Response rate: 100%</p>
            <p>Responds within an hour</p>
            <button type="button" className="kit-btn-secondary">Message host</button>
          </div>
        </div>
      </div>
    </section>
  );
}
