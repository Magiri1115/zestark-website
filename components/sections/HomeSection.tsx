import PCNotice from "@/components/emergency/EmergencyNotice";

type HomeSectionProps = {
  onChangeSection: (section: string) => void;
}

export default function HomeSection({ onChangeSection }: HomeSectionProps) {
  return (
    <section id="home-section">
      <div className="home-section-container">
        <div>
          <div className="w-full flex flex-col items-center justify-center text-center px-4">
            <h2>MISSION</h2>
            <p className="mx-auto mb-12 max-w-[90%] sm:max-w-2xl lg:max-w-3xl text-base sm:text-lg lg:text-xlleading-relaxed text-gray-400 whitespace-pre-line">
              Zestarkは、将来の選択肢を狭めない設計を通じて、
              あなたの事業が100年続くためのシステムの土台をつくります。
            </p>

            <div className="button-container flex items-center justify-center gap-6">
              <button
                className="home-button primary"
                onClick={() => onChangeSection('services')}
              >
                サービスを見る
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
