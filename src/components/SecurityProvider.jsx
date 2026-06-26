"use client";

import { useEffect } from "react";

export default function SecurityProvider({ children }) {
  useEffect(() => {
    // Mencegah Klik Kanan (Context Menu)
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Mencegah Shortcut Developer Tools (F12, Ctrl+Shift+I, Ctrl+U, dll)
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i")) ||
        (e.ctrlKey && e.shiftKey && (e.key === "J" || e.key === "j")) ||
        (e.ctrlKey && e.shiftKey && (e.key === "C" || e.key === "c")) ||
        (e.ctrlKey && (e.key === "U" || e.key === "u"))
      ) {
        e.preventDefault();
      }
    };

    // Mencegah Drag and Drop gambar (agar tidak mudah disave)
    const handleDragStart = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
    <div style={{ 
      userSelect: "none", // Mencegah blok teks (copas)
      WebkitUserSelect: "none"
    }}>
      {children}
    </div>
  );
}
