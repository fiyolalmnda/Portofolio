import React, { useState } from 'react';
import { Code, Layout, Database, UserCheck, CheckCircle } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('hard');

  const hardSkills = [
    {
      category: 'Web Development & Frameworks',
      icon: <Layout size={20} />,
      skills: ['Laravel', 'Next.js', 'React.js', 'PHP', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      category: 'Bahasa Pemrograman',
      icon: <Code size={20} />,
      skills: ['Python', 'Java', 'C++'],
    },
    {
      category: 'Basis Data & Pemodelan Sistem',
      icon: <Database size={20} />,
      skills: ['MySQL', 'UML Modeling', 'ArchiMate Architecture'],
    },
    {
      category: 'Tools Project & Dokumen (Technical Writing)',
      icon: <CheckCircle size={20} style={{ color: 'var(--accent)' }} />,
      skills: ['Confluence', 'SharePoint', 'Jira', 'GitHub', 'Slack', 'Selenium (Automation)'],
    },
    {
      category: 'Data Processing & Productivity Workspace',
      icon: <Layout size={20} />,
      skills: ['Microsoft Excel (Pivot Table & Dashboard)', 'Microsoft Office (Word, PowerPoint)', 'Google Workspace (Docs, Spreadsheet, Slide)'],
    },
  ];

  const softSkills = [
    { name: 'Mudah Beradaptasi', desc: 'Cepat menyesuaikan diri dengan lingkungan kerja yang terstruktur maupun dinamis.' },
    { name: 'Problem Solving', desc: 'Kemampuan berpikir analitis dan sistematis dalam memahami kebutuhan sistem.' },
    { name: 'Manajemen Waktu', desc: 'Mengatur prioritas dengan baik di tengah berbagai tanggung jawab organisasi dan kerja.' },
    { name: 'Komunikasi yang Baik', desc: 'Mampu mendokumentasikan dan menjembatani alur komunikasi teknis & tim dengan jelas.' },
    { name: 'Berorientasi pada Detail', desc: 'Teliti dalam analisis data, pelaporan audit, serta penyusunan dokumentasi sistem.' },
    { name: 'Kerjasama Tim', desc: 'Terbiasa bekerja secara kolaboratif dalam lingkungan yang terstruktur.' },
    { name: 'Disiplin & Bertanggung Jawab', desc: 'Berkomitmen tinggi untuk terus berkembang dan berkontribusi secara efektif.' },
  ];

  return (
    <section id="skills" className="section">
      {/* Background blobs for soft purple glow */}
      <div className="bg-gradient-mesh">
        <div className="blob blob-1" style={{ top: '30%', right: '0%', left: 'auto' }}></div>
      </div>

      <div className="container">
        <h2 className="section-title">Keahlian</h2>

        {/* Tab Controls */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '16px', 
            marginBottom: '40px' 
          }}
        >
          <button
            onClick={() => setActiveTab('hard')}
            className={`btn ${activeTab === 'hard' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ borderRadius: '12px' }}
          >
            Hard Skills
          </button>
          <button
            onClick={() => setActiveTab('soft')}
            className={`btn ${activeTab === 'soft' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ borderRadius: '12px' }}
          >
            Soft Skills
          </button>
        </div>

        {/* Hard Skills Panel */}
        {activeTab === 'hard' && (
          <div className="grid-2" style={{ gap: '30px', alignItems: 'stretch' }}>
            {hardSkills.map((cat, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '16px' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div 
                    style={{ 
                      padding: '8px', 
                      borderRadius: '8px', 
                      backgroundColor: 'var(--accent-light)', 
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {cat.category}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        padding: '8px 16px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        borderRadius: '30px',
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-color)',
                        transition: 'var(--transition-fast)',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--accent)';
                        e.target.style.color = '#ffffff';
                        e.target.style.borderColor = 'var(--accent)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'var(--bg-primary)';
                        e.target.style.color = 'var(--text-secondary)';
                        e.target.style.borderColor = 'var(--border-color)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Soft Skills Panel */}
        {activeTab === 'soft' && (
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '24px' 
            }}
          >
            {softSkills.map((skill, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '12px',
                  padding: '24px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <UserCheck size={18} style={{ color: 'var(--accent)' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {skill.name}
                  </h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: '1.5' }}>
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
