import { BlogItem } from "@/app/data/blog";
import styles from "./blog-card.module.css";

type Props = {
  item: BlogItem;
};

export default function BlogCard({ item }: Props) {
  const cardClass = `${styles.card} ${item.disabled ? styles.disabled : ''}`;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClass}
    >
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span>{item.disabled ? "準備中" : "続きを読む →"}</span>
    </a>
  );
}