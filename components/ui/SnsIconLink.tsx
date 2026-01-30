import { SnsLink } from "@/app/data/sns-links";

type Props = {
  item: SnsLink;
};

export default function SnsIconLink({ item }: Props) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-icon"
      aria-label={item.name}
    >
      <img src={item.icon} alt={item.alt} />
    </a>
  );
}
