'use client';

import { useState, useRef } from 'react';
import ServiceCard from '../ui/services-card';

type ServicesSectionProps = {
  onChangeSection: (section: string) => void;
};

const services = [
  {
    icon: '/icons/technique.svg',
    title: 'システム・アーキテクチャ設計',
    text: <>要件や課題を整理し、保守性・拡張性を考慮したシステム構造へと落とし込みます。</>,
  },
  {
    icon: '/icons/code.svg',
    title: '技術教育・設計レビュー',
    text: <>「なぜその設計にするのか」を重視した技術教育と設計レビューを行います。</>,
  },
  {
    icon: '/icons/streaming.svg',
    title: 'コンテンツ発信',
    text: <>システム設計や技術選定を中心にnoteやDiscordを通じて学びあえる場を提供します。</>,
  },
];

export default function ServicesSection({ onChangeSection }: ServicesSectionProps) {
  const [index, setIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchStartTime = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartTime.current = Date.now();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - touchStartX.current;
    const elapsed = Date.now() - touchStartTime.current;

    const velocity = Math.abs(diffX) / elapsed;

    const DISTANCE_THRESHOLD = 50;
    const VELOCITY_THRESHOLD = 0.5;

    if (
      Math.abs(diffX) > DISTANCE_THRESHOLD ||
      velocity > VELOCITY_THRESHOLD
    ) {
      if (diffX < 0) {
        setIndex((prev) => (prev + 1) % services.length);
      } else {
        setIndex((prev) => (prev - 1 + services.length) % services.length);
      }
    }
  };

  return (
    <section id="services-section">
      <div className="services-container">
        <h2>SERVICES</h2>
        <p>私たちが提供する３つの事業領域</p>
      </div>

      {/* PC */}
      <div className="card-container pc-only grid grid-cols-3 gap-[64px]">
        {services.map((s, i) => (
          <ServiceCard
            key={i}
            {...s}
            button="話を聞く"
            onClick={() => onChangeSection('contact')}
          />
        ))}
      </div>

      {/* Tablet / Mobile */}
      <div
        className="sp-only services-swipe-wrapper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ServiceCard
          {...services[index]}
          button="話を聞く"
          onClick={() => onChangeSection('contact')}
        />
        <p className="swipe-telop">← 左右にフリック →</p>
      </div>
    </section>
  );
}
