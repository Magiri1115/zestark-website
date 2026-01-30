export type ServiceItem = {
  id: string;
  icon: string;
  title: string;
  text: string;
};

export const services: ServiceItem[] = [
  {
    id: 'architecture',
    icon: '/icons/technique.svg',
    title: 'アーキテクチャ設計',
    text: '課題を整理し、保守性・拡張性を考慮したシステム構造へと落とし込みます。',
  },
  {
    id: 'education',
    icon: '/icons/code.svg',
    title: '技術教育・設計レビュー',
    text: '「なぜその設計にするのか」を重視した技術教育と設計レビューを行います。',
  },
  {
    id: 'content',
    icon: '/icons/streaming.svg',
    title: 'コンテンツ発信',
    text: 'システム設計を中心にnoteやDiscordを通じて学びあえる場を提供します。',
  },
];
