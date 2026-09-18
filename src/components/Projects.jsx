import React, { useState, useEffect } from 'react';
import { Layers, ShieldCheck, Database, Image, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

import sharebite1 from '../assets/sharebite/sharebite-1.png';
import sharebite2 from '../assets/sharebite/sharebite-2.png';
import sharebite3 from '../assets/sharebite/sharebite-3.png';
import sharebite4 from '../assets/sharebite/sharebite-4.png';
import sharebite5 from '../assets/sharebite/sharebite-5.png';
import sharebite6 from '../assets/sharebite/sharebite-6.png';
import sharebite7 from '../assets/sharebite/sharebite-7.png';
import sharebite8 from '../assets/sharebite/sharebite-8.png';
import sharebite9 from '../assets/sharebite/sharebite-9.png';
import sharebite10 from '../assets/sharebite/sharebite-10.png';
import sharebite11 from '../assets/sharebite/sharebite-11.png';

import outreach1 from '../assets/outreach/outreach-1.png';
import outreach2 from '../assets/outreach/outreach-2.png';
import outreach3 from '../assets/outreach/outreach-3.png';
import outreach4 from '../assets/outreach/outreach-4.png';
import outreach5 from '../assets/outreach/outreach-5.png';
import outreach6 from '../assets/outreach/outreach-6.png';
import outreach7 from '../assets/outreach/outreach-7.png';

import isgAutomation from '../assets/isg-automation.png';

const sharebiteScreenshots = [
  { src: sharebite1, title: 'ShareBite 1 - Landing Page Utama & Katalog Makanan' },
  { src: sharebite2, title: 'ShareBite 2 - Halaman Login Masuk Akun Pengguna' },
  { src: sharebite3, title: 'ShareBite 3 - Panel Utama Dashboard Admin' },
  { src: sharebite4, title: 'ShareBite 4 - Kelola Manajemen Pengguna & Unit Bisnis' },
  { src: sharebite5, title: 'ShareBite 5 - Chat Pusat Bantuan & Layanan Bantuan' },
  { src: sharebite6, title: 'ShareBite 6 - Dashboard Relawan & Katalog Donasi Terdekat' },
  { src: sharebite7, title: 'ShareBite 7 - Rincian Pembayaran QRIS & Peta Lokasi Penjemputan' },
  { src: sharebite8, title: 'ShareBite 8 - Konfirmasi Pembayaran Berhasil & Kode Verifikasi' },
  { src: sharebite9, title: 'ShareBite 9 - Dashboard Analitik Performa Unit Bisnis' },
  { src: sharebite10, title: 'ShareBite 10 - Kelola Katalog Menu Makanan Aktif' },
  { src: sharebite11, title: 'ShareBite 11 - Kelola Pesanan Masuk & Verifikasi Kode Transaksi' },
];

const outreachScreenshots = [
  { src: outreach1, title: 'OutReach 1 - Landing Page Infrastruktur Desa 3T' },
  { src: outreach2, title: 'OutReach 2 - Halaman Login Masuk Akun' },
  { src: outreach3, title: 'OutReach 3 - Panel Utama Dashboard Admin OutReach' },
  { src: outreach4, title: 'OutReach 4 - Kelola Pengajuan Infrastruktur Desa' },
  { src: outreach5, title: 'OutReach 5 - Kelola Stok & Inventaris Material Bangunan' },
  { src: outreach6, title: 'OutReach 6 - Portal Usulan Infrastruktur Perwakilan Desa' },
  { src: outreach7, title: 'OutReach 7 - Formulir Pengajuan Proyek Infrastruktur' },
];

const isgScreenshots = [
  { src: isgAutomation, title: 'Automation & Mapping Monthly ISG Report - PT Bank Rakyat Indonesia (Persero) Tbk' },
];

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [cardActiveImg, setCardActiveImg] = useState({});

  const projects = [
    {
      title: 'ShareBite',
      desc: 'Platform digital inovatif berbasis Laravel yang menghubungkan unit bisnis makanan (hotel, restoran, katering) dengan relawan & masyarakat untuk membagikan surplus makanan layak konsumsi.',
      team: 'Proyek Tim (7 Anggota)',
      contributions: [
        'Fitur Login',
        'Halaman Pembayaran QRIS',
        'Halaman Pembayaran Berhasil',
        'Halaman Pesanan Masuk',
        'Halaman Verifikasi Kode Pesanan',
        'Halaman Riwayat Transaksi',
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'CSS'],
      screenshots: sharebiteScreenshots,
    },
    {
      title: 'Outreach',
      desc: 'Platform pengajuan material infrastruktur digital yang menghubungkan perwakilan desa 3T (Terdepan, Terluar, Tertinggal) dengan sumber daya pembangunan pusat secara transparan. Dilengkapi dashboard statistik usulan, alur verifikasi pengajuan terstruktur, serta pengelolaan katalog stok material.',
      tech: ['React.js', 'JavaScript', 'HTML/CSS', 'MySQL'],
      screenshots: outreachScreenshots,
    },
    {
      title: 'Automation & Mapping ISG Report',
      desc: 'Sistem otomasi pemrosesan dan ekstraksi data laporan ISG di PT Bank Rakyat Indonesia (Persero) Tbk. Mengonversi serta memetakan data laporan berformat dokumen menjadi spreadsheet Excel secara presisi menggunakan JavaScript dan AI API integration.',
      tech: ['JavaScript', 'Gemini API', 'JSON Data Mapping'],
      screenshots: isgScreenshots,
    },
  ];

  const setCardImg = (projIdx, imgIdx) => {
    setCardActiveImg((prev) => ({ ...prev, [projIdx]: imgIdx }));
  };

  const openModal = (screenshots, index = 0) => {
    setActiveModal(screenshots);
    setCurrentImgIndex(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const nextImg = () => {
    if (activeModal) {
      setCurrentImgIndex((prev) => (prev + 1) % activeModal.length);
    }
  };

  const prevImg = () => {
    if (activeModal) {
      setCurrentImgIndex((prev) => (prev - 1 + activeModal.length) % activeModal.length);
    }
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextImg();
      } else if (e.key === 'ArrowLeft') {
        prevImg();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal]);

  return (
    <section id="projects" className="section">
      <div className="bg-gradient-mesh">
        <div className="blob blob-2" style={{ bottom: '10%', left: '5%' }}></div>
      </div>

      <div className="container">
        <h2 className="section-title">Proyek</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {projects.map((proj, idx) => {
            const activeImgIdx = cardActiveImg[idx] || 0;
            return (
              <div
                key={idx}
                className="glass-card project-card-horizontal"
                style={{
                  display: 'grid',
                  gridTemplateColumns: proj.screenshots && proj.screenshots.length > 0 ? '1fr 1fr' : '1fr',
                  gap: '36px',
                  alignItems: 'center',
                  padding: '36px',
                  borderRadius: '24px',
                }}
              >
                {/* Left Side: Keterangan / Details */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        backgroundColor: 'var(--accent-light)',
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {idx === 0 ? <Layers size={22} /> : idx === 1 ? <Database size={22} /> : <ShieldCheck size={22} />}
                    </div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {proj.title}
                    </h3>
                  </div>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '16px' }}>
                    {proj.desc}
                  </p>

                  {proj.team && (
                    <div style={{ marginBottom: '20px' }}>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          padding: '4px 12px',
                          borderRadius: '12px',
                          backgroundColor: 'var(--accent-light)',
                          color: 'var(--accent)',
                          display: 'inline-block',
                          marginBottom: '10px',
                        }}
                      >
                        👥 {proj.team}
                      </span>
                      {proj.contributions && (
                        <div style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                          <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                            Tanggung Jawab & Fitur yang Dikembangkan:
                          </strong>
                          <ul style={{ margin: 0, paddingLeft: '18px' }}>
                            {proj.contributions.map((item, cIdx) => (
                              <li key={cIdx} style={{ marginBottom: '3px' }}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tech Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          padding: '6px 14px',
                          borderRadius: '20px',
                          backgroundColor: 'var(--bg-primary)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-color)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Clear, Crisp Screenshot aligned from TOP with YouTube-style Fullscreen Button */}
                {proj.screenshots && proj.screenshots.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {/* Main Preview Box */}
                    <div
                      onClick={() => openModal(proj.screenshots, 0)}
                      style={{
                        position: 'relative',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: '2px solid var(--border-color)',
                        backgroundColor: 'var(--bg-primary)',
                        boxShadow: '0 8px 24px rgba(109, 40, 217, 0.1)',
                        height: '280px',
                      }}
                    >
                      <img
                        src={proj.screenshots[0].src}
                        alt={proj.screenshots[0].title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          display: 'block',
                        }}
                      />

                      {/* YouTube-style Fullscreen Icon Button at Bottom Right */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(proj.screenshots, 0);
                        }}
                        title="Lihat ukuran Penuh (Fullscreen)"
                        style={{
                          position: 'absolute',
                          bottom: '12px',
                          right: '12px',
                          backgroundColor: 'rgba(15, 10, 30, 0.75)',
                          backdropFilter: 'blur(6px)',
                          color: '#ffffff',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'var(--transition-fast)',
                          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--accent)';
                          e.currentTarget.style.borderColor = 'var(--accent)';
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(15, 10, 30, 0.75)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        <Maximize2 size={16} />
                        <span>Fullscreen</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Fullscreen Pure Photo View */}
      {activeModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={closeModal}
        >
          {/* Close Button floating top right */}
          <button
            onClick={closeModal}
            title="Tutup (Tekan Esc)"
            style={{
              position: 'fixed',
              top: '24px',
              right: '24px',
              zIndex: 10000,
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(6px)',
              transition: 'var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
          >
            <X size={24} />
          </button>

          {/* Left Slide Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImg();
            }}
            title="Sebelumnya (Panah Kiri ◀)"
            style={{
              position: 'fixed',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10000,
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              width: '52px',
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(6px)',
              transition: 'var(--transition-fast)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
          >
            <ChevronLeft size={30} />
          </button>

          {/* Right Slide Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImg();
            }}
            title="Selanjutnya (Panah Kanan ▶)"
            style={{
              position: 'fixed',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10000,
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              width: '52px',
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(6px)',
              transition: 'var(--transition-fast)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
          >
            <ChevronRight size={30} />
          </button>

          {/* Pure Full Photo (No frame, no border, no thumbnail container) */}
          <img
            src={activeModal[currentImgIndex].src}
            alt={activeModal[currentImgIndex].title}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)',
              display: 'block',
            }}
          />
        </div>
      )}

      {/* Style for responsive horizontal project layout */}
      <style>{`
        @media (max-width: 900px) {
          .project-card-horizontal {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
