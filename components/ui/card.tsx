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
    <div className="service-card">
      <div className="service-icon">
        <div>
          <img src={icon} alt={title} />
        </div>
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-text">{text}</p>
      <button onClick={onClick} className="service-button">
        {button}
      </button>
    </div>
  );
}
