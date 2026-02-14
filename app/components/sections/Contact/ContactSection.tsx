import SnsIconList from "../../components/ui/SnsIconList";

export default function ContactSection() {
  return (
    <section id="contact-section">
      <div className="contact-container">
        <h2>CONTACT</h2>
        <div className="contact-info">
        <p>下記SNSのDMにてお気軽にお問い合わせください。</p>
        <p>3営業日以内に返信いたします。</p>
        </div>
      </div>

      <div className="contact-content">
        <SnsIconList />
      </div>
    </section>
  );
}
