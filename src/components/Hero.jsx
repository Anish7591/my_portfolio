import React, { useEffect, useState } from 'react';

export default function Hero({ data }) {
  const { name, email, phone, location, roles, summary } = data.personal;
  const { stats } = data;

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    const word = roles[roleIndex];
    let timeout;
    if (!deleting) {
      if (charIndex < word.length) {
        timeout = setTimeout(() => {
          setDisplayed(word.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(word.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 60);
      } else {
        setDeleting(false);
        setRoleIndex((r) => (r + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, roles]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '8rem 3rem 4rem',
        overflow: 'hidden',
      }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'linear-gradient(rgba(124,106,247,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,106,247,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite',
        }}
      />
      {/* Orbs */}
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'rgba(124,106,247,0.15)', filter: 'blur(80px)',
        top: -100, right: -100,
        animation: 'orbFloat 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 300, height: 300, borderRadius: '50%',
        background: 'rgba(78,205,196,0.1)', filter: 'blur(80px)',
        bottom: 0, left: -50,
        animation: 'orbFloat 8s ease-in-out 3s infinite',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 800 }}>
        {/* Tag */}
        <div style={{
          fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--accent)',
          letterSpacing: 3, marginBottom: '1.5rem',
          display: 'flex', alignItems: 'center', gap: 10,
          animation: 'fadeUp 0.6s 0.2s both',
        }}>
          <span style={{ width: 40, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
          AVAILABLE FOR OPPORTUNITIES
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: -2,
          background: 'linear-gradient(135deg, #fff 40%, var(--accent) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'fadeUp 0.7s 0.4s both',
          marginBottom: '1rem',
        }}>
          {name.split(' ').slice(0, 2).join(' ')}<br />
          {name.split(' ').slice(2).join(' ')}
        </h1>

        {/* Role */}
        <div style={{
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          color: 'var(--muted)',
          marginBottom: '1.5rem',
          animation: 'fadeUp 0.7s 0.6s both',
        }}>
          Full Stack{' '}
          <span style={{ color: 'var(--accent2)', fontWeight: 600 }}>
            {displayed}
          </span>
          <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--accent)' }}>|</span>
        </div>

        {/* Desc */}
        <p style={{
          maxWidth: 500, color: 'var(--muted)', fontSize: 15,
          fontFamily: 'var(--mono)', lineHeight: 1.8,
          animation: 'fadeUp 0.7s 0.8s both',
          marginBottom: '2.5rem',
        }}>
          // {summary}
        </p>

        {/* CTA */}
        <div style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap',
          animation: 'fadeUp 0.7s 1s both',
          marginBottom: '3rem',
        }}>
          <a href="#projects" style={btnPrimary}>View Projects →</a>
          <a href="#contact" style={btnOutline}>Get In Touch</a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '3rem', flexWrap: 'wrap',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          animation: 'fadeUp 0.7s 1.2s both',
        }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--mono)' }}>{s.num}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: 1, fontFamily: 'var(--mono)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        color: 'var(--muted)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 2,
        animation: 'fadeUp 1s 1.5s both',
      }}>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(180deg, var(--accent), transparent)',
          animation: 'scrollDown 2s ease infinite',
        }} />
        SCROLL
      </div>
    </section>
  );
}

const btnPrimary = {
  padding: '0.8rem 2rem',
  background: 'var(--accent)',
  color: '#fff',
  border: 'none',
  borderRadius: 4,
  fontFamily: 'var(--mono)',
  fontSize: 13,
  letterSpacing: 1,
  cursor: 'pointer',
  transition: 'all 0.3s',
  display: 'inline-block',
};

const btnOutline = {
  padding: '0.8rem 2rem',
  background: 'transparent',
  color: 'var(--text)',
  border: '1px solid rgba(124,106,247,0.2)',
  borderRadius: 4,
  fontFamily: 'var(--mono)',
  fontSize: 13,
  letterSpacing: 1,
  cursor: 'pointer',
  transition: 'all 0.3s',
  display: 'inline-block',
};
