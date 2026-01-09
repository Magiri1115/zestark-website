export default function ContactSection() {
  return (
    <section id="contact-section">
      <div className="contact-container">
        <h2>CONTACT</h2>
        <p>お気軽にお問い合わせください。</p>
        <p>3営業日以内に返信いたします。</p>
      </div>

      <div className="contact-content">

        {/* --- SNSアイコンエリア --- */}
        <div className="contact-sns-area">
          <div className="contact-icon">
            <img src="/icons/discord.svg" alt="Discord" />
          </div>
          <div className="contact-icon">
            <img src="/icons/twitter.svg" alt="Twitter" />
          </div>
          <div className="contact-icon">
            <img src="/icons/github.svg" alt="GitHub" />
          </div>
        </div>

      </div>
    </section>
  );
}
