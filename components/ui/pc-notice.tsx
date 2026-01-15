import "@/styles/pc-notice.css";

export default function PCNotice() {
  return (
    <div className="pc-notice-overlay">
      <aside className="pc-notice">
        <p>
          本サイトは現在、PCとタブレットでの閲覧に対応しています。
          スマートフォンは順次対応予定です。
        </p>
        <p>2026年1月16日現在</p>
      </aside>
    </div>
  );
}
