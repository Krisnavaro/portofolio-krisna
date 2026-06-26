"use client";
import { useState } from 'react';

export default function Contact() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <section id="contact" className="section" style={{ margin: '4rem 1rem', textAlign: 'center' }}>
      <div className="container">
        <div className="glass-card animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
          <h2 className="section-title text-gradient" style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Let's Build Something Together</h2>
          <p className="delay-100" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.15rem', lineHeight: 1.8 }}>
            Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang kolaborasi. Mari wujudkan ide Anda menjadi realitas digital!
          </p>

          <div className="delay-200" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <a 
              href="mailto:krisnavaro3112@gmail.com" 
              className="btn btn-primary" 
              style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}
            >
              📧 Email Saya
            </a>
            <a 
              href="https://wa.me/6289637557846" 
              target="_blank" rel="noopener noreferrer" 
              className="btn btn-glass" 
              style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}
            >
              📱 WhatsApp
            </a>
            <a 
              href="https://www.instagram.com/kv.r_31/" 
              target="_blank" rel="noopener noreferrer" 
              className="btn btn-glass" 
              style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}
            >
              📸 Instagram
            </a>
          </div>

          <div style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem' }}>
            <a
              href="https://github.com/Krisnavaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient"
              style={{ fontWeight: 600, fontSize: '1.1rem' }}
            >
              GitHub
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
  );
}
