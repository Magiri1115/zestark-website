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
    <div className="services-card p-6 rounded-2xl bg-[#0b0c1e] text-white shadow-lg flex flex-col items-start">
      <div className="interactive-icon mb-4">
        <img src={icon} alt={title} />
      </div>
      <h3 className="services-title text-xl font-bold mb-2">{title}</h3>
      <p className="services-text text-gray-300">{text}</p>
      <button
        onClick={onClick}
        className="
          relative px-6 py-3 mt-4 rounded-xl
          bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500
          font-semibold text-white
          shadow-lg
          hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]
          overflow-hidden
          transition-all duration-500
        "
      >
        {button}
        <span className="absolute top-0 left-0 w-full h-full pointer-events-none animate-shimmer bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4)0%,rgba(255,255,255,0)60%)]"></span>
      </button>
    </div>
  );
}
