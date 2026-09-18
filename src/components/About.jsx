import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const About = () => {
  const education = [
    {
      institution: 'Universitas Telkom',
      period: '2023 - Sekarang',
      degree: 'S1 Sistem Informasi',
      score: 'IPK: 3.75',
      details: 'Mempelajari Analisis & Perancangan Sistem Informasi, Basis Data, Pengembangan Web, Pemodelan UML, ArchiMate, serta manajemen proyek teknologi.',
    },
    {
      institution: 'SMAN 23 Bandung',
      period: '2020 - 2023',
      degree: 'MIPA (Matematika & Ilmu Pengetahuan Alam)',
      score: 'Rata-rata: 90.19',
      details: 'Aktif dalam bidang sains dan matematika. Mengembangkan kemampuan analisis dasar dan logika sistematis.',
    },
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Tentang Saya</h2>

        <div className="grid-2" style={{ alignItems: 'start', gap: '50px' }}>
          {/* Left Side: Summary Card */}
          <div className="glass-card" style={{ height: '100%' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '16px', fontWeight: 700 }}>
              Profil Profesional
            </h3>
            <p style={{ color: 'var(--text-body)', marginBottom: '24px', fontSize: '1rem', lineHeight: '1.7' }}>
              Saya adalah mahasiswi aktif S1 Sistem Informasi di Universitas Telkom angkatan 2023 dengan pengalaman organisasi yang beragam.
              Terbiasa bekerja dalam lingkungan yang terstruktur dan kolaboratif melalui berbagai kepanitiaan dan organisasi seperti himpunan.
            </p>
            <p style={{ color: 'var(--text-body)', marginBottom: '32px', fontSize: '1rem', lineHeight: '1.7' }}>
              Saat ini saya sedang magang sebagai <strong>Technical Writer di PT Bank Rakyat Indonesia (Persero) Tbk</strong>. Memiliki ketertarikan kuat di bidang <strong>software engineering</strong>, khususnya <strong>system analyst</strong>, dengan kemampuan berpikir analitis dan sistematis dalam memahami kebutuhan sistem. Berkomitmen untuk terus berkembang dan berkontribusi dalam merancang solusi teknologi yang efektif dan efisien.
            </p>

            {/* Quick Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '12px', backgroundColor: 'var(--bg-primary)' }}>
                <Award style={{ color: 'var(--accent)' }} size={24} />
                <div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>IPK Saat Ini</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>3.75 / 4.00</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '12px', backgroundColor: 'var(--bg-primary)' }}>
                <Calendar style={{ color: 'var(--accent)' }} size={24} />
                <div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Tahun Masuk</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>2023</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '12px', backgroundColor: 'var(--bg-primary)' }}>
                <MapPin style={{ color: 'var(--accent)' }} size={24} />
                <div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Lokasi</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Bandung, Indonesia</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '12px', backgroundColor: 'var(--bg-primary)' }}>
                <GraduationCap style={{ color: 'var(--accent)' }} size={24} />
                <div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Program Studi</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>S1 Sistem Informasi</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Education History */}
          <div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '24px', fontWeight: 700 }}>
              Riwayat Pendidikan
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    position: 'relative',
                    padding: '24px',
                    borderLeft: '4px solid var(--accent)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {edu.institution}
                      </h4>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                        {edu.degree}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: '0.85rem',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        backgroundColor: 'var(--accent-light)',
                        color: 'var(--text-secondary)',
                        fontWeight: 700
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '8px' }}>
                    {edu.score}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
