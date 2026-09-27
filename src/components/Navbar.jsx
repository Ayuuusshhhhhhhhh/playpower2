import { Icon } from './Icon';

export function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#photos" aria-label="Airbnb home">
          <img className="airbnb-logo-image" src="/images/Airbnb_Logo_Belo.png" alt="airbnb" />
        </a>

        <div className="search-pill" role="search">
          <button type="button" className="search-segment anywhere">
            <img className="search-house-icon" src="/images/searchbar-house.png" alt="" aria-hidden="true" />
            <span>Anywhere</span>
          </button>
          <i />
          <button type="button" className="search-segment anytime">
            <span>Anytime</span>
          </button>
          <i />
          <button type="button" className="search-segment add-guests">
            <span>Add guests</span>
          </button>
          <button type="button" className="search-btn" aria-label="Search">
            <Icon name="search" size={18} />
          </button>
        </div>

        <div className="nav-actions">
          <button type="button" className="host-link">Become a host</button>
          <button type="button" className="circle" aria-label="Language">
            <Icon name="globe" />
          </button>
          <button type="button" className="circle" aria-label="Menu">
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
