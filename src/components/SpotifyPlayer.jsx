"use client";
import { useState } from "react";

export default function SpotifyPlayer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{
      position: 'fixed',
      bottom: '80px',
      left: '20px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '10px',
      pointerEvents: 'none' // Biarkan event klik tembus ke belakang jika meleset
    }}>
      <div style={{
        width: 'calc(100vw - 40px)',
        maxWidth: '300px',
        borderRadius: '12px',
        boxShadow: isOpen ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
        pointerEvents: isOpen ? 'auto' : 'none',
        opacity: isOpen ? 1 : 0,
        position: isOpen ? 'relative' : 'absolute',
        transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.3s ease-in-out',
        zIndex: isOpen ? 1 : -1
      }}>
        <iframe 
          style={{ border: 0, borderRadius: '12px' }} 
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator&theme=0" 
          width="100%" 
          height="80" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        ></iframe>
      </div>

      {/* Tombol Toggle (Buka/Tutup) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? 'Tutup Music Player' : 'Buka Music Player'}
        style={{
          width: '50px',
          height: '50px',
          padding: '0',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'var(--foreground)',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease',
          pointerEvents: 'auto' // Tombol harus bisa diklik
        }}
      >
        <span style={{ fontSize: '1.3rem' }}>🎵</span>
      </button>
    </div>
  );
}
