import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="glass nav-mobile-container" style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 4rem)',
      maxWidth: '1200px',
      zIndex: 50,
      padding: '1rem 2rem',
      borderRadius: '9999px',
      border: '1px solid var(--surface-border)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" className="nav-logo" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1px' }}>
          Porto<span className="text-gradient">folio</span>
        </Link>

        <div className="nav-desktop-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="#about" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-muted)', transition: 'color 0.3s' }}>Tentang</Link>
          <Link href="#projects" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-muted)', transition: 'color 0.3s' }}>Proyek</Link>
          <Link href="#skills" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-muted)', transition: 'color 0.3s' }}>Keahlian</Link>
          <Link href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem', width: 'auto' }}>
            Hubungi Saya
          </Link>
        </div>
      </div>
    </nav>
  );
}
