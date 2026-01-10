import ServiceCard from '../ui/services-card';

type ServicesSectionProps = {
  onChangeSection: (section: string) => void;
};

export default function ServicesSection({ onChangeSection }: ServicesSectionProps) {
  return (
    <section id="services-section">
      <div className="services-container">
        <h2>SERVICES</h2>
        <p>私たちが提供する３つの事業領域</p>
      </div>

      <div className="card-container grid grid-cols-3 gap-[64px]">
        <ServiceCard
          icon="/icons/technique.svg"
          title="システム・アーキテクチャ設計"
          text={
            <>
            要件や課題を整理し、保守性・拡張性を考慮したシステム構造へと落とし込みます。
            </>
          }
          button="詳しく聞く"
          onClick={() => onChangeSection('contact')}
        />
        <ServiceCard
          icon="/icons/code.svg"
          title="技術教育・設計レビュー"
          text={
            <>
            「なぜその設計にするのか」を重視した技術教育と設計レビューを行います。
            </>
          }
          button="詳しく聞く"
          onClick={() => onChangeSection('contact')}
        />
        <ServiceCard
          icon="/icons/streaming.svg"
          title="コンテンツ発信"
          text={
            <>
            システム設計や技術選定を中心にnoteやDiscordを通じて学びあえる場を提供します。
            </>
          }
          button="詳しく聞く"
          onClick={() => onChangeSection('contact')}
        />
      </div>

    </section>
  );
}
