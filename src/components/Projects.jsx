"use client";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Kopi BOR",
    description: "Merancang dan mengembangkan sistem presensi karyawan berbasis web untuk operasional bisnis Kopi BOR. Mengimplementasikan database MySQL dan back-end PHP untuk memastikan pencatatan kehadiran yang akurat.",
    tech: ["PHP", "MySQL", "XAMPP", "HTML", "CSS", "JavaScript"],
    images: [
      "/kopibor-logo.png",
      "/kopibor-dashboard.png",
      "/kopibor-login.png",
      "/kopibor-employees.png"
    ]
  },
  {
    title: "Djaya Aspalt",
    description: "Merancang tata letak visual dashboard sistem manajemen kontraktor dengan prinsip clean design dan hierarki informasi yang intuitif menggunakan Tailwind CSS.",
    tech: ["Tailwind CSS", "Figma", "HTML", "JavaScript"],
    images: [
      "/djaya-logo.png",
      "/djaya-dashboard.png",
      "/djaya-monitoring.png",
      "/djaya-projects.png"
    ]
  }
];

function ProjectCard({ project, index }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 3000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <div className="glass-card animate-fade-in" style={{ animationDelay: `${index * 150}ms`, display: 'flex', flexDirection: 'column' }}>
      {/* Bagian Gambar Proyek */}
      <div style={{
        width: '100%',
        height: '280px',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '1.5rem',
        border: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(0,0,0,0.2)',
        position: 'relative'
      }}>
        {project.images && project.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${project.title} - Image ${i + 1}`}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: i === currentImageIndex ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out'
            }}
          />
        ))}
      </div>

      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--foreground)', letterSpacing: '-0.5px' }}>
          {project.title}
        </h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '1.05rem' }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1rem' }}>
          {project.tech.map((tech, i) => (
            <span key={i} style={{
              fontSize: '0.8rem',
              fontWeight: 500,
              padding: '0.35rem 0.85rem',
              borderRadius: '8px',
              background: 'rgba(59, 130, 246, 0.1)',
              color: 'var(--primary)',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ marginTop: '2rem' }}>
      <div className="container">
        <h2 className="section-title text-gradient animate-fade-in">Pengalaman Project</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2.5rem' }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
