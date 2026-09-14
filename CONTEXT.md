# Airbnb Clone Project Context

## Overview
This document tracks the progress of the Airbnb listing page clone (desktop-only frontend). The project is built using React, JavaScript, Vite, and CSS Modules. It is a static frontend with no backend, aiming for pixel-perfect visual fidelity with the provided reference screenshots.

## Tasks Done

### Setup & Infrastructure
- [x] Initialized Vite + React (JS) project.
- [x] Configured ESLint (oxlint).
- [x] Created design tokens and global reset in `src/index.css`.
- [x] Configured typography (Inter font from Google Fonts).
- [x] Set up SEO meta tags and page title in `index.html`.

### Data Layer
- [x] Created `src/data/property.js` containing mock data for property details, images, pricing, host info, amenities, and reviews.
- [x] Added extended mock data for Location, Co-hosts, and Policies.

### Core Components Implemented
- [x] **Header:** Logo, search pill, host link, globe icon, and user menu.
- [x] **PropertyHeader:** Property title, Share button, and Save button.
- [x] **PropertyGallery:** 5-image grid (1 hero + 2x2 layout) with rounded corners and hover effects. Includes the "Show all photos" button.
- [x] **StickySubNav:** Sticky navigation for Photos, Amenities, Reviews, Location, along with pricing and Reserve button on the right.
- [x] **PropertyDetails:** Subtitle, specs (guests, bedrooms, etc.), Guest Favourite badge, Host summary, Highlights (icons + text), and translation notice.
- [x] **BookingCard:** Sticky sidebar card with discount banner, price breakdown, interactive-looking date/guest picker, and Reserve button.
- [x] **SleepSection:** "Where you'll sleep" grid with room cards.
- [x] **AmenitiesSection:** "What this place offers" grid with icons, strikethrough for unavailable items, and a "Show all" button.
- [x] **CalendarSection:** Interactive dual-month calendar displaying selected date ranges.
- [x] **ReviewsSection:** Hero rating display, overall rating bar chart, category scores, review tag pills, and 6 review cards.

### Overlays & Interactions
- [x] **PhotoTour:** Full-screen scrollable gallery overlay.
- [x] **Lightbox:** Single-image viewer with previous/next controls, keyboard navigation (Arrow keys, Escape), and image counter.
- [x] **Hooks:** Custom hooks for `useGallery`, `useEscapeKey`, and `useScrollLock`.
- [x] Fixed hydration error related to nested `<button>` elements in the gallery.

---

## Tasks To Be Done

Based on the latest screenshots provided by the user, the following sections need to be appended to the listing page:

### 1. Location Section (`LocationSection.jsx`)
- [x] Add a map placeholder (CSS-styled or static image).
- [x] Add "Exact location will be provided after booking" text.
- [x] Add "Neighbourhood highlights" with description and "Show more" link.

### 2. Meet Your Host Section (`HostSection.jsx`)
- [x] Create the primary Host Card with avatar, name, reviews count, rating, and years hosting.
- [x] Add host info list (e.g., "Born in the 80s", "Where I went school").
- [x] Create a grid for Co-hosts (small avatars and names).
- [x] Add Host details (Response rate, Response time) and "Message host" button.
- [x] Include the trust badge and payment protection text.

### 3. Things to Know Section (`ThingsToKnowSection.jsx`)
- [x] Add 3-column layout for House policies.
- [x] Column 1: Cancellation policy details.
- [x] Column 2: House rules details.
- [x] Column 3: Safety & property details.

### 4. Page Assembly
- [x] Update `ListingPage.jsx` to render `LocationSection`, `HostSection`, and `ThingsToKnowSection` below the `ReviewsSection`.
- [x] Add a visual placeholder for "More stays nearby" at the very bottom.
- [x] Perform final visual QA (Build succeeds, components render).
