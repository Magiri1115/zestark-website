import PCNotice from "@/components/ui/pc-notice";

type HomeSectionProps = {
  onChangeSection: (section: string) => void;
}

export default function HomeSection({ onChangeSection }: HomeSectionProps) {
  return (
    <section id="home-section">
      <PCNotice />
      <div className="home-section-container">
        <div>
          <div className="w-full flex flex-col items-center justify-center text-center px-4">
            <h1>
              青き先駆・黒き革新
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              現実の課題を構造的に捉える設計力を軸に、技術支援・教育・発信を通じて<br />
              未来のクリエイターと新たな価値を創造します。
            </p>

            <div className="button-container flex items-center justify-center gap-6">
              <button
                className="home-button primary"
                onClick={() => onChangeSection('services')}
              >
                サービスを見る
              </button>

              <button
                className="action-button"
                onClick={() => onChangeSection('contact')}
              >
                話を聞く
                <span className="animate-shimmer" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
