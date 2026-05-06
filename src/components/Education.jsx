import React from 'react';
import SectionHeader from './SectionHeader';
import useReveal from './useReveal';

export default function Education({ data }) {
  const { degree, school, year, cert } = data.education;
  const [hovered, setHovered] = React.useState(false);
  const { ref, visible } = useReveal();

  return (
    <section id="education" style={{ padding: '6rem 3rem', background: 'var(--bg2)' }}>
      <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s' }}>
        <SectionHeader number="05" title="Education" />
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: 'var(--card)',
            border: `1px solid ${hovered ? 'rgba(124,106,247,0.4)' : 'var(--border)'}`,
            borderRadius: 16, padding: '2.5rem',
            display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem',
            alignItems: 'center', maxWidth: 700,
            transform: hovered ? 'translateY(-4px)' : 'none',
            transition: 'all 0.3s',
            cursor: 'default',
          }}
        >
          <div style={{
            width: 70, height: 70, flexShrink: 0,
            background: 'linear-gradient(135deg, rgba(124,106,247,0.2), rgba(78,205,196,0.2))',
            borderRadius: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 30,
          }}>🎓</div>
          <div>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.3rem' }}>{degree}</div>
            <div style={{ color: 'var(--accent2)', fontFamily: 'var(--mono)', fontSize: 14, marginBottom: '0.5rem' }}>{school}</div>
            <div style={{ color: 'var(--muted)', fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 2, marginBottom: '0.8rem' }}>{year}</div>
            <span style={{
              display: 'inline-block', padding: '4px 12px',
              background: 'rgba(124,106,247,0.1)',
              border: '1px solid rgba(124,106,247,0.3)',
              borderRadius: 20, fontSize: 11,
              color: 'var(--accent)', fontFamily: 'var(--mono)',
            }}>{cert}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
