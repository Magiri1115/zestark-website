import styles from "./services-card.module.css";

type ServiceCardProps = {
  icon: string;
  title: string;
  text: React.ReactNode;
  button: string;
  onClick: () => void;
};

export default function ServiceCard({
  icon,
  title,
  text,
  button,
  onClick,
}: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <div className="interactive-icon mb-4">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button onClick={onClick} className={styles.button}>
        {button}
        <span className={styles.shimmer}></span>
      </button>
    </div>
  );
}