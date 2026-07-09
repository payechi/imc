import Link from 'next/link';
import '@/styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Inventive Multimedia</h3>
            <p>Shine Your Skills - Professional training in multimedia and IT courses with 100% placement assistance.</p>
            <div className="footer-socials">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
                f
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                📷
              </a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp">
                💬
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Courses</h3>
            <ul>
              <li><a href="#courses">Graphic Designing</a></li>
              <li><a href="#courses">2D & 3D Animation</a></li>
              <li><a href="#courses">VFX</a></li>
              <li><a href="#courses">DTP</a></li>
              <li><a href="#courses">C & C++</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <strong>Address:</strong>
              <span>SAHJAN COMPLEX, Room No:102, 1st floor, Opp. Sri Sri Satyanarayana Swamy Temple, Konark Theatre Line, Dilsukhnagar</span>
            </div>
            <div className="footer-contact">
              <strong>Phone:</strong>
              <span>
                <a href="tel:+919110588441">+91 91105 88441</a>
              </span>
            </div>
            <div className="footer-contact">
              <strong>Email:</strong>
              <span>
                <a href="mailto:info@inventivemultimedia.com">info@inventivemultimedia.com</a>
              </span>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Inventive Multimedia Academy. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
