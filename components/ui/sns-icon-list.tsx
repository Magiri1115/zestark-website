import { snsLinks } from "@/scripts/data/sns-links";
import SnsIconLink from "./sns-icon-link";

export default function SnsIconList() {
  return (
    <div className="contact-sns-area">
      {snsLinks.map((item) => (
        <SnsIconLink key={item.name} item={item} />
      ))}
    </div>
  );
}
