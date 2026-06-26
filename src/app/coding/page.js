import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import Link from "next/link";
import ParticleBackground from "../../components/ParticleBackground";

export default function CodingPage() {
  return (
    <main style={{ position: 'relative', zIndex: 1, paddingBottom: '2rem' }}>
      <ParticleBackground />
      <Navbar />

      {/* Hero */}
      <section
        className="section"
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "8rem",
        }}
      >
        <div className="container animate-fade-in">
          <span
            style={{
              display: "inline-block",
              padding: "0.5rem 1.5rem",
              borderRadius: "9999px",
              background: "rgba(6, 182, 212, 0.1)",
              border: "1px solid rgba(6, 182, 212, 0.3)",
              color: "var(--accent)",
              marginBottom: "2rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase"
            }}
          >
            Coding Portfolio
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
            Front-End Developer
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
            Mahasiswa Teknik Informatika yang berfokus pada pengembangan digital,
            desain antarmuka, dan optimalisasi AI untuk menciptakan solusi yang
            menggabungkan logika teknologi dengan estetika visual.
          </p>

          <Link
            href="/"
            className="btn btn-glass delay-200 animate-fade-in"
          >
            &larr; Kembali ke Home
          </Link>
        </div>
      </section>
      <Projects />
      <Skills />
      <Contact />

      <footer
        style={{
          textAlign: "center",
          padding: "2rem 0",
          color: "var(--text-muted)",
          borderTop: "1px solid var(--surface-border)",
          marginTop: "2rem",
        }}
      >
        <p>
          © {new Date().getFullYear()} Krisnavaro Raihananta | Coding Portfolio
        </p>
      </footer>
    </main>
  );
}