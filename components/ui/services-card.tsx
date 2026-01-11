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
    <div className="services-card">
      <div className="interactive-icon">
          <img src={icon} alt={title} />
      </div>
      <h3 className="services-title">{title}</h3>
      <p className="services-text">{text}</p>
      <button onClick={onClick} className="services-button">
        {button}
      </button>
    </div>
  );
}
