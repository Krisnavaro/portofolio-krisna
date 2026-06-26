"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import MatrixRain from "../components/MatrixRain";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [showMatrix, setShowMatrix] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Kandidat Magang Creative Technologist";

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
    
    return () => clearInterval(typeInterval);
  }, []);
  return (
    <main style={{ position: "relative", zIndex: 1, paddingBottom: "4rem" }}>
      {/* Matrix Easter Egg */}
      {showMatrix && <MatrixRain />}

      {/* Blended Background: Coding (Left) & Design (Right) Seamlessly */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: `
          radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 60%)
        `
      }}>
        {/* Tech Grid (Left) smoothly fading out to the center */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to right, black 20%, transparent 60%)',
          WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent 60%)'
        }} />
        
        {/* Design Texture Glow (Right) smoothly fading out to the center */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.03) 0%, transparent 40%)',
          maskImage: 'linear-gradient(to left, black 20%, transparent 60%)',
          WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent 60%)'
        }} />
      </div>

      {/* Intro Section - Full Height */}
      <section style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem" }}>
        <div
          className="glass-card animate-fade-in"
          style={{
            textAlign: "center",
            maxWidth: "800px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div
              className="profile-img-wrapper"
              onClick={() => {
                const nc = clickCount + 1;
                setClickCount(nc);
                if (nc >= 5) setShowMatrix(true);
              }}
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid var(--surface-border)',
                boxShadow: '0 0 30px var(--primary-glow)',
                background: 'var(--surface)',
              }}
            >
              {/* Ganti '/foto-profil.jpg' dengan nama file foto asli Anda nanti di folder public */}
              <img
                src="/krisnavaro.jpg"
                alt="Krisnavaro Raihananta"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          <p
            className="text-gradient"
            style={{
              fontWeight: "700",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "1rem",
              fontSize: "0.9rem",
              minHeight: "1.5rem"
            }}
          >
            {typedText}
            <span style={{ 
              animation: 'blink 1s step-end infinite',
              opacity: typedText.length === fullText.length ? 0 : 1,
              marginLeft: '2px',
              color: 'var(--primary)'
            }}>|</span>
          </p>

          <h1
            className="glitch-text-effect"
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              margin: "0 0 1.5rem 0",
              lineHeight: "1.1",
              fontWeight: "800",
              letterSpacing: "-1px"
            }}
          >
            KRISNAVARO
            <br />
            RAIHANANTA
          </h1>

          <p
            className="delay-100"
            style={{
              color: "var(--text-muted)",
              maxWidth: "600px",
              margin: "0 auto 3rem",
              lineHeight: "1.8",
              fontSize: "1.1rem"
            }}
          >
            Menghubungkan logika teknologi dengan estetika visual.
            Mahasiswa Informatika yang berfokus pada pengembangan web,
            UI/UX, desain visual, dan solusi digital kreatif.
          </p>

          <div
            className="delay-200"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/coding"
              className="btn"
              style={{
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.5)',
                color: '#fff',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                fontWeight: 600,
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.2)',
                textDecoration: 'none'
              }}
            >
              💻 Explore Coding
            </Link>

            <Link
              href="/design"
              className="btn"
              style={{
                background: 'rgba(236, 72, 153, 0.1)',
                border: '1px solid rgba(236, 72, 153, 0.5)',
                color: '#fff',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                fontWeight: 600,
                boxShadow: '0 0 15px rgba(236, 72, 153, 0.2)',
                textDecoration: 'none'
              }}
            >
              🎨 Explore Design
            </Link>

            <a
              href="/krisnavaro_cv.pdf"
              download
              className="btn btn-glass"
              style={{ borderColor: "var(--primary)", color: "var(--foreground)" }}
            >
              📄 Download CV
            </a>
          </div>
        </div>
      </section>

      {/* CV Section - Modern Timeline */}
      <section id="resume" className="container animate-fade-in delay-200" style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1.5rem 4rem 1.5rem' }}>
         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
            
            {/* Left Column - Profile & Skills Summary */}
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <h3 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>Profil Singkat</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Mahasiswa Teknik Informatika (Semester 5) yang berfokus pada pengembangan digital sebagai Creative Technologist. Memiliki ketertarikan kuat dalam memadukan logika pemrograman dengan estetika antarmuka UI/UX.
                </p>
              </div>

              <div>
                <h3 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>Keahlian Inti</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {['Java', 'Python', 'PHP', 'Tailwind CSS', 'MySQL', 'Figma', 'UI/UX Design', 'Generative AI'].map(skill => (
                    <span key={skill} style={{ 
                      padding: '0.4rem 1rem', 
                      borderRadius: '50px', 
                      background: 'rgba(255,255,255,0.05)', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      fontSize: '0.9rem',
                      color: 'var(--foreground)'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Vertical Timeline */}
            <div style={{ flex: '1 1 350px', paddingLeft: '1.8rem', borderLeft: '2px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '2.5rem', marginLeft: '0.5rem' }}>
              
              <h3 className="text-gradient" style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontWeight: 700, marginLeft: '-1rem' }}>Pengalaman & Pendidikan</h3>
              
              {/* Timeline Item 1 */}
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-2.25rem', top: '0.2rem', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 15px var(--primary-glow)' }}></div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.3rem' }}>Sistem Presensi Web "Kopi BOR"</h4>
                <p style={{ color: 'var(--accent)', fontSize: '0.95rem', marginBottom: '0.8rem', fontWeight: 500 }}>Pengembang Independen • Juli 2025</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  Merancang dan mengembangkan sistem presensi karyawan berbasis web menggunakan PHP dan MySQL (XAMPP) untuk memastikan pencatatan kehadiran yang akurat secara operasional.
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-2.25rem', top: '0.2rem', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 15px var(--primary-glow)' }}></div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.3rem' }}>Dashboard "Djaya Aspalt"</h4>
                <p style={{ color: 'var(--accent)', fontSize: '0.95rem', marginBottom: '0.8rem', fontWeight: 500 }}>Proyek Portofolio UI/UX • Juni 2025</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  Merancang tata letak visual sistem manajemen kontraktor dengan prinsip clean design, serta mengeksekusi antarmuka menggunakan framework Tailwind CSS.
                </p>
              </div>

              {/* Timeline Item 3 */}
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-2.25rem', top: '0.2rem', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--secondary)' }}></div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.3rem' }}>S1 Teknik Informatika</h4>
                <p style={{ color: 'var(--accent)', fontSize: '0.95rem', marginBottom: '0.8rem', fontWeight: 500 }}>Universitas Bina Sarana Informatika • Semester 6</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  Berfokus pada praktik pengembangan front-end, database management, dan perancangan antarmuka visual yang responsif berpusat pada pengalaman pengguna.
                </p>
              </div>

              {/* Timeline Item 4 */}
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-2.25rem', top: '0.2rem', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--secondary)', opacity: 0.5 }}></div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.3rem' }}>Teknik Komputer dan Jaringan</h4>
                <p style={{ color: 'var(--accent)', fontSize: '0.95rem', marginBottom: '0.8rem', fontWeight: 500 }}>SMK 3 Perguruan Cikini • Lulus 2021</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  Mempelajari dasar infrastruktur jaringan, perakitan perangkat keras, dan pemecahan masalah teknis (troubleshooting).
                </p>
              </div>

            </div>
         </div>
      </section>

      <footer
        className="delay-300"
        style={{
          marginTop: "4rem",
          textAlign: "center",
          color: "var(--text-muted)",
          fontSize: "0.9rem",
          opacity: 0.7
        }}
      >
        © {new Date().getFullYear()} Krisnavaro Raihananta
      </footer>
    </main>
  );
}