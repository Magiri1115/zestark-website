import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about-section">
      <div className="about-container flex gap-8">
        <div className="about-items">
          <h2>ABOUT US</h2>
          <div className="about-description">
            <div className="text-items">
              <div className="image-wrapper">
                <Image
                  src="/images/zestark-feature.png"
                  alt="Zestarkの設計思想を表すイメージ"
                  width={450}
                  height={250}
                  className="rounded-lg opacity-70"
                />
              </div>
              <p>
                Zestarkは「設計力」を強みとする技術チームです。
              </p>
            </div>
          </div>
        </div>

        <div className="about-features">
          <div className="about-introduce-container flex items-start">
            <div className="interactive-icon">
              <img src="/icons/approach.svg" alt="壊れない前提" />
            </div>
            <div>
              <h3>壊れない前提</h3>
              <p>想定外に備えた構造設計</p>
            </div>
          </div>

          <div className="about-introduce-container flex items-start">
            <div className="interactive-icon">
              <img src="/icons/community.svg" alt="致命傷にならない設計" />
            </div>
            <div>
              <h3>致命傷にならない設計</h3>
              <p>事業リスクを技術で分散</p>
            </div>
          </div>

          <div className="about-introduce-container flex items-start">
            <div className="interactive-icon">
              <img src="/icons/growth.svg" alt="判断に責任" />
            </div>
            <div>
              <h3>判断に責任</h3>
              <p>長期的な事業視点で技術を選定</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}