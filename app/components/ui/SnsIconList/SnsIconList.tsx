import { snsLinks } from "@/app/data/sns-links";
import SnsIconLink from "../SnsIconLink/SnsIconLink";

export default function SnsIconList() {
  return (
    <div className="contact-sns-area">
      {snsLinks.map((item) => (
        <SnsIconLink key={item.name} item={item} />
      ))}
    </div>
  );
}