export default function Hero() {
  return (
    <section
      id="about"
      className="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "8rem",
      }}
    >
      <div
        className="container"
        style={{
          textAlign: "center",
        }}
      >
        <div
          className="animate-fade-in"
        >
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
              letterSpacing: "1px",
              textTransform: "uppercase"
            }}
          >
            Creative Technologist
          </span>

          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-1.5px",
            }}
          >
            Menghubungkan
            <span className="text-gradient">
              teknologi
            </span>
            <br />
            dan estetika visual.
          </h1>
        </div>

        <div
          className="animate-fade-in delay-200"
        >
          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--text-muted)",
              maxWidth: "700px",
              margin: "0 auto 3rem auto",
              lineHeight: 1.7,
              fontWeight: 400
            }}
          >
            Mahasiswa Teknik Informatika yang berfokus pada
            pengembangan digital, desain antarmuka, dan
            optimalisasi AI untuk menciptakan solusi yang
            menggabungkan logika teknologi dengan estetika visual.
          </p>
        </div>

        <div
          className="animate-fade-in delay-400"
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          <a
            href="#projects"
            className="btn btn-primary"
          >
            Lihat Proyek
          </a>

          <a
            href="#contact"
            className="btn btn-glass"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}