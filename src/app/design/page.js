"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import DesignBackground from "../../components/DesignBackground";

export default function DesignPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showContactOptions, setShowContactOptions] = useState(false);

  const projects = [
    {
      title: "Dashboard Djaya Aspalt",
      description: "Merancang tata letak visual dasbor sistem manajemen kontraktor. Tantangan utamanya adalah menstrukturkan navigasi dan informasi layanan agar tetap bersih, modern, dan intuitif. Menerapkan prinsip clean design dengan Tailwind CSS. Fokus pada hierarki visual melalui kontras dark sidebar dan pemanfaatan white space agar informasi cepat ditangkap oleh pengguna.",
      tools: ["Figma", "UI/UX Design", "Layout Design"],
      type: "desktop",
      images: [
        "/djaya-logo.png",
        "/djaya-dashboard.png",
        "/djaya-monitoring.png",
        "/djaya-projects.png"
      ]
    },
    {
      title: "The 1975 - Music Poster Concept",
      description: "Eksplorasi visual dan komposisi surealis untuk konsep poster musik alternatif. Menggabungkan elemen fotografi dramatis dengan tipografi yang kuat dan minimalis.",
      tools: ["Adobe Photoshop", "Visual Composition", "Typography"],
      type: "poster",
      images: [
        "/mockups about you.png" // Menggunakan nama file yang sebenarnya
      ]
    },
    {
      title: "Social Media Promo 'Kopi Kopian'",
      description: "Desain ini merupakan implementasi tata letak fungsional untuk kebutuhan promosi digital. Fokus utama pengerjaan ada pada keterbacaan informasi. Saya menempatkan shape gelap sebagai latar belakang teks putih untuk menciptakan kontras yang kuat, sehingga pesan promo utama dapat langsung ditangkap oleh audiens dalam hitungan detik tanpa merusak estetika foto produk.",
      tools: ["Canva", "Adobe Illustrator", "Layout Design"],
      type: "square",
      images: [
        "/kopi promo.png" // Menggunakan nama file yang sebenarnya
      ]
    },
  ];

  const skills = [
    "Adobe Illustrator",
    "Figma",
    "Canva",
    "Visual Composition",
    "Layout Design",
    "Typography",
    "Generative AI",
    "UI/UX Thinking",
  ];

  return (
    <main style={{ position: 'relative', zIndex: 1, paddingBottom: '4rem' }}>
      <DesignBackground />
      <Navbar />
      
      {/* Hero */}
      <section
        id="about"
        className="section"
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div className="container animate-fade-in">
          <span
            style={{
              display: "inline-block",
              padding: "0.5rem 1.5rem",
              borderRadius: "9999px",
              background: "rgba(168, 85, 247, 0.1)",
              border: "1px solid rgba(168, 85, 247, 0.3)",
              color: "var(--secondary)",
              marginBottom: "2rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase"
            }}
          >
            Design Portfolio
          </span>

          <h1
            style={{
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-1px",
            }}
          >
            Graphic Designer
            <br />
            <span className="text-gradient">& Creative Technologist</span>
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto 3rem auto",
              color: "var(--text-muted)",
              lineHeight: "1.8",
              fontSize: "1.15rem"
            }}
          >
            Saya berfokus pada desain visual yang fungsional,
            penyusunan tata letak yang terstruktur, serta
            penyampaian informasi yang jelas melalui pendekatan
            desain modern dan minimalis.
          </p>

          <Link
            href="/"
            className="btn btn-glass delay-200 animate-fade-in"
          >
            &larr; Kembali ke Home
          </Link>
        </div>
      </section>

      {/* About & Philosophy */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Visi dan Target Karir */}
          <div className="glass-card animate-fade-in delay-100">
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--foreground)' }}>Visi dan Target Karir</h2>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '1.5rem', color: 'var(--secondary)' }}>Menghubungkan Logika Teknologi & Estetika Visual</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              Sebagai mahasiswa Informatika yang memiliki ketertarikan kuat
              pada desain visual, visi saya adalah menjadi seorang Creative Technologist—seseorang yang mampu memecahkan masalah teknis sekaligus
              menciptakan solusi estetis. Saya bertujuan untuk terus mengasah
              kemampuan desain kreatif menggunakan perangkat modern seperti
              Adobe Illustrator dan Canva, serta mengoptimalkan alur kerja kreatif
              melalui teknologi AI. Target saya adalah berkontribusi dalam tim kreatif
              yang menghargai sinergi antara logika fungsional dan keindahan visual.
            </p>
          </div>

          {/* Philosophy */}
          <div className="glass-card animate-fade-in delay-200">
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--foreground)' }}>Filosofi Desain Saya</h2>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '1.5rem', color: 'var(--secondary)' }}>Fungsionalitas di Atas Ornamen</h3>
            <blockquote
              style={{
                borderLeft: "4px solid var(--secondary)",
                paddingLeft: "1.5rem",
                color: "var(--text-muted)",
                lineHeight: "1.8",
                fontSize: "1.1rem",
                fontStyle: "italic",
                background: "rgba(168, 85, 247, 0.05)",
                padding: "1rem 1.5rem",
                borderRadius: "0 12px 12px 0"
              }}
            >
              "Bagi saya, desain yang baik bukan sekadar estetika, melainkan solusi visual yang tepat
              sasaran. Setiap elemen harus memiliki tujuan, menyampaikan pesan dengan jelas,
              dan fungsional. Saya memadukan tipografi yang presisi dengan tata letak bersih untuk
              menciptakan karya yang tidak hanya menarik secara visual, tapi juga komunikatif di
              berbagai media."
            </blockquote>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="glass-card animate-fade-in delay-300">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>Tools & Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="skill-badge-design"
                  style={{
                    padding: "0.6rem 1.5rem",
                    borderRadius: "9999px",
                    fontWeight: 500,
                    fontSize: "1rem",
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <h2 className="section-title text-gradient animate-fade-in" style={{ marginBottom: '3rem', textAlign: 'center' }}>Proyek Desain UI/UX</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            {projects.map((project, index) => (
              <div key={project.title} className="animate-fade-in mobile-col" style={{ 
                animationDelay: `${index * 150}ms`,
                display: 'flex',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                flexWrap: 'wrap',
                gap: '4rem',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem 0'
              }}>
                
                {/* Project Header */}
                <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.2rem', color: 'var(--foreground)' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: '1.15rem', marginBottom: '2rem' }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {project.tools.map((tool, i) => (
                      <span key={i} style={{ 
                        fontSize: '0.9rem', 
                        fontWeight: 600,
                        padding: '0.5rem 1.2rem', 
                        borderRadius: '50px', 
                        background: 'rgba(168, 85, 247, 0.1)', 
                        color: 'var(--secondary)',
                        border: '1px solid rgba(168, 85, 247, 0.2)'
                      }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Gallery Grid */}
                <div style={{ 
                  flex: '1 1 400px',
                  display: "grid", 
                  gridTemplateColumns: project.images.length === 1 ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: "1.5rem",
                  width: '100%',
                  maxWidth: project.images.length === 1 ? (project.type === 'poster' ? '400px' : '500px') : '100%'
                }}>
                  {project.images.map((imgUrl, imgIndex) => (
                    <div key={imgIndex} className="glass-card" style={{ 
                      padding: '0.5rem', 
                      borderRadius: '16px',
                      aspectRatio: project.type === 'mobile' ? '9/16' : 
                                   project.type === 'poster' ? '3/4' : 
                                   project.type === 'square' ? '1/1' : 
                                   '16/9',
                      overflow: 'hidden',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      background: 'rgba(0,0,0,0.3)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }}>
                      <img 
                        src={imgUrl} 
                        alt={`${project.title} screenshot ${imgIndex + 1}`} 
                        onClick={() => setSelectedImage(imgUrl)}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section" style={{ margin: '4rem 1rem', textAlign: 'center' }}>
        <div className="container">
          <div className="glass-card animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
            <h2 className="section-title text-gradient" style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Let's Work Together</h2>
            <p className="delay-100" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.15rem', lineHeight: 1.8 }}>
              Tertarik untuk berkolaborasi dalam proyek desain atau sekadar ingin menyapa? Mari wujudkan ide Anda menjadi realitas visual!
            </p>

            <div className="delay-200" style={{ position: 'relative', display: 'inline-block' }}>
              <button 
                onClick={() => setShowContactOptions(!showContactOptions)}
                className="btn btn-primary" 
                style={{ padding: '1rem 3rem', fontSize: '1.15rem', cursor: 'pointer', border: 'none', fontFamily: 'inherit' }}
              >
                Kirim Pesan
              </button>
              
              {showContactOptions && (
                <div style={{
                  position: 'absolute',
                  top: '120%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--surface)',
                  border: '1px solid var(--surface-border)',
                  borderRadius: '12px',
                  padding: '0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  minWidth: '200px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  zIndex: 10,
                  animation: 'fadeInUp 0.2s ease-out forwards'
                }}>
                  <a href="https://wa.me/6289637557846" target="_blank" rel="noopener noreferrer" style={{ padding: '0.8rem 1rem', borderRadius: '8px', color: 'var(--foreground)', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', fontWeight: 500, transition: 'background 0.2s' }}>📱 WhatsApp</a>
                  <a href="mailto:krisnavaro3112@gmail.com" style={{ padding: '0.8rem 1rem', borderRadius: '8px', color: 'var(--foreground)', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', fontWeight: 500, transition: 'background 0.2s' }}>📧 Gmail</a>
                </div>
              )}
            </div>

            <div style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem' }}>
              <a
                href="https://www.instagram.com/kv.r_31/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
                style={{ fontWeight: 600, fontSize: '1.1rem' }}
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/in/krisnavaro-raihananta-968323297/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient"
                style={{ fontWeight: 600, fontSize: '1.1rem' }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "2rem", color: "var(--text-muted)", opacity: 0.7 }}>
        © {new Date().getFullYear()} Krisnavaro Raihananta | Design Portfolio
      </footer>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '2rem',
            animation: 'fadeInUp 0.3s ease forwards'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%', 
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 0 50px rgba(0,0,0,0.8)'
            }} 
          />
          <button 
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              backdropFilter: 'blur(5px)'
            }}
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </main>
  );
}