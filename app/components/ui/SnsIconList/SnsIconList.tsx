import { snsLinks } from "@/app/data/sns-links";
import SnsIconLink from "../SnsIconLink/SnsIconLink";
import styles from "./sns-icon-list.module.css";

export default function SnsIconList() {
  return (
    <div className={styles.container}>
      {snsLinks.map((item) => (
        <SnsIconLink key={item.name} item={item} />
      ))}
    </div>
  );
}