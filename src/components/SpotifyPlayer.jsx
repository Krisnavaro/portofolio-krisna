"use client";
import { useState, useRef } from "react";

export default function SpotifyPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef(null);

  const togglePlay = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const command = isPlaying ? 'pauseVideo' : 'playVideo';
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      right: '20px',
      zIndex: 9999,
      pointerEvents: 'none'
    }}>
      {/* Hidden YouTube Iframe for Audio Only */}
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}>
        <iframe 
          ref={iframeRef}
          src="https://www.youtube.com/embed/7d6rzXVlbjg?enablejsapi=1&autoplay=0&rel=0&controls=0" 
          title="YouTube Music Player"
          width="10" 
          height="10" 
          allow="autoplay"
        ></iframe>
      </div>

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
