'use client';

import { useState } from 'react';
import styles from './navbar.module.css';

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
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    setActiveSection(id);
    onChangeSection(id);
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.mobileMenuButton}
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Open menu"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <div className={`${styles.navbarDiv} ${isOpen ? styles.isOpen : ''}`}>
        {NAV_ITEMS.map(item => {
          const isActive = activeSection === item.id;

          return (
            <div key={item.id} className={`${styles.navItem} ${isActive ? styles.isActive : ''}`}>
              <button
                type="button"
                className={styles.navLink}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
}