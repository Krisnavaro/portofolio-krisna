"use client";
import { useEffect, useRef } from 'react';

export default function DesignBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let shapes = [];
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Shape Configuration
    const shapeCount = Math.min(40, Math.floor(window.innerWidth / 30)); // Fewer but bigger shapes than particles
    const colors = ['rgba(236, 72, 153, 0.4)', 'rgba(168, 85, 247, 0.4)', 'rgba(99, 102, 241, 0.4)']; 
    const types = ['circle', 'square', 'triangle'];

    class Shape {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.0; // Slower movement
        this.vy = (Math.random() - 0.5) * 1.0;
        this.baseRadius = Math.random() * 15 + 10; // Bigger sizes: 10 to 25
        this.radius = this.baseRadius;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.type = types[Math.floor(Math.random() * types.length)];
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }

      update(mouseX, mouseY) {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        // Bounce off edges smoothly
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;

        // Mouse interaction (Repel & Scale)
        if (mouseX && mouseY) {
          const dx = this.x - mouseX;
          const dy = this.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200;

          if (distance < maxDist) {
            // Repel
            const force = (maxDist - distance) / maxDist;
            this.x += (dx / distance) * force * 2;
            this.y += (dy / distance) * force * 2;
            
            // Scale up slightly when near mouse
            this.radius = this.baseRadius + (force * 10);
            
            // Draw connection to mouse with a soft bezier curve instead of straight line
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            // Control point for a curved line to make it look more "designy" and organic
            const cpX = (this.x + mouseX) / 2 + (Math.sin(this.rotation) * 50);
            const cpY = (this.y + mouseY) / 2 + (Math.cos(this.rotation) * 50);
            ctx.quadraticCurveTo(cpX, cpY, mouseX, mouseY);
            ctx.strokeStyle = this.color.replace('0.4', String(0.3 * force));
            ctx.lineWidth = 1.5;
            ctx.stroke();
          } else {
            this.radius = this.baseRadius;
          }
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.fillStyle = this.color.replace('0.4', '0.1'); // Fill with very low opacity

        ctx.beginPath();
        if (this.type === 'circle') {
          ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        } else if (this.type === 'square') {
          ctx.rect(-this.radius, -this.radius, this.radius * 2, this.radius * 2);
        } else if (this.type === 'triangle') {
          ctx.moveTo(0, -this.radius);
          ctx.lineTo(this.radius, this.radius);
          ctx.lineTo(-this.radius, this.radius);
          ctx.closePath();
        }
        
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
    }

    // Initialize shapes array
    for (let i = 0; i < shapeCount; i++) {
      shapes.push(new Shape());
    }

    let mouse = { x: null, y: null };
    
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Main animation loop
    const animate = () => {
      // Clear with a slight fade effect for motion blur
      ctx.fillStyle = 'rgba(10, 10, 12, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < shapes.length; i++) {
        shapes[i].update(mouse.x, mouse.y);
        shapes[i].draw();
      }

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      {/* Background ambient glow to keep the design vibe */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '20%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 60%)', 
        filter: 'blur(80px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '15%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 60%)', 
        filter: 'blur(80px)',
      }} />
    </div>
  );
}
