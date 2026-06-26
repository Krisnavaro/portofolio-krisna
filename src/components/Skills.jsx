const skillCategories = [
  {
    title: "Programming",
    skills: [
      "Java",
      "Python",
      "PHP",
      "MySQL",
      "Tailwind CSS"
    ]
  },
  {
    title: "Tools",
    skills: [
      "Visual Studio Code",
      "XAMPP",
      "Git & GitHub",
      "Figma"
    ]
  },
  {
    title: "Creative Technology",
    skills: [
      "Generative AI",
      "Prompt Engineering",
      "UI/UX Design",
      "Wireframing"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title text-gradient animate-fade-in">Keahlian Utama</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                color: 'var(--primary)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: '0.8rem',
                letterSpacing: '-0.5px'
              }}>
                {category.title}
              </h3>
              <ul style={{ listStyle: 'none' }}>
                {category.skills.map((skill, i) => (
                  <li key={i} style={{
                    marginBottom: '0.8rem',
                    color: 'var(--foreground)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    fontSize: '1.05rem',
                    fontWeight: 400
                  }}>
                    <span style={{
                      color: 'var(--accent)',
                      fontSize: '1.2rem',
                      textShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
                    }}>▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
