import React from 'react';

const styles = {
  nav: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    padding: '1.2rem 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backdropFilter: 'blur(20px)',
    background: 'rgba(10,10,15,0.7)',
    borderBottom: '1px solid rgba(124,106,247,0.2)',
  },
  logo: {
    fontFamily: 'var(--mono)',
    fontSize: '14px',
    color: 'var(--accent)',
    letterSpacing: '2px',
  },
  links: {
    display: 'flex',
    gap: '2rem',
  },
};

const links = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>AKS.dev</div>
      <div style={styles.links}>
        {links.map((l) => (
          <NavLink key={l} href={`#${l}`} label={l} />
        ))}
      </div>
    </nav>
  );
}

function NavLink({ href, label }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? 'var(--accent)' : 'var(--muted)',
        fontFamily: 'var(--mono)',
        fontSize: '13px',
        letterSpacing: '1px',
        transition: 'color 0.3s',
        position: 'relative',
        paddingBottom: '4px',
        borderBottom: hovered ? '1px solid var(--accent)' : '1px solid transparent',
      }}
    >
      {label}
    </a>
  );
}
