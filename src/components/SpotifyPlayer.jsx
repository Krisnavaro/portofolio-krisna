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
      {/* Kotak Spotify Player */}
      {isOpen && (
        <div style={{
          width: '300px',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          pointerEvents: 'auto' // Aktifkan interaksi untuk iframe
        }}>
          <iframe 
            style={{ border: 0, borderRadius: '12px' }} 
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
      )}

      {/* Tombol Toggle (Buka/Tutup) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'var(--foreground)',
          padding: '10px 20px',
          borderRadius: '50px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: '500',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease',
          fontSize: '0.9rem',
          pointerEvents: 'auto' // Tombol harus bisa diklik
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>🎵</span>
        {isOpen ? 'Tutup Music Player' : 'Buka Music Player'}
      </button>
    </div>
  );
}
