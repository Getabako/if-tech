import React, { useEffect, useRef } from 'react';

const Stars: React.FC = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // スターの生成
    if (starsRef.current) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        starsRef.current.appendChild(star);
      }
    }

    // パーティクルの生成
    if (particlesRef.current) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  return (
    <>
      <div className="stars" ref={starsRef}></div>
      <div className="particles" ref={particlesRef}></div>
    </>
  );
};

export default Stars;