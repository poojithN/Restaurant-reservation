// Small inline SVG pictures so we do not need any image files.

export function Logo() {
  return (
    <span className="logo-wrap">
      <svg width="44" height="44" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r="20" fill="#2b2b2b" />
        <rect x="14" y="10" width="2.4" height="12" fill="#fff" />
        <rect x="18" y="10" width="2.4" height="12" fill="#fff" />
        <rect x="14" y="19" width="6.4" height="3" rx="1.5" fill="#fff" />
        <rect x="15.5" y="20" width="3.4" height="14" rx="1.5" fill="#fff" />
        <path d="M27 10 C32 12 32 22 27 24 L27 34 L29.5 34 L29.5 10 Z" fill="#fff" />
      </svg>
      <span className="logo-text">Restaurant<small>Food &amp; Drinks</small></span>
    </span>
  );
}

export function ShopIcon() {
  return (
    <svg width="120" height="110" viewBox="0 0 120 110">
      <rect x="14" y="34" width="92" height="64" fill="#d7d9de" />
      <rect x="22" y="44" width="76" height="52" fill="#eef0f3" />
      <rect x="30" y="52" width="26" height="22" fill="#2f7fe0" />
      <rect x="34" y="56" width="18" height="12" fill="#ffc542" />
      <rect x="68" y="52" width="24" height="44" fill="#2f7fe0" />
      <path d="M10 34 L18 12 H102 L110 34 Z" fill="#d6455d" />
      <rect x="10" y="30" width="100" height="8" rx="3" fill="#b8344a" />
      <circle cx="60" cy="24" r="15" fill="#ffc542" />
      <rect x="55" y="17" width="2" height="14" fill="#2b2b2b" />
      <rect x="61" y="17" width="2" height="14" fill="#2b2b2b" />
    </svg>
  );
}

export function ThumbIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
      <path d="M2 10h4v11H2zM8 21h9a2 2 0 0 0 2-1.5l2-7A2 2 0 0 0 19 10h-5l1-4a2 2 0 0 0-2-2l-5 6z" />
    </svg>
  );
}

export function SearchIcon({ color = "currentColor" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="22" y2="22" />
    </svg>
  );
}

export function ChefIllustration() {
  return (
    <svg viewBox="0 0 320 320" className="chef">
      <circle cx="170" cy="170" r="140" fill="#f08a00" />
      <path d="M32 120 A150 150 0 0 1 120 28" stroke="#f08a00" strokeWidth="3" fill="none" />
      <rect x="120" y="110" width="100" height="30" rx="6" fill="#fff" />
      <circle cx="130" cy="95" r="26" fill="#fff" />
      <circle cx="170" cy="82" r="30" fill="#fff" />
      <circle cx="210" cy="95" r="26" fill="#fff" />
      <ellipse cx="170" cy="190" rx="52" ry="58" fill="#f6c9a0" />
      <path d="M118 175 Q170 120 222 175 Q215 150 170 145 Q125 150 118 175Z" fill="#3a2a22" />
      <circle cx="150" cy="195" r="5" fill="#2b2b2b" />
      <circle cx="190" cy="195" r="5" fill="#2b2b2b" />
      <path d="M155 220 Q170 232 185 220" stroke="#b5483a" strokeWidth="3" fill="none" />
      <circle cx="140" cy="212" r="8" fill="#f4a09a" opacity=".6" />
      <circle cx="200" cy="212" r="8" fill="#f4a09a" opacity=".6" />
      <path d="M90 320 Q100 250 170 250 Q240 250 250 320Z" fill="#d83a34" />
    </svg>
  );
}
