import React, { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const handle = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      width: 400, height: 400, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(124,106,247,0.08) 0%, transparent 70%)',
      pointerEvents: 'none',
      left: pos.x, top: pos.y,
      transform: 'translate(-50%, -50%)',
      transition: 'left 0.1s ease, top 0.1s ease',
      zIndex: 999,
    }} />
  );
}
