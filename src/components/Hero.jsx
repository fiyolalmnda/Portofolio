import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import profileImg from '../assets/profile.png';

const GithubIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['Technical Writer', 'System Analyst', 'Software Engineer', 'Web Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const activeRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === activeRole.length) {
      // Pause at full word
      typingSpeed = 2000;
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting
          ? activeRole.substring(0, charIndex - 1)
          : activeRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (prev + (isDeleting ? -1 : 1)));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        overflow: 'hidden',
      }}
    >
      {/* Background blobs for soft purple ambient glow */}
      <div className="bg-gradient-mesh">
        <div className="blob blob-1"></div>
        <div className="blob blob-2" style={{ right: '5%', top: '20%' }}></div>
      </div>

      <div className="container">
        <div className="grid-2" style={{ gap: '60px' }}>
          {/* Hero Left Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h1
              style={{
                fontSize: '3rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
              className="hero-title"
            >
              Fiyola Nur Alamanda
            </h1>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-body)',
                marginBottom: '40px',
                maxWidth: '520px',
                opacity: 0.9,
              }}
            >
              Mahasiswi S1 Sistem Informasi Telkom University & Technical Writer (Magang) di PT Bank Rakyat Indonesia (Persero) Tbk. Memiliki ketertarikan kuat di bidang software engineering dan system analyst dalam merancang solusi teknologi yang efektif dan efisien.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#experience" className="btn btn-primary">
                Lihat Pengalaman
              </a>
            </div>
          </div>

          {/* Hero Right Graphic */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Soft decorative background rings */}
            <div
              style={{
                position: 'absolute',
                width: '110%',
                height: '110%',
                border: '2px dashed var(--border-color)',
                borderRadius: '50%',
                opacity: 0.4,
                animation: 'float 8s ease-in-out infinite alternate',
                zIndex: 0,
              }}
            ></div>
            <div
              style={{
                position: 'absolute',
                width: '90%',
                height: '90%',
                border: '1px solid var(--border-color)',
                borderRadius: '50%',
                opacity: 0.3,
                zIndex: 0,
              }}
            ></div>

            {/* Avatar Img with Floating effect */}
            <div
              className="floating"
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(109, 40, 217, 0.15)',
                border: '4px solid var(--bg-secondary)',
                zIndex: 1,
              }}
            >
              <img
                src={profileImg}
                alt="Fiyola Nur Alamanda"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem !important;
          }
          #hero {
            padding-top: 100px !important;
            text-align: center;
          }
          #hero .grid-2 {
            display: flex;
            flex-direction: column-reverse;
            gap: 40px !important;
          }
          #hero p {
            margin-left: auto;
            margin-right: auto;
          }
          #hero div {
            justify-content: center;
          }
          .floating {
            width: 240px !important;
            height: 240px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
