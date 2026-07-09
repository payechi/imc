'use client';

import '@/styles/responsive.css';
import Banner from '@/components/Banner';
import contactBanner from '@/images/contact.jpg';
import git1Image from '@/images/git1.jpg';

export default function Contact() {
  return (
    <main>
      <Banner
        title=""
        image={contactBanner}
      />

      <section className="section" style={{ paddingBottom: '0.5rem' }}>
        <div className="section-container text-center">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">Get in touch with Inventive Multimedia Academy</p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.96) 0%, rgba(30, 64, 175, 0.9) 100%)', paddingTop: '2rem' }}>
        <div className="section-container">
          <div
            style={{
              maxWidth: '1180px',
              margin: '0 auto',
              padding: 'clamp(1.5rem, 3.2vw, 2.5rem)',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255,255,255,0.14)',
              boxShadow: '0 20px 45px rgba(2, 8, 23, 0.32)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div style={{ display: 'grid', gap: '1.75rem', gridTemplateColumns: '1.05fr 0.95fr', alignItems: 'start' }}>
              <div style={{ textAlign: 'left', padding: '0.5rem 0' }}>
                <p style={{ color: 'var(--color-neon-blue)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Get in Touch
                </p>
                <h2 className="section-title" style={{ marginBottom: '0.75rem', textAlign: 'left' }}>
                  We are here to help you start your next step.
                </h2>
                <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: 0 }}>
                  Reach out for course guidance, admission support, or any questions about our training programs.
                </p>
                <div style={{ marginTop: '1.25rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 24px rgba(2, 8, 23, 0.12)', width: '100%' }}>
                  <img
                    src={git1Image.src}
                    alt="Contact illustration"
                    style={{ width: '100%', height: '100%', minHeight: '260px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gap: '1rem' }}>
                <div className="card" style={{ marginBottom: 0, textAlign: 'center', background: 'rgba(255,255,255,0.95)', color: '#0f172a', borderRadius: '16px', padding: '1.25rem' }}>
                  <h3 style={{ color: 'var(--color-neon-blue)', marginBottom: '0.5rem' }}>
                    📍 Address
                  </h3>
                  <p>
                    SAHJAN COMPLEX, Room No:102, 1st floor, Opp. Sri Sri Satyanarayana Swamy Temple, Konark Theatre Line, Dilsukhnagar
                  </p>
                </div>

                <div className="card" style={{ marginBottom: 0, textAlign: 'center', background: 'rgba(255,255,255,0.95)', color: '#0f172a', borderRadius: '16px', padding: '1.25rem' }}>
                  <h3 style={{ color: 'var(--color-neon-blue)', marginBottom: '0.5rem' }}>
                    📞 Phone
                  </h3>
                  <p>
                    <a href="tel:+919110588441" style={{ color: 'var(--color-neon-blue)' }}>
                      +91 91105 88441
                    </a>
                  </p>
                </div>

                <div className="card" style={{ marginBottom: 0, textAlign: 'center', background: 'rgba(255,255,255,0.95)', color: '#0f172a', borderRadius: '16px', padding: '1.25rem' }}>
                  <h3 style={{ color: 'var(--color-neon-blue)', marginBottom: '0.5rem' }}>
                    ✉️ Email
                  </h3>
                  <p>
                    <a href="mailto:info@inventivemultimedia.com" style={{ color: 'var(--color-neon-blue)' }}>
                      info@inventivemultimedia.com
                    </a>
                  </p>
                </div>

                <div className="card" style={{ marginBottom: 0, textAlign: 'center', background: 'rgba(255,255,255,0.95)', color: '#0f172a', borderRadius: '16px', padding: '1.25rem' }}>
                  <h3 style={{ color: 'var(--color-neon-blue)', marginBottom: '0.5rem' }}>
                    🕐 Hours
                  </h3>
                  <p>
                    <strong>Monday - Saturday:</strong> 10:00 AM - 7:00 PM<br />
                    <strong>Sunday:</strong> Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ backgroundColor: 'rgba(15, 32, 39, 0.5)' }}>
        <div className="section-container">
          <h2 className="section-title">Location Map</h2>
          <div style={{
            width: '100%',
            height: '400px',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            marginTop: '2rem',
            background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%)',
          }}>
            <iframe
              title="Inventive Multimedia Academy Location"
              src="https://maps.google.com/maps?q=SAHJAN%20COMPLEX%2C%20Room%20No%3A102%2C%201st%20floor%2C%20Opp.%20Sri%20Sri%20Satyanarayana%20Swamy%20Temple%2C%20Konark%20Theatre%20Line%2C%20Dilsukhnagar%2C%20Hyderabad&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Quick answers to common questions</p>

          <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1.25rem' }}>
            <div className="card" style={{ marginBottom: 0, width: '100%', border: '1px solid rgba(14, 165, 233, 0.2)', borderRadius: '16px', boxShadow: '0 10px 24px rgba(2, 8, 23, 0.08)', padding: '1.25rem' }}>
              <h3 style={{ color: 'var(--color-neon-blue)', marginBottom: '1rem' }}>
                What are the course timings?
              </h3>
              <p>
                We offer flexible timing with morning (9 AM - 1 PM), evening (3 PM - 7 PM), and weekend (10 AM - 4 PM) batches to suit your schedule.
              </p>
            </div>

            <div className="card" style={{ marginBottom: 0, border: '1px solid rgba(14, 165, 233, 0.2)', borderRadius: '16px', boxShadow: '0 10px 24px rgba(2, 8, 23, 0.08)', padding: '1.25rem' }}>
              <h3 style={{ color: 'var(--color-neon-blue)', marginBottom: '1rem' }}>
                Do you offer certification support?
              </h3>
              <p>
                Yes! We guide students through industry-recognized certification paths to strengthen their resume and career profile.
              </p>
            </div>

            <div className="card" style={{ marginBottom: 0, border: '1px solid rgba(14, 165, 233, 0.2)', borderRadius: '16px', boxShadow: '0 10px 24px rgba(2, 8, 23, 0.08)', padding: '1.25rem' }}>
              <h3 style={{ color: 'var(--color-neon-blue)', marginBottom: '1rem' }}>
                What is the eligibility criteria?
              </h3>
              <p>
                Most courses require basic computer knowledge. We welcome students from all educational backgrounds interested in multimedia and IT.
              </p>
            </div>

            <div className="card" style={{ marginBottom: 0, border: '1px solid rgba(14, 165, 233, 0.2)', borderRadius: '16px', boxShadow: '0 10px 24px rgba(2, 8, 23, 0.08)', padding: '1.25rem' }}>
              <h3 style={{ color: 'var(--color-neon-blue)', marginBottom: '1rem' }}>
                Do you provide placement assistance?
              </h3>
              <p>
                Yes! We offer dedicated placement support, interview preparation, and guidance to help students secure the right opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
