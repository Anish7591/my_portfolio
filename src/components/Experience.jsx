import React from 'react';
import SectionHeader from './SectionHeader';
import useReveal from './useReveal';

export default function Experience({ data }) {
  const { experience } = data;
  const { ref, visible } = useReveal();

  return (
    <section id="experience" style={{ padding: '6rem 3rem', background: 'var(--bg2)' }}>
      <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s' }}>
        <SectionHeader number="03" title="Work History" />
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 1,
            background: 'linear-gradient(180deg, var(--accent), var(--accent2), transparent)',
          }} />
          {experience.map((exp, i) => (
            <TimelineItem key={i} {...exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ period, title, company, points, color, index }) {
  const dotColor = color === 'teal' ? 'var(--accent2)' : 'var(--accent)';
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        paddingLeft: '2rem',
        paddingBottom: '3rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-20px)',
        transition: `all 0.6s ${index * 0.2}s`,
      }}
    >
      {/* Dot */}
      <div style={{
        position: 'absolute', left: '-2rem', top: 6,
        width: 12, height: 12, borderRadius: '50%',
        background: dotColor,
        border: '2px solid var(--bg2)',
        boxShadow: `0 0 0 4px rgba(124,106,247,0.2)`,
        animation: 'pulse 2s infinite',
      }} />

      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 2, marginBottom: '0.5rem' }}>
        {period}
      </div>
      <div style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.3rem' }}>{title}</div>
      <div style={{ color: 'var(--accent2)', fontSize: 14, marginBottom: '1rem', fontFamily: 'var(--mono)' }}>{company}</div>
      <ul style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, fontFamily: 'var(--mono)' }}>
        {points.map((p, j) => (
          <li key={j} style={{ marginBottom: '0.4rem' }}>
            <span style={{ color: 'var(--accent)' }}>→ </span>{p}
          </li>
        ))}
      </ul>
    </div>
  );
}
