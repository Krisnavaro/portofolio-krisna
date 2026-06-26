"use client";
import { useState, useRef, useEffect } from "react";

export default function SpotifyPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
          alert("Pastikan file music.mp3 sudah ada di folder public!");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Sinkronisasi state jika lagu selesai
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => setIsPlaying(false);
      audio.addEventListener('ended', handleEnded);
      return () => audio.removeEventListener('ended', handleEnded);
    }
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      right: '20px',
      zIndex: 9999,
      pointerEvents: 'none'
    }}>
      {/* Native Audio Player (Hidden) */}
      <audio 
        ref={audioRef}
        src="/music.mp3" 
        preload="auto"
        loop
      />

      {/* Play/Pause Button */}
      <button 
        onClick={togglePlay}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
        style={{
          width: '40px',
          height: '40px',
          padding: '0',
          background: isPlaying ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#fff',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: isPlaying ? '0 0 15px var(--primary-glow)' : '0 4px 15px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease',
          pointerEvents: 'auto'
        }}
      >
        <span style={{ fontSize: '1rem', transform: isPlaying ? 'scale(1.1)' : 'scale(1)' }}>
          {isPlaying ? '⏸' : '🎵'}
        </span>
      </button>
    </div>
  );
}
