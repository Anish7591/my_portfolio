import React from 'react';

export default function SectionHeader({ number, title }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)',
        letterSpacing: 4, marginBottom: '0.5rem',
      }}>
        {number} / {title.toUpperCase()}
      </div>
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 800, letterSpacing: -1, marginBottom: '1rem',
      }}>
        {title}
      </h2>
      <div style={{
        width: 60, height: 3,
        background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
        borderRadius: 2,
      }} />
    </div>
  );
}
