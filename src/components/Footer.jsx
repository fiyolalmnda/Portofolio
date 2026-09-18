import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)',
        padding: '40px 0',
        textAlign: 'center',
        transition: 'var(--transition-smooth)',
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, var(--text-primary), var(--accent))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Fiyola Nur Alamanda
        </h3>

        {/* Quick Footer Links */}
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#about" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-body)', opacity: 0.8 }} onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.8}>Tentang</a>
          <a href="#skills" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-body)', opacity: 0.8 }} onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.8}>Keahlian</a>
          <a href="#experience" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-body)', opacity: 0.8 }} onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.8}>Pengalaman</a>
          <a href="#projects" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-body)', opacity: 0.8 }} onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.8}>Proyek</a>
          <a href="#contact" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-body)', opacity: 0.8 }} onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.8}>Kontak</a>
          <a href="https://github.com/fiyolalmnda" target="_blank" rel="noreferrer" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', opacity: 0.9 }} onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.9}>GitHub</a>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-body)', opacity: 0.7 }}>
          &copy; {currentYear} Fiyola Nur Alamanda. All rights reserved.
        </div>
        
        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
          Dibuat dengan ❤️ & React JS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
