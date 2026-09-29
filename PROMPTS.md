## AI-Assisted Development Prompt Sequence

Initial build: Build the desktop React/Vite Airbnb listing clone from scratch using the provided reference materials as the visual source of truth. Prioritize the three required views: Listing Page, Photo Tour, and Lightbox.
Long-form listing: Implement all major listing sections represented in the reference, including sticky section navigation, host/highlights, description, sleeping arrangements, amenities, calendar, ratings and reviews, location/map, neighbourhood highlights, host/co-host section, things to know, nearby stays, and footer.
Visual QA: Perform a detailed visual QA pass against the provided reference materials. Tune page width, typography, spacing, image ratios, sticky elements, booking card, gallery, ratings, modal sizing, map proportions, host/co-host layout, things-to-know layout, and nearby-stays cards without copying the reference source code.
Behavioral parity: Implement Save state and wishlist toasts, Photo Tour, Lightbox navigation, keyboard left/right navigation, Escape-to-close, amenities modal, scroll locking, semantic buttons, focus-visible states, and smooth scrolling.
Final QA: Verify all required interactions, maintain a clean component structure, eliminate console errors, and verify the production build.

## Reference Behavior / Pixel QA Pass

Corrected the relationship between the large navbar and compact sticky navigation.
Updated the reservation sidebar so the discount card scrolls normally while the booking card remains sticky only through the two-column calendar region and terminates before the ratings section.
Reworked the nearby-stays carousel into a continuous horizontal track with smooth easing and a fixed five-card desktop presentation.
Final Visual QA Pass — Description, Reviews & Amenities
Corrected the listing content immediately above “Where you'll sleep”, including the collapsed Show more and expanded Show less states, reference text, typography, and spacing.
Expanded the review grid from four to the six reviews represented in the reference: Amit, Aheesh, Samiksha, Vedant, Vaibhav S, and Mohd.
Replaced emoji and placeholder amenity marks with independent inline SVG line icons in both the amenities preview and full amenities modal.
Preserved the required amenity categories and item text.
## V2 — Reference-Parity Pass
Compared the existing implementation against the provided reference materials before making changes.
Updated the Save interaction to support distinct saved and unsaved states with corresponding wishlist toasts.
Matched the collapsed and expanded description behavior, including the collapsed fade and Show more/Show less states.
Kept unavailable Carbon monoxide alarm and Smoke alarm consistently crossed out in both the preview and full amenities modal.
Replaced platform-dependent emoji highlight glyphs with consistent inline SVG line icons for outdoor entertainment, cooling/fan, and self check-in.
Corrected the header brand mark treatment and normalized the Airbnb-style wordmark sizing and weight.
Normalized desktop typography and font weights across listing content, booking card, amenities, and the all-amenities modal.
Kept the translation notice on a single line at the reference desktop width.
Replaced the discount-card emoji with a consistent inline tag icon.
## V2.1 — Reviewer-Driven Correction Pass
Delayed the compact sticky section navigation until the complete hero/gallery section had left the viewport.
Restored the missing “Hosted by Mirashya Homes / 2 years hosting” summary directly below the Guest Favourite card.
Replaced platform-dependent emoji highlight glyphs with consistent inline SVG line icons.
Corrected the header brand mark treatment and normalized Airbnb-style wordmark sizing and weight.
Normalized desktop typography and font weights across listing content, booking card, amenities, and the all-amenities modal.
Kept the translation notice on one line at the reference desktop width.
Replaced the discount-card emoji with a consistent inline tag icon.
## V2.2 — Spacing & Navigation Correction Pass
Corrected the hidden section navigation so it is removed from the document layout rather than reserving vertical space while the hero is visible.
Updated the visible section navigation to overlay the viewport instead of pushing the listing content downward.
Reduced the gallery-to-listing gap and tightened the listing intro spacing.
Reduced calendar vertical density by adjusting heading spacing, month controls, weekday spacing, date-cell height, and bottom padding.
## V2.2 — Footer Removal
Removed the custom footer because it is not part of the required reference flow and added unnecessary content below the listing.
## V2.3 — Reference-Parity Pass
Refined the Airbnb header and compact section navigation behavior to match the reference flow.
Kept the compact section navigation as a fixed overlay with delayed appearance and reduced height and typography.
Tightened hero/title geometry and adjusted the hero height to better match the reference layout.
Reduced excessive vertical spacing across the listing introduction.
Rebuilt the Guest Favourite card using two laurel SVGs and refined its height, columns, typography, and spacing.
Corrected the Mirashya host-summary avatar so the wordmark remains properly contained within the circular image.
Tightened the calendar layout, including the heading, month controls, weekday row, date cells, and bottom controls.
Kept the footer removed as requested.
## Reference / Build Reconciliation Pass
Rebalanced the overall listing layout to match the reference content and reservation-rail proportions.
Restored the large Airbnb header at the top of the listing and ensured it scrolls away naturally.
Restored the intended typography hierarchy after previous iterations had compressed several elements too heavily.
Adjusted the hero-gallery height and proportions to match the reference geometry.
Configured the compact section navigation to appear only after the hero has fully left the viewport and remain fixed as an overlay without reserving layout space.
Rebalanced the two-column listing structure and reservation rail.
Refined Guest Favourite sizing, laurel placement, typography, and metric columns.
Restored the intended scale and proportions of the host summary and avatar.
Adjusted highlight, description, amenity, booking-card, and calendar typography and spacing.
Increased the location map height to better match the reference proportions.
Restored the lower-page heading/body hierarchy and nearby-stay card sizing.
Kept the footer intentionally removed.