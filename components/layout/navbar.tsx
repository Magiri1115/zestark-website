'use client';

import { useState } from 'react';

type NavbarProps = {
  onChangeSection: (section: string) => void;
};

const NAV_ITEMS = [
  { id: 'home', label: 'HOME' },
  { id: 'services', label: 'SERVICES' },
  { id: 'aboutus', label: 'ABOUT' },
  { id: 'blog', label: 'BLOG' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navbar({ onChangeSection }: NavbarProps) {
  // 初期値は HOME
  const [activeSection, setActiveSection] = useState('home');

  const handleClick = (id: string) => {
    setActiveSection(id);
    onChangeSection(id);
  };

  return (
    <nav className="navbar">

        {/* ===== モバイル用トグル ===== */}
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="nav-hamburger">
        <span />
        <span />
        <span />
      </label>

      <div className="navbar-divst">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <div
              key={item.id}
              className={`nav-item ${isActive ? 'is-active' : ''}`}
            >
              <button
                type="button"
                className="nav-link"
                onClick={() => {
                  handleClick(item.id);
                  // CSSトグルを閉じる（副作用なし）
                  const checkbox = document.getElementById('nav-toggle') as HTMLInputElement;
                  if (checkbox) checkbox.checked = false;
                }}
              >
                <span className="nav-text">{item.label}</span>

              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
