export default function AboutSection() {
  return (
    <section id="about-section">
      <div className="about-container flex gap-8">
        <div className="about-items">
          <h2>ABOUT US</h2>
          <div>
            <div className="text-items">
              <p>
                Zestarkは、目の前にある課題をそのままシステム化するのではなく、
                業務・目的・制約を整理し、構造として捉え直したうえで、最適な形に
                再設計する「設計力」を強みとする技術チームです。
                私たちは、技術そのものを目的にするのではなく、
                「なぜその仕組みが必要なのか」「どこまで作るべきか」
                「将来どのように変化するのか」といった本質的な問いに向き合いながら、
                保守性・拡張性・運用現実性を踏まえたシステム設計を行います。
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