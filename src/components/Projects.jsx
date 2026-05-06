import React from 'react';
import SectionHeader from './SectionHeader';
import useReveal from './useReveal';

export default function Projects({ data }) {
  const { projects } = data;
  const { ref, visible } = useReveal();

  return (
    <section id="projects" style={{ padding: '6rem 3rem', background: 'var(--bg)' }}>
      <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s' }}>
        <SectionHeader number="04" title="Featured Work" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ num, title, desc, tech }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--card)',
        border: `1px solid ${hovered ? 'rgba(124,106,247,0.4)' : 'var(--border)'}`,
        borderRadius: 12, padding: '2rem',
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.4)' : 'none',
        transition: 'all 0.4s',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Bottom bar animation */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.4s',
      }} />

      <div style={{
        fontFamily: 'var(--mono)', fontSize: 40, fontWeight: 700,
        color: hovered ? 'rgba(124,106,247,0.3)' : 'rgba(124,106,247,0.1)',
        lineHeight: 1, marginBottom: '1rem', transition: 'color 0.3s',
      }}>{num}</div>

      <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.8rem' }}>{title}</div>
      <div style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7, fontFamily: 'var(--mono)', marginBottom: '1.2rem' }}>{desc}</div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {tech.map((t) => (
          <span key={t} style={{
            padding: '3px 10px',
            background: 'rgba(78,205,196,0.1)',
            border: '1px solid rgba(78,205,196,0.2)',
            borderRadius: 4, fontSize: 11,
            color: 'var(--accent2)', fontFamily: 'var(--mono)',
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}
