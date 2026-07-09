'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/navbar.css';

const logoSrc = '/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          <span className="navbar-logo-mark" aria-hidden="true">
            <Image
              src={logoSrc}
              alt="Inventive Multimedia logo"
              width={80}
              height={80}
              className="navbar-logo-img"
              sizes="(max-width: 768px) 60px, 80px"
              priority
            />
          </span>
          <span className="navbar-logo-text">
            <span className="navbar-logo-brand-blue">INVENTIVE</span>
            <span className="navbar-logo-brand-red">MULTIMEDIA ACADEMY</span>
          </span>
        </Link>

        <button
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>About Us</Link>
          </li>
          <li>
            <Link href="/courses" onClick={closeMenu}>Courses</Link>
          </li>
          <li>
            <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
