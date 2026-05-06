import React from 'react';

export default function Footer({ email }) {
  return (
    <footer style={{
      padding: '2rem 3rem',
      borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
      color: 'var(--muted)', fontFamily: 'var(--mono)', fontSize: 12,
      background: 'var(--bg)',
    }}>
      <div>© 2025 Anish Kumar Singh</div>
      <div>Designed & Built with ❤️</div>
      <div>{email}</div>
    </footer>
  );
}
