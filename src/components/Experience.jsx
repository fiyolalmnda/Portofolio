import React, { useState } from 'react';
import { Calendar, Briefcase, Filter } from 'lucide-react';

const Experience = () => {
  const [filter, setFilter] = useState('all');

  const experiences = [
    {
      organization: 'EISD LABORATORY',
      role: 'Staf Publikasi Asisten Praktikum Proyek Perangkat Lunak',
      period: 'September 2026 - Sekarang',
      type: 'academic',
      details: [
        'Mengelola Learning Management System (LMS), meliputi penyusunan section, pengaturan jadwal dan tenggat waktu tugas.',
        'Mengajar dan melakukan penilaian untuk lebih dari 20+ praktikan.',
        'Membimbing praktikan dalam memahami konsep perangkat lunak (Github, Jira, Laravel, Automated Testing).',
      ],
    },
    {
      organization: 'EISD LABORATORY',
      role: 'Staf Publikasi Asisten Praktikum Analisis dan Perancangan Sistem Informasi',
      period: 'September 2026 - Sekarang',
      type: 'academic',
      details: [
        'Mengelola Learning Management System (LMS), meliputi penyusunan section, pengaturan jadwal dan tenggat waktu tugas.',
        'Mengajar dan melakukan penilaian untuk lebih dari 20+ praktikan.',
        'Membimbing praktikan dalam memahami konsep APSI.',
      ],
    },
    {
      organization: 'PT Bank Rakyat Indonesia (Persero) Tbk',
      role: 'Technical Writer (Internship)',
      period: 'Juli 2026 - September 2026',
      type: 'work',
      details: [
        'Melakukan data processing, mapping, dan reporting menggunakan Microsoft Excel, termasuk pivot table dan dashboard reporting.',
        'Mendokumentasikan hasil meeting, audit, assessment, dan remediation serta mengelolanya melalui Confluence, SharePoint, dan Jira.',
        'Mendukung monitoring project dan compliance activities melalui pengelolaan project highlight, achievement, RKF, serta data temuan audit.',
      ],
    },
    {
      organization: 'BPMSI (Badan Perwakilan Mahasiswa Sistem Informasi)',
      role: 'Bendahara BPMSI 2026',
      period: 'Oktober 2024 - Sekarang',
      type: 'bpmsi',
      details: [
        'Mengelola seluruh arus keuangan selama satu periode kepengurusan.',
        'Menyusun dan memonitor anggaran serta realisasi keuangan untuk setiap program kerja.',
        'Melakukan pencatatan dan pelaporan keuangan.',
        'Memastikan penggunaan dana sesuai dengan perencanaan dan kebutuhan.',
      ],
    },
    {
      organization: 'EAD LABORATORY',
      role: 'Staf Media Asisten Praktikum Analisis dan Perancangan Sistem Informasi',
      period: 'September 2025 - Desember 2025',
      type: 'academic',
      details: [
        'Mendesain modul praktikum Analisis dan Perancangan Sistem Informasi (APSI).',
        'Mengajar dan melakukan penilaian untuk lebih dari 20+ praktikan.',
        'Membimbing praktikan dalam memahami konsep APSI.',
      ],
    },
    {
      organization: 'SIECA FRI',
      role: 'Staf Research & Operation',
      period: 'April 2025 - Oktober 2025',
      type: 'event',
      details: [
        'Melakukan matching dan membentuk 20+ tim kompetisi secara efektif.',
        'Mengelola dan memperbarui informasi lomba secara berkala.',
        'Berkontribusi dalam pelaksanaan program Curriculum-Based Competition Guidance (CBCG).',
      ],
    },
    {
      organization: 'PKKMB TELKOM UNIVERSITY',
      role: 'Liaison Officer PKKMB 2025',
      period: 'Juni 2024 - September 2025',
      type: 'event',
      details: [
        'Menjadi penghubung antara mahasiswa baru dan panitia.',
        'Membimbing dan mendampingi mahasiswa baru.',
        'Menangani pertanyaan dan kendala mahasiswa baru.',
      ],
    },
    {
      organization: 'BPMSI (Badan Perwakilan Mahasiswa Sistem Informasi)',
      role: 'Staf Ahli Komisi Pengembangan BPMSI 2025',
      period: '2025',
      type: 'bpmsi',
      details: [
        'Mengembangkan inovasi untuk peningkatan mutu sistem di ruang lingkup BPMSI.',
        'Membentuk Panitia Pemilihan Umum HMSI (PPU HMSI).',
      ],
    },
    {
      organization: 'PKKMB TELKOM UNIVERSITY',
      role: 'Staf Logistik PKKMB 2024',
      period: 'Juni 2024 - September 2025',
      type: 'event',
      details: [
        'Mengelola proses peminjaman ruangan.',
        'Mengatur penyediaan 180+ konsumsi untuk peserta dan panitia.',
        'Memastikan kesiapan barang dan venue sesuai kebutuhan acara.',
      ],
    },
    {
      organization: 'BPMSI (Panitia Pemilihan Umum HMSI)',
      role: 'Staf Logistik PPUH (Panitia Pemilihan Umum HMSI) 2024',
      period: '2024',
      type: 'bpmsi',
      details: [
        'Mengelola proses peminjaman dan penjadwalan ruangan untuk kegiatan pemilihan.',
        'Menyediakan dan memastikan ketersediaan kebutuhan acara.',
        'Mengatur pengadaan dan distribusi konsumsi sesuai jumlah peserta dan jadwal kegiatan.',
      ],
    },
    {
      organization: 'SEARCH TELKOM UNIVERSITY',
      role: 'Staf Liaison Officer & Logistik Seminar Java Business Competition',
      period: 'April 2024 - September 2024',
      type: 'event',
      details: [
        'Mengelola proses peminjaman ruangan.',
        'Mengatur penyediaan 180+ konsumsi untuk peserta dan panitia.',
        'Memastikan kesiapan barang dan venue sesuai kebutuhan acara.',
      ],
    },
  ];

  const filteredExperiences = experiences.filter((exp) => {
    if (filter === 'all') return true;
    return exp.type === filter;
  });

  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Pengalaman Kerja & Organisasi</h2>

        {/* Filter Badges */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '50px',
          }}
        >
          <button
            onClick={() => setFilter('all')}
            style={{
              padding: '8px 18px',
              fontSize: '0.88rem',
              fontWeight: 600,
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              backgroundColor: filter === 'all' ? 'var(--accent)' : 'var(--bg-primary)',
              color: filter === 'all' ? '#ffffff' : 'var(--text-primary)',
              transition: 'var(--transition-fast)',
            }}
          >
            Semua
          </button>
          <button
            onClick={() => setFilter('work')}
            style={{
              padding: '8px 18px',
              fontSize: '0.88rem',
              fontWeight: 600,
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              backgroundColor: filter === 'work' ? 'var(--accent)' : 'var(--bg-primary)',
              color: filter === 'work' ? '#ffffff' : 'var(--text-primary)',
              transition: 'var(--transition-fast)',
            }}
          >
            Pengalaman Kerja
          </button>
          <button
            onClick={() => setFilter('bpmsi')}
            style={{
              padding: '8px 18px',
              fontSize: '0.88rem',
              fontWeight: 600,
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              backgroundColor: filter === 'bpmsi' ? 'var(--accent)' : 'var(--bg-primary)',
              color: filter === 'bpmsi' ? '#ffffff' : 'var(--text-primary)',
              transition: 'var(--transition-fast)',
            }}
          >
            Organisasi BPMSI
          </button>
          <button
            onClick={() => setFilter('academic')}
            style={{
              padding: '8px 18px',
              fontSize: '0.88rem',
              fontWeight: 600,
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              backgroundColor: filter === 'academic' ? 'var(--accent)' : 'var(--bg-primary)',
              color: filter === 'academic' ? '#ffffff' : 'var(--text-primary)',
              transition: 'var(--transition-fast)',
            }}
          >
            Akademik / Asisten Lab
          </button>
          <button
            onClick={() => setFilter('event')}
            style={{
              padding: '8px 18px',
              fontSize: '0.88rem',
              fontWeight: 600,
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              backgroundColor: filter === 'event' ? 'var(--accent)' : 'var(--bg-primary)',
              color: filter === 'event' ? '#ffffff' : 'var(--text-primary)',
              transition: 'var(--transition-fast)',
            }}
          >
            Kepanitiaan & Event
          </button>
        </div>

        {/* Timeline Layout */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Vertical Center Line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '20px',
              width: '4px',
              backgroundColor: 'var(--accent-light)',
              borderRadius: '2px',
            }}
          ></div>

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {filteredExperiences.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  position: 'relative',
                  paddingLeft: '50px',
                }}
              >
                {/* Timeline Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '6px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '4px solid var(--accent)',
                    zIndex: 2,
                    boxShadow: '0 0 10px var(--accent)',
                  }}
                ></div>

                {/* Card Info */}
                <div className="glass-card" style={{ width: '100%', padding: '24px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '12px',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: 'var(--accent)',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          display: 'inline-block',
                          marginBottom: '4px',
                        }}
                      >
                        {exp.organization}
                      </span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.85rem',
                        color: 'var(--text-body)',
                        opacity: 0.8,
                        fontWeight: 500,
                      }}
                    >
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet points details */}
                  <ul
                    style={{
                      paddingLeft: '18px',
                      color: 'var(--text-body)',
                      fontSize: '0.9rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                    }}
                  >
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx} style={{ listStyleType: 'disc' }}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {filteredExperiences.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-body)' }}>
                Belum ada pengalaman di kategori ini.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
