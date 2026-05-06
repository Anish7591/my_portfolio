import React from 'react';
import useReveal from './useReveal';

export default function Contact({ data }) {
  const { email, phone, location, linkedin } = data.personal;
  const { ref, visible } = useReveal();

  const contacts = [
    {
      icon: '💼',
      label: 'LinkedIn',
      sub: 'Send a message',
      href: linkedin,
      color: '#0a66c2',
    },
    {
      icon: '📧',
      label: 'Gmail',
      sub: email,
      href: `https://mail.google.com/mail/?view=cm&to=${email}&su=Hello Anish!&body=Hi Anish, I came across your portfolio and would love to connect.`,
      color: 'var(--accent)',
    },
    {
      icon: '📱',
      label: 'Phone / WhatsApp',
      sub: phone,
      href: `tel:${phone}`,
      color: 'var(--accent2)',
    },
    {
      icon: '📍',
      label: 'Location',
      sub: location,
      href: `https://www.google.com/maps/search/${encodeURIComponent(
        location
      )}`,
      color: '#ff6b6b',
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 3rem',
        background: 'var(--bg)',
        textAlign: 'center',
      }}
    >
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(30px)',
          transition: 'all 0.7s',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            color: 'var(--accent)',
            letterSpacing: 4,
            marginBottom: '1rem',
          }}
        >
          06 / CONTACT
        </div>

        <h2
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800,
            letterSpacing: -2,
            marginBottom: '1rem',
            background:
              'linear-gradient(135deg, #fff, var(--accent) 60%, var(--accent2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Let's Build
          <br />
          Together.
        </h2>

        <p
          style={{
            color: 'var(--muted)',
            fontFamily: 'var(--mono)',
            fontSize: 14,
            marginBottom: '3rem',
          }}
        >
          // Open to internships, freelance projects & collaborations
        </p>

        {/* Contact Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            maxWidth: 900,
            margin: '0 auto 3rem',
          }}
        >
          {contacts.map((c) => (
            <ContactCard key={c.label} {...c} />
          ))}
        </div>

        {/* Primary CTA */}
        <a
          href={`https://mail.google.com/mail/?view=cm&to=${email}&su=Hello Anish!&body=Hi Anish, I came across your portfolio and would love to connect.`}
          target="_blank"
          rel="noreferrer"
          style={{
            padding: '0.9rem 2.5rem',
            background: 'var(--accent)',
            color: '#fff',
            borderRadius: 4,
            fontFamily: 'var(--mono)',
            fontSize: 14,
            letterSpacing: 1,
            cursor: 'pointer',
            display: 'inline-block',
            textDecoration: 'none',
          }}
        >
          Send a Message →
        </a>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, sub, href, color }) {
  const [hovered, setHovered] = React.useState(false);

  const isExternal =
    href.startsWith('http') || href.startsWith('https');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '1.5rem 1.2rem',
        background: hovered
          ? 'rgba(255,255,255,0.05)'
          : 'var(--card)',
        border: `1px solid ${
          hovered ? color : 'var(--border)'
        }`,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.6rem',
        transform: hovered ? 'translateY(-5px)' : 'none',
        boxShadow: hovered
          ? '0 10px 30px rgba(0,0,0,0.3)'
          : 'none',
        transition: 'all 0.3s',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      <div style={{ fontSize: 28, lineHeight: 1 }}>
        {icon}
      </div>

      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: hovered ? color : 'var(--text)',
          transition: 'color 0.3s',
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: 11,
          color: 'var(--muted)',
          fontFamily: 'var(--mono)',
          textAlign: 'center',
          wordBreak: 'break-all',
        }}
      >
        {sub}
      </div>

      <div
        style={{
          marginTop: '0.3rem',
          fontSize: 11,
          color: color,
          fontFamily: 'var(--mono)',
          opacity: hovered ? 1 : 0,
          transform: hovered
            ? 'translateY(0)'
            : 'translateY(4px)',
          transition: 'all 0.3s',
        }}
      >
        Click to open →
      </div>
    </a>
  );
}