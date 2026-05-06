import React from 'react';
import SectionHeader from './SectionHeader';
import useReveal from './useReveal';

const tagColors = {
  purple: { bg: 'rgba(124,106,247,0.1)', border: 'rgba(124,106,247,0.2)', color: 'var(--accent)' },
  green:  { bg: 'rgba(78,205,196,0.1)',  border: 'rgba(78,205,196,0.2)',  color: 'var(--accent2)' },
  red:    { bg: 'rgba(255,107,107,0.1)', border: 'rgba(255,107,107,0.2)', color: 'var(--accent3)' },
};

export default function Skills({ data }) {
  const { skills } = data;
  const { ref, visible } = useReveal();

  return (
    <section id="skills" style={{ padding: '6rem 3rem', background: 'var(--bg)' }}>
      <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s' }}>
        <SectionHeader number="02" title="Tech Stack" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {skills.map((s, i) => (
            <SkillCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ cat, name, tags, color }) {
  const [hovered, setHovered] = React.useState(false);
  const tc = tagColors[color] || tagColors.purple;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--card)',
        border: `1px solid ${hovered ? 'rgba(124,106,247,0.5)' : 'var(--border)'}`,
        borderRadius: 12,
        padding: '1.8rem',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'all 0.4s',
        cursor: 'default',
      }}
    >
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--accent)', letterSpacing: 2, marginBottom: '1rem' }}>{cat}</div>
      <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.2rem' }}>{name}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {tags.map((t) => (
          <span key={t} style={{
            padding: '4px 12px',
            background: tc.bg,
            border: `1px solid ${tc.border}`,
            borderRadius: 20,
            fontSize: 12, color: tc.color,
            fontFamily: 'var(--mono)',
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}
