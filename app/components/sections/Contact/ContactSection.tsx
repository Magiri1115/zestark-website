import SnsIconList from "@/app/components/ui/SnsIconList/SnsIconList";
import styles from "./contact-section.module.css";

export default function ContactSection() {
  return (
    <section id="contact-section">
      <div className={styles.container}>
        <h2>CONTACT</h2>
        <div className={styles.info}>
          <p>下記SNSのDMにてお気軽にお問い合わせください。</p>
          <p>3営業日以内に返信いたします。</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.snsArea}>
          <SnsIconList />
        </div>
      </div>
    </section>
  );
}