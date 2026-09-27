import { useState } from 'react';
import { Icon } from './Icon';

export function BookingCard() {
  const [guestsOpen, setGuestsOpen] = useState(false);

  return (
    <aside className="booking-side">
      <div className="discount">
        <span className="discount-icon"><Icon name="tag" size={25} /></span>
        <span>
          Get 10% off your next stay.
          <br />
          <u>Terms apply</u>
        </span>
        <button type="button">Claim</button>
      </div>

      <div className="booking-holder">
        <div className="booking-sticky">
          <div className="booking-card">
            <div className="booking-price">
              <u>₹28,499</u> <span>for 5 nights</span>
            </div>

            <div className="date-box">
              <div>
                <b>CHECK-IN</b>
                <span>10/18/2026</span>
              </div>
              <div>
                <b>CHECKOUT</b>
                <span>10/23/2026</span>
              </div>
              <button
                type="button"
                className="guest-row"
                onClick={() => setGuestsOpen((open) => !open)}
                aria-expanded={guestsOpen}
              >
                <b>GUESTS</b>
                <span>2 guests</span>
                <Icon name="down" size={18} />
              </button>
            </div>

            {guestsOpen && (
              <div
                className="guest-pop"
                role="dialog"
                aria-label="Guest selector"
              >
                <p>
                  <span>Adults</span>
                  <b>2</b>
                </p>
                <p>
                  <span>Children</span>
                  <b>0</b>
                </p>
              </div>
            )}

            <div className="cancel">
              Free cancellation before <b>17 October</b>
            </div>

            <button type="button" className="reserve">
              Reserve
            </button>

            <div className="charge">You won't be charged yet</div>
          </div>

          <button type="button" className="report">
            <Icon name="flag" size={17} />
            Report this listing
          </button>
        </div>
      </div>
    </aside>
  );
}
