export default function AboutSection() {
  return (
    <section id="about-section">
      <div className="about-container flex gap-8">
        <div className="about-items">
          <h2>ABOUT US</h2>
          <div>
            <div className="text-items">
              <p>
                Zestarkは、課題を整理し、最適な形でシステムに落とし込む
                「設計力」を強みとする技術チームです。
              </p>
              <p>
                技術と創造性を掛け合わせ、持続可能で価値ある仕組みづくりを通じて、
                お客様とともに未来を形にしていくことが私たちの使命です。
              </p>
            </div>
          </div>
        </div>

        <div className="about-features flex flex-col gap-4">
          <div className="about-introduce-container flex items-start">
            <div className="about-icon">
              <img src="/icons/approach.svg" alt="革新的なアプローチ" />
            </div>
            <div>
              <h3>革新的なアプローチ</h3>
              <p>最新技術と創造性を融合させた独自のソリューション</p>
            </div>
          </div>

          <div className="about-introduce-container flex items-start">
            <div className="about-icon">
              <img src="/icons/community.svg" alt="コミュニティ重視" />
            </div>
            <div>
              <h3>コミュニティ重視</h3>
              <p>クライアントとの対話を大切にする協働スタイル</p>
            </div>
          </div>

          <div className="about-introduce-container flex items-start">
            <div className="about-icon">  
              <img src="/icons/growth.svg" alt="持続的成長" />
            </div>
            <div>
              <h3>持続的成長</h3>
              <p>長期的視点でのビジネス発展をサポート</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}