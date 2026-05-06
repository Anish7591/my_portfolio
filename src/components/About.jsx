import React from 'react';
import SectionHeader from './SectionHeader';
import useReveal from './useReveal';

export default function About({ data }) {
  const { summary, summary2, summary3 } = data.personal;
  const { strengths } = data;
  const { ref, visible } = useReveal();

  return (
    <section id="about" style={{ padding: '6rem 3rem', background: 'var(--bg2)' }}>
      <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s' }}>
        <SectionHeader number="01" title="About" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Text */}
          <div>
            {[summary, summary2, summary3].map((p, i) => (
              <p key={i} style={{
                color: 'var(--muted)', fontSize: 15, marginBottom: '1rem',
                lineHeight: 1.9, fontFamily: 'var(--mono)',
              }}>{p}</p>
            ))}
          </div>

          {/* Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {strengths.map((s, i) => (
              <HighlightCard key={i} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ icon, title, sub }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '1.2rem 1.5rem',
        background: 'var(--card)',
        border: `1px solid ${hovered ? 'rgba(124,106,247,0.4)' : 'var(--border)'}`,
        borderRadius: 8,
        display: 'flex', alignItems: 'center', gap: '1rem',
        transform: hovered ? 'translateX(5px)' : 'none',
        transition: 'all 0.3s',
        borderLeft: hovered ? '3px solid var(--accent)' : '1px solid var(--border)',
        cursor: 'default',
      }}
    >
      <div style={{
        width: 40, height: 40,
        background: 'rgba(124,106,247,0.1)',
        borderRadius: 8,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 18, flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{title}</div>
        <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>{sub}</div>
      </div>
    </div>
  );
}
