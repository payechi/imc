import Image from 'next/image';
import '@/styles/responsive.css';
import Banner from '@/components/Banner';
import aboutBanner from '@/images/aboutus.jpg';
import usStoryImage from '@/images/us.jpg';

export default function About() {
  return (
    <main>
      <Banner
        title=""
        image={aboutBanner}
      />

      {/* Main About Content */}
      <section className="section">
        <div className="section-container">
          <h1 className="section-title">About Us</h1>
          <p className="section-subtitle">Know more about our institute</p>
          <div className="two-column">
            <div className="two-column-image" style={{ maxWidth: '520px', margin: '0 auto' }}>
              <Image
                src={usStoryImage}
                alt="Our Story"
                width={600}
                height={420}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '18px' }}
                priority={false}
              />
            </div>
            <div className="two-column-content">
              <h2>Our Story</h2>
              <p>
                Inventive Multimedia Academy was founded with a vision to provide world-class multimedia and IT training to aspiring professionals. Our journey began with a small batch of dedicated instructors and has grown into a premier training institute recognized for excellence.
              </p>
              <p>
                We believe in transforming raw talent into skilled professionals ready for the industry. Our curriculum is carefully designed to match current industry demands and future trends.
              </p>
              <ul className="feature-list">
                <li>Industry-experienced instructors</li>
                <li>Hands-on practical training</li>
                <li>State-of-the-art facilities</li>
                <li>Guaranteed placement support</li>
                <li>Flexible learning schedules</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ backgroundColor: 'rgba(15, 32, 39, 0.5)' }}>
        <div className="section-container">
          <h2 className="section-title">Our Vision & Mission</h2>
          
          <div className="grid grid-cols-2">
            <div className="card">
              <h3 style={{ color: 'var(--color-neon-blue)', marginBottom: '1rem' }}>Our Vision</h3>
              <p>
                To become the most trusted multimedia and IT training institute, recognized for producing highly skilled professionals who excel in their careers and drive innovation in the industry.
              </p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--color-neon-blue)', marginBottom: '1rem' }}>Our Mission</h3>
              <p>
                To provide comprehensive, industry-relevant training in multimedia, design, animation, and IT courses that empower students with skills, knowledge, and confidence to succeed in competitive job markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Why Choose Inventive Multimedia Academy?</h2>
          
          <div className="grid grid-cols-3">
            <div className="card section-card">
              <div className="section-card-icon">🎯</div>
              <h3 className="section-card-title">100% Placement</h3>
              <p className="section-card-text">We guarantee placement assistance for all qualified students with our strong industry connections.</p>
            </div>
            <div className="card section-card">
              <div className="section-card-icon">👨‍🏫</div>
              <h3 className="section-card-title">Expert Faculty</h3>
              <p className="section-card-text">Learn from industry professionals with 10+ years of experience in their respective fields.</p>
            </div>
            <div className="card section-card">
              <div className="section-card-icon">💡</div>
              <h3 className="section-card-title">Practical Focus</h3>
              <p className="section-card-text">Our curriculum emphasizes real-world projects and practical skills over theory.</p>
            </div>
            <div className="card section-card">
              <div className="section-card-icon">🏆</div>
              <h3 className="section-card-title">Proven Track Record</h3>
              <p className="section-card-text">500+ successful graduates working in leading companies across the globe.</p>
            </div>
            <div className="card section-card">
              <div className="section-card-icon">🚀</div>
              <h3 className="section-card-title">Latest Technology</h3>
              <p className="section-card-text">Train on industry-standard tools and software used by top professionals.</p>
            </div>
            <div className="card section-card">
              <div className="section-card-icon">⏰</div>
              <h3 className="section-card-title">Flexible Schedule</h3>
              <p className="section-card-text">Morning, evening, and weekend batches to suit your convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section" style={{ backgroundColor: 'rgba(138, 43, 226, 0.1)' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Get in Touch with Us</h2>
            <p className="section-subtitle">Have questions? We&apos;re here to help you take the next step</p>
            <button className="btn-primary" style={{ marginTop: '1.5rem' }}>
              Contact Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
