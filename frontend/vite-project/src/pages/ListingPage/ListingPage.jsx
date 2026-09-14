import { createPortal } from 'react-dom';
import { useState } from 'react';
import Header from '../../components/Header/Header';

import PropertyHeader from '../../components/PropertyHeader/PropertyHeader';
import PropertyGallery from '../../components/PropertyGallery/PropertyGallery';
import StickySubNav from '../../components/StickySubNav/StickySubNav';
import PropertyDetails from '../../components/PropertyDetails/PropertyDetails';
import BookingCard from '../../components/BookingCard/BookingCard';
import SleepSection from '../../components/SleepSection/SleepSection';
import AmenitiesSection from '../../components/AmenitiesSection/AmenitiesSection';
import CalendarSection from '../../components/CalendarSection/CalendarSection';
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection';
import LocationSection from '../../components/LocationSection/LocationSection';
import HostSection from '../../components/HostSection/HostSection';
import ThingsToKnowSection from '../../components/ThingsToKnowSection/ThingsToKnowSection';
import PhotoTour from '../../components/PhotoTour/PhotoTour';
import Lightbox from '../../components/Lightbox/Lightbox';
import { useGallery } from '../../hooks/useGallery';
import { property, propertyImages } from '../../data/property';
import styles from './ListingPage.module.css';

const NEARBY_STAYS = [
  {
    id: 1,
    title: 'Beautiful Studio with a view to die for',
    location: 'Candolim, Goa',
    price: '₹23,600',
    rating: 4.91,
    image: '/images/1.png',
  },
  {
    id: 2,
    title: 'NAQAB - 1bhk with private pool',
    location: 'Calangute, Goa',
    price: '₹42,218',
    rating: 4.95,
    image: '/images/2.png',
  },
  {
    id: 3,
    title: 'Greentique Luxury Flat with plunge pool, Calangute',
    location: 'Calangute, Goa',
    price: '₹44,506',
    rating: 4.94,
    image: '/images/3.png',
  },
  {
    id: 4,
    title: 'The Tropical Studio | 5 mins to Beach',
    location: 'Baga, Goa',
    price: '₹22,824',
    rating: 4.96,
    image: '/images/4.png',
  },
  {
    id: 5,
    title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
    location: 'Calangute, Goa',
    price: '₹39,942',
    rating: 4.95,
    image: '/images/5.png',
  },
  {
    id: 6,
    title: 'Modern Apartment near Baga Beach',
    location: 'Baga, Goa',
    price: '₹28,500',
    rating: 4.88,
    image: '/images/6.png',
  },
  {
    id: 7,
    title: 'Cozy Villa with Garden, Anjuna',
    location: 'Anjuna, Goa',
    price: '₹55,200',
    rating: 4.98,
    image: '/images/7.png',
  },
  {
    id: 8,
    title: 'Seaview Penthouse with Private Terrace',
    location: 'Sinquerim, Goa',
    price: '₹62,100',
    rating: 4.99,
    image: '/images/8.png',
  },
];

const PAGE_SIZE = 4;
const TOTAL_PAGES = Math.ceil(NEARBY_STAYS.length / PAGE_SIZE);

function StarIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="12"
      height="12"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 26.583l8.625 4.365a1 1 0 0 0 1.483-1.061l-1.965-9.852 7.293-6.565a1 1 0 0 0-.542-1.736l-9.86-1.27-4.124-8.885a1 1 0 0 0-1.814 0z" />
    </svg>
  );
}

function NearbyStays() {
  const [page, setPage] = useState(0);

  const visibleStays = NEARBY_STAYS.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(TOTAL_PAGES - 1, p + 1));

  return (
    <section className={styles.moreStaysPlaceholder} aria-labelledby="nearby-heading">
      <div className={styles.moreStaysHeader}>
        <h2 id="nearby-heading">More stays nearby</h2>
        <div className={styles.moreStaysNav}>
          <span>{page + 1} / {TOTAL_PAGES}</span>
          <button
            aria-label="Previous page"
            onClick={prev}
            disabled={page === 0}
            className={page === 0 ? styles.navBtnDisabled : styles.navBtn}
          >
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            aria-label="Next page"
            onClick={next}
            disabled={page === TOTAL_PAGES - 1}
            className={page === TOTAL_PAGES - 1 ? styles.navBtnDisabled : styles.navBtn}
          >
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.moreStaysGrid}>
        {visibleStays.map((stay) => (
          <article key={stay.id} className={styles.stayCard}>
            <div className={styles.stayImageWrapper}>
              <img
                src={stay.image}
                alt={stay.title}
                className={styles.stayImage}
              />
            </div>
            <div className={styles.stayInfo}>
              <p className={styles.stayTitle}>{stay.title}</p>
              <p className={styles.stayLocation}>{stay.location}</p>
              <div className={styles.stayMeta}>
                <span className={styles.stayPrice}>{stay.price}</span>
                <span className={styles.stayRating}>
                  <StarIcon /> {stay.rating}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ListingPage() {
  const {
    view,
    activeIndex,
    openPhotoTour,
    openLightbox,
    closeOverlay,
    nextImage,
    previousImage,
  } = useGallery(propertyImages.length);

  return (
    <>
      <Header isStatic={true} />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Property Title + Actions */}
          <PropertyHeader title={property.title} />

          {/* Gallery */}
          <PropertyGallery
            images={propertyImages}
            onOpenPhotoTour={openPhotoTour}
            onOpenLightbox={openLightbox}
          />
        </div>

        {/* Sticky Sub Nav */}
        <StickySubNav
          price={property.pricing.totalPrice}
          nights={property.pricing.nights}
          currency={property.pricing.currency}
          rating={property.rating}
          reviewCount={property.reviewCount}
        />

        {/* Main Content + Booking Card */}
        <div className={styles.container}>
          <div className={styles.contentLayout}>
            {/* Left Column */}
            <div className={styles.leftCol}>
              <PropertyDetails property={property} />
              <hr className={styles.sectionDivider} />
              <SleepSection rooms={property.sleepRooms} />
              <hr className={styles.sectionDivider} />
              <AmenitiesSection
                amenities={property.amenities}
                totalAmenities={property.totalAmenities}
              />
              <hr className={styles.sectionDivider} />
              <CalendarSection pricing={property.pricing} />
            </div>

            {/* Right Column — Booking Card (floats until end of container) */}
            <div className={styles.rightCol}>
              <BookingCard pricing={property.pricing} />
            </div>
          </div>

          {/* Reviews — Full Width */}
          <ReviewsSection property={property} />

          {/* Location — Full Width */}
          <LocationSection locationDetails={property.locationDetails} />

          {/* Host — Full Width */}
          <HostSection host={property.host} coHosts={property.coHosts} />

          {/* Things to Know — Full Width */}
          <ThingsToKnowSection policies={property.thingsToKnow} />

          {/* More stays nearby */}
          <NearbyStays />
        </div>
      </main>

      {/* Overlays via Portal */}
      {view === 'photo-tour' && createPortal(
        <PhotoTour
          images={propertyImages}
          onClose={closeOverlay}
          onOpenLightbox={(idx, e) => openLightbox(idx, e)}
        />,
        document.body
      )}

      {view === 'lightbox' && createPortal(
        <Lightbox
          images={propertyImages}
          activeIndex={activeIndex}
          onClose={closeOverlay}
          onNext={nextImage}
          onPrevious={previousImage}
        />,
        document.body
      )}
    </>
  );
}
