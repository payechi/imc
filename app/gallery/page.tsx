'use client';

import Image from 'next/image';
import '@/styles/responsive.css';
import '@/styles/gallery.css';
import ImageCarousel from '@/components/ImageCarousel';
import Banner from '@/components/Banner';
import galleryBanner from '@/images/gallery.jpg';
import gallery1 from '@/images/gallery1.jpeg';
import gallery2 from '@/images/gallery2.jpeg';
import gallery3 from '@/images/gallery3.jpeg';

const galleryPhotos = [
  { src: gallery1, alt: 'Inventive Multimedia Academy — campus and learning environment' },
  { src: gallery2, alt: 'Inventive Multimedia Academy — training facilities' },
  { src: gallery3, alt: 'Inventive Multimedia Academy — student workspace' },
] as const;

export default function Gallery() {
  const carouselImages = galleryPhotos.map((photo) => photo.src.src);

  return (
    <main>
      <Banner
        title=""
        image={galleryBanner}
      />

      <section className="section">
        <div className="section-container">
          <h1 className="section-title">Gallery</h1>
          <p className="section-subtitle">Featured Showcase</p>
          <ImageCarousel images={carouselImages} title="Institute Gallery" />
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'rgba(15, 32, 39, 0.5)' }}>
        <div className="section-container">
          <h2 className="section-title">All Images</h2>
          <p className="section-subtitle">Our facilities and learning environment</p>

          <div className="gallery-grid">
            {galleryPhotos.map((photo) => (
              <div key={photo.alt} className="gallery-grid-item">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                  className="gallery-grid-image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Want to Visit Us?</h2>
            <p className="section-subtitle">
              Schedule a visit to see our facilities in person and meet our team
            </p>
            <button className="btn-primary" style={{ marginTop: '1.5rem' }}>
              Schedule Visit
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
