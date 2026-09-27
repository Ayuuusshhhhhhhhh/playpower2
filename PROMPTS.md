# AI-assisted development prompt sequence

1. Build the desktop React/Vite Airbnb listing clone from scratch using the live reference screenshots as the visual source of truth. Prioritize the three required views: Listing Page, Photo Tour, and Lightbox.

2. Add the full long-form listing page sections visible in the reference: sticky section navigation, host/highlights, description, sleeping arrangements, amenities, calendar, ratings, reviews, location/map, neighbourhood highlights, host/co-host section, things to know, nearby stays, and footer.

3. Perform a visual QA pass against the supplied reference screenshots. Tune page width, typography, spacing, image ratios, sticky elements, booking card, gallery, ratings, modal sizing, map proportions, host/co-host layout, things-to-know layout, and nearby-stays cards without copying the reference source code.

4. Add behavioral parity: Save state + wishlist toast, Photo Tour, Lightbox arrows, keyboard left/right navigation, Escape close, amenities modal, scroll locking, semantic buttons, focus-visible states, and smooth scrolling.

5. Final QA: verify all required interactions, clean component structure, no console errors, and a successful production build.

## Reference behavior / pixel QA pass
- Compared the implementation against the supplied 1918×928 recording frames at the calendar, ratings, location, host, things-to-know and nearby-stays states.
- Corrected the large navbar/compact sticky nav relationship.
- Changed the reservation sidebar so the discount card scrolls while the booking card sticks only through the two-column calendar region, then terminates before ratings.
- Reworked the nearby-stays carousel into a continuous horizontal track with a smooth easing transition and fixed five-card desktop presentation.

## Final visual QA pass — description, reviews, amenities
Revisited the supplied reference recording and corrected the listing content immediately above “Where you'll sleep”: collapsed “Show more” / expanded “Show less” behavior, reference text and typography. Expanded the review grid from 4 to the 6 reviews visible in the recording (Amit, Aheesh, Samiksha, Vedant, Vaibhav S, Mohd). Replaced emoji/placeholder amenity marks with independent inline SVG line icons in both the preview and full amenities modal while preserving the exact category/item text requested for the task.


## V2 reference-parity prompts
- Compared the existing implementation against the supplied reference screenshots and recording before changing code.
- Updated Save interaction to mirror both saved and unsaved states, including distinct wishlist toasts.
- Matched the collapsed/expanded description behavior, including the collapsed fade and Show more/Show less states.
- Kept unavailable Carbon monoxide alarm and Smoke alarm crossed out consistently in both the preview and all-amenities modal.
- Preserved the reference scroll lifecycle where the compact section navigation becomes sticky after the main gallery scrolls away.

## V2.1 reviewer-driven correction pass
- Delayed the compact sticky section navigation until the complete hero/gallery section is no longer visible in the viewport.
- Restored the missing “Hosted by Mirashya Homes / 2 years hosting” summary directly below the Guest favourite card.
- Replaced platform-dependent emoji highlight glyphs with consistent inline SVG line icons for outdoor entertainment, cooling/fan, and self check-in.
- Corrected the header brand mark treatment and normalized the Airbnb-style wordmark sizing/weight.
- Normalized desktop typography and font weights across listing content, booking card, amenities, and the all-amenities modal.
- Kept the translation notice on one line at the reference desktop width.
- Replaced the discount-card emoji with a consistent inline tag icon.

## V2.2 — spacing + navbar correction pass (2026-09-25)

- Rechecked the supplied reference recording frame-by-frame for the compact section navigation lifecycle.
- Corrected the hidden section navigation so it is removed from layout instead of reserving vertical space while the hero is still visible.
- Corrected the visible section navigation to overlay/fix to the viewport top, matching the recording where the listing content scrolls underneath it rather than being pushed downward.
- Reduced the gallery-to-listing gap and tightened the listing intro spacing to remove the large blank region visible after the hero.
- Reduced calendar vertical density: heading spacing, month header spacing, weekday spacing, date-cell height, and bottom padding were tightened to better match the supplied reference screenshots.


## V2.2 footer removal
- Removed the custom footer from the listing page because it is not part of the reference flow and adds unnecessary vertical content.

## V2.3 — recording-to-reference parity pass (2026-09-26)

- Compared the current desktop build recording directly against the supplied reference recording frame-by-frame.
- Removed the large Airbnb search/navigation header from the listing page; the reference begins with the property page and only uses the compact section navigation after the hero has fully left the viewport.
- Kept the compact section navigation as a fixed overlay so it never reserves layout space, reduced its height/typography, and preserved the delayed appearance behavior.
- Tightened hero/title geometry and reduced hero height to match the reference capture.
- Reduced the main listing typography and vertical rhythm across the title, metadata, highlights, translation notice, description, reservation card, calendar, section headings, and nearby cards.
- Rebuilt the Guest favourite card treatment with two small laurel SVGs instead of the emoji glyph, and compacted its height/columns.
- Corrected the Mirashya host-summary avatar so its wordmark stays inside the circle.
- Tightened the calendar substantially: heading, month controls, weekday row, date cells, and bottom controls.
- Kept the footer removed as requested.
- This pass was made from the recording/reference comparison; production build verification remains pending because the environment cannot fetch the Vite dependencies from npm.

## 2026-09-26 — Reference/build recording reconciliation pass
- Compared the supplied reference recording and built recording at the same semantic scroll points.
- Restored the large Airbnb header because it is present in the reference at the top of the listing; it scrolls away naturally.
- Restored the reference typography hierarchy instead of the previous over-compressed V2.2 sizes.
- Reduced hero gallery height to the reference geometry.
- Made the compact section navigation appear only after the hero is fully above the viewport and fixed it as an overlay so it does not reserve page space.
- Rebalanced the two-column listing layout to match the reference's left content / reservation rail proportions.
- Rebuilt Guest favourite sizing, laurels, typography, and metric columns.
- Restored host summary scale and avatar proportions.
- Restored highlight, description, amenity, booking, and calendar typography/spacing to reference scale.
- Reduced the location map to the reference height; the previous build's map was substantially too short.
- Restored lower-page heading/body hierarchy and nearby-card sizing.
- Footer remains intentionally removed.
