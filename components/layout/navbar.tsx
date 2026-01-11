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
    setActiveSection(id);       // 表示状態の更新
    onChangeSection(id);        // 外部へ通知
  };

  return (
    <nav className="navbar">

      {/* 静的インジケータ */}
      <div className="nav-indicator-line">
        <span className="indicator-dot" />
      </div>

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
                onClick={() => handleClick(item.id)}
              >
                <span className="nav-text">{item.label}</span>

                {/* オービタルライン */}
                <span className="orbital-line" />
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
