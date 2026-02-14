'use client';

import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import styles from './header.module.css';

type HeaderProps = {
  onChangeSection: (section: string) => void;
};

export default function Header({ onChangeSection }: HeaderProps) {
  return (
    <header className="header-border w-full z-50">
      <div className={`${styles.container} mx-auto flex justify-between pt-8 px-4 sm:px-8 lg:px-16`}>
        <div className="logo-item inline-flex items-center justify-center mb-4">
          <div className="contents-star">
            <Image
              className="fixed-small"
              src="/zestark-star.svg"
              alt="Zestark Star Logo"
              width={90}
              height={75}
              priority
            />
          </div>
          <div className={styles.contentsLogo}>
            <Image
              src="/zestark-logo.svg"
              alt="Zestark Logo"
              width={120}
              height={100}
              priority
            />
          </div>
        </div>
        <div className="navi-wrapper">
          <Navbar onChangeSection={onChangeSection} />
        </div>
      </div>
    </header>
  );
}