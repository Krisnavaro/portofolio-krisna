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
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#fff',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          transition: 'all 1.5s ease-in-out',
          pointerEvents: 'auto',
          opacity: isPlaying ? 0.15 : 1,
          transform: isPlaying ? 'scale(0.8)' : 'scale(1)'
        }}
      >
        <span style={{ fontSize: '1rem', transition: 'all 0.5s' }}>
          {isPlaying ? '⏸' : '🎵'}
        </span>
      </button>
    </div>
  );
}
