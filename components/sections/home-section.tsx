import PCNotice from "@/components/emergency/emergency-notice";

type HomeSectionProps = {
  onChangeSection: (section: string) => void;
}

export default function HomeSection({ onChangeSection }: HomeSectionProps) {
  return (
    <section id="home-section">
      <div className="home-section-container">
        <div>
          <div className="w-full flex flex-col items-center justify-center text-center px-4">
            <h1>
              青き先駆・黒き革新
            </h1>
            <p className="mx-auto mb-12 max-w-[90%] sm:max-w-2xl lg:max-w-3xl text-base sm:text-lg lg:text-xlleading-relaxed text-gray-400">
              現実の課題を構造的に捉える設計力を軸に、技術支援・教育・発信を通じて
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
