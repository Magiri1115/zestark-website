import { BlogItem } from "../../data/blog";

type Props = {
  item: BlogItem;
};

export default function BlogCard({ item }: Props) {
  const disabledClass = item.disabled ? "blog-card--disabled" : "";

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`blog-card ${disabledClass}`}
    >
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span>{item.disabled ? "準備中" : "続きを読む →"}</span>
    </a>
  );
}
