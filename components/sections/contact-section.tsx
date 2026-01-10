import SnsIconList from "@/components/ui/sns-icon-list";

export default function ContactSection() {
  return (
    <section id="contact-section">
      <div className="contact-container">
        <h2>CONTACT</h2>
        <p>DMにてお気軽にお問い合わせください。</p>
        <p>3営業日以内に返信いたします。</p>
      </div>

      <div className="contact-content">
        <SnsIconList />
      </div>
    </section>
  );
}
