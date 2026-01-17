'use client';

import ServiceCard from '../ui/services-card';
import SwipeContainer from '../interaction/swipe-container';

type Props = {
  onChangeSection: (section: string) => void;
};

const services = [
  {
    icon: '/icons/technique.svg',
    title: 'アーキテクチャ設計',
    text: <>課題を整理し、保守性・拡張性を考慮したシステム構造へと落とし込みます。</>,
  },
  {
    icon: '/icons/code.svg',
    title: '技術教育・設計レビュー',
    text: <>「なぜその設計にするのか」を重視した技術教育と設計レビューを行います。</>,
  },
  {
    icon: '/icons/streaming.svg',
    title: 'コンテンツ発信',
    text: <>システム設計を中心にnoteやDiscordを通じて学びあえる場を提供します。</>,
  },
];

export default function ServicesView({ onChangeSection }: Props) {
  return (
    <section id="services-section">
      <div className="services-container">
        <h2>SERVICES</h2>
        <p>私たちが提供する３つの事業領域</p>
      </div>

      <div className="pc-only grid-cols-3">
        {services.map((s, i) => (
          <ServiceCard
            key={i}
            {...s}
            button="話を聞く"
            onClick={() => onChangeSection('contact')}
          />
        ))}
      </div>

      <div className="sp-only">
        <SwipeContainer length={services.length}>
          {(index) => (
            <>
              <ServiceCard
                {...services[index]}
                button="話を聞く"
                onClick={() => onChangeSection('contact')}
              />
              <p className="swipe-telop">← 左右にフリック →</p>
            </>
          )}
        </SwipeContainer>
      </div>
    </section>
  );
}
