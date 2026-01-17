'use client';

import Image from 'next/image';
import Navbar from './navbar';

type HeaderProps = {
  onChangeSection: (section: string) => void;
};

export default function Header({ onChangeSection }: HeaderProps) {
  return (
    <header className="header-border w-full z-50">
      <div className="header-container mx-auto flex justify-between pt-8 px-4 sm:px-8 lg:px-16">
        {/* ロゴ */}
        <div className="logo-item inline-flex items-center justify-center mb-4">
          <div className="contents-star">
            <Image
              className="fixed-small"
              src="/zestark-star.svg"
              alt="Zestark Star Logo"
              width={96}
              height={77}
              priority
            />
          </div>
          <div className="contents-logo">
            <Image
              src="/zestark-logo.svg"
              alt="Zestark Logo"
              width={120}
              height={100}
              priority
            />
          </div>
        </div>
        {/* ナビゲーション */}
        <div className="navi-wrapper">
          <Navbar onChangeSection={onChangeSection} />
        </div>
      </div>
    </header>
  );
}
