'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import '@/styles/hero.css';
import '@/styles/responsive.css';
import CourseCard from '@/components/CourseCard';
import ImageCarousel from '@/components/ImageCarousel';
import img1 from '@/images/img1.jpg';
import img2 from '@/images/img2.jpg';
import img3 from '@/images/img3.jpg';
import img4 from '@/images/img4.jpeg';
import img5 from '@/images/img5.jpg';
import gallery1 from '@/images/gallery1.jpeg';
import gallery2 from '@/images/gallery2.jpeg';
import gallery3 from '@/images/gallery3.jpeg';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [img1.src, img2.src, img3.src, img4.src, img5.src];

  const testimonials = [
    {
      name: 'Nisaar',
      quote: 'I have learnt MS-OFFICE completely with perfection. Sir here is very friendly and helpful to teach and explain all the topic and guides through all the phases. I’m even learning Digital marketing from the same place, it’s my genuine comment and would suggest to join your child here to learn different courses which will help them in their future.',
      rating: 5,
      date: '13 Jul, 2024'
    },
    {
      name: 'ADITYA PRAKASH',
      quote: 'My name is Aditya. This institute is so good that I learned the basics in just 2 days and I am pursuing other courses too.',
      rating: 5,
      date: '17 Dec, 2024'
    },
    {
      name: 'boya bhavani',
      quote: 'My experience was in this IMA computer coaching is one and only best to me and for everyone even sir was have a good nature to teach. This is very nice and easy to understand.',
      rating: 5,
      date: '12 Sept, 2024'
    },
    {
      name: 'Manikanta Reddy',
      quote: 'Excellent teaching in Dilshuknagar with reasonable prices. I have learnt MS Office from here. It was very helpful in my LIFE.',
      rating: 5,
      date: '24 Jul, 2024'
    },
    {
      name: 'Sravani',
      quote: 'Very supportive faculty and practical classes helped me complete the course quickly. I would recommend this institute for anyone looking to build skills in multimedia and computer training.',
      rating: 5,
      date: '05 Nov, 2024'
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  useEffect(() => {
    if (isTestimonialPaused) return;
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(timer);
  }, [isTestimonialPaused, testimonials.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextTestimonial = () => setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevTestimonial = () => setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const featuredCourses = [
    {
      image: '/images/graphic design -1.jpg',
      title: 'Graphic Designing',
      description: 'Master Photoshop, Illustrator, and creative design techniques to create stunning visuals.'
    },
    {
      image: '/images/2d&3d -2.jpg',
      title: '2D & 3D Animation',
      description: 'Learn animation, 3D modeling, character animation, and rendering for professional studios.'
    },
    {
      image: '/images/vfx-3.jpg',
      title: 'VFX',
      description: 'Create stunning visual effects, video editing, compositing, and professional video production.'
    },
  ];

  const galleryImages = [
    gallery1.src,
    gallery2.src,
    gallery3.src,
  ];

  return (
    <main>
      {/* Carousel Banner below the navbar */}
      <div
        className="carousel-banner"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="carousel-banner-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={slide}
              className="carousel-banner-slide"
              style={{ ['--slide-bg' as any]: `url(${slide})` }}
              aria-hidden={currentSlide !== idx}
            >
              <img
                src={slide}
                alt={`Slide ${idx + 1}`}
                className="carousel-banner-image"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="carousel-nav carousel-nav-prev"
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="carousel-nav carousel-nav-next"
          aria-label="Next slide"
        >
          &#10095;
        </button>

        <div className="carousel-dots">
          {slides.map((_, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`carousel-dot ${currentSlide === idx ? 'active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={currentSlide === idx}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Inventive Multimedia Academy</h1>
            <p className="hero-subtitle">Shine Your Skills</p>
            <div className="hero-badge">100% Placement Assistance</div>
            <p className="hero-description">
              Unlock your creative potential with industry-leading courses in Graphic Design, Animation, VFX, Programming, and More. Learn from experienced professionals in a modern, fully-equipped facility.
            </p>
            <div className="hero-buttons">
              <Link href="/courses" className="btn-primary">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section why-choose-section" style={{ backgroundColor: 'rgba(15, 32, 39, 0.5)' }}>
        <div className="section-container why-choose-container">
          <h2 className="section-title why-choose-title">Why Choose Us?</h2>
          <p className="section-subtitle why-choose-subtitle">Excellence in multimedia education with proven results</p>

          <div className="grid grid-cols-3 why-choose-grid">
            <article className="card section-card why-card wave-pink">
              <div className="dots">
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
              </div>
              <div className="section-card-icon">🎓</div>
              <h3 className="section-card-title">Expert Training</h3>
              <p className="section-card-text">Learn from industry professionals with years of experience in multimedia, design, and IT.</p>
            </article>
            <article className="card section-card why-card wave-blue">
              <div className="dots">
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
              </div>
              <div className="section-card-icon">💻</div>
              <h3 className="section-card-title">Modern Facility</h3>
              <p className="section-card-text">State-of-the-art computer lab with high-end workstations and latest software.</p>
            </article>
            <article className="card section-card why-card wave-purple">
              <div className="dots">
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
              </div>
              <div className="section-card-icon">🚀</div>
              <h3 className="section-card-title">100% Placement</h3>
              <p className="section-card-text">Our dedicated placement team ensures job opportunities for all successful graduates.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Featured Courses</h2>
          <p className="section-subtitle">Start your journey with our most popular programs</p>

          <div className="grid grid-cols-3">
            {featuredCourses.map((course, index) => (
              <CourseCard
                key={index}
                image={course.image}
                title={course.title}
                description={course.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="section-container">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">What our students are saying on Justdial</p>

          <div
            className="testimonial-slider"
            onMouseEnter={() => setIsTestimonialPaused(true)}
            onMouseLeave={() => setIsTestimonialPaused(false)}
          >
            <button
              type="button"
              onClick={prevTestimonial}
              className="testimonial-nav testimonial-nav-prev"
              aria-label="Previous testimonial"
            >
              &#10094;
            </button>

            <div className="testimonial-track" style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card" aria-hidden={testimonialIndex !== index}>
                  <div className="testimonial-card-inner">
                    <div className="testimonial-card-meta">
                      <div className="testimonial-rating">{'★'.repeat(testimonial.rating)}</div>
                      <div className="testimonial-date">{testimonial.date}</div>
                    </div>
                    <p className="testimonial-quote">{testimonial.quote}</p>
                    <div className="testimonial-author">
                      <div>
                        <h3>{testimonial.name}</h3>
                        <p className="testimonial-role">Justdial reviewer</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={nextTestimonial}
              className="testimonial-nav testimonial-nav-next"
              aria-label="Next testimonial"
            >
              &#10095;
            </button>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setTestimonialIndex(idx)}
                className={`testimonial-dot ${testimonialIndex === idx ? 'active' : ''}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section" style={{ backgroundColor: 'rgba(15, 32, 39, 0.5)' }}>
        <div className="section-container">
          <h2 className="section-title">Our Institute</h2>
          <p className="section-subtitle">Tour our world-class facilities and learning environment</p>

          <ImageCarousel images={galleryImages} title="Gallery" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #fff6eb 0%, #ffeef7 100%)' }}>
        <div className="section-container">
          <div className="grid grid-cols-3">
            <div className="card stats-card">
              <div className="stats-number">500+</div>
              <div className="stats-label">Happy Students</div>
            </div>
            <div className="card stats-card">
              <div className="stats-number">8+</div>
              <div className="stats-label">Professional Courses</div>
            </div>
            <div className="card stats-card">
              <div className="stats-number">100%</div>
              <div className="stats-label">Placement Assistance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: 'rgba(138, 43, 226, 0.1)' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Ready to Transform Your Career?</h2>
            <p className="section-subtitle">Join thousands of successful students who have transformed their skills</p>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ display: 'inline-block', marginTop: '1.5rem', backgroundColor: '#ff6b35', borderColor: '#ff6b35' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
