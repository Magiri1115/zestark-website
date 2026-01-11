import { BlogItem } from "@/scripts/data/blog";

type Props = {
  item: BlogItem;
};

export default function BlogCard({ item }: Props) {
  const isDisabled = item.disabled === true;

  if (isDisabled) {
    return (
      <div className="blog-card blog-card--disabled">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <span>準備中</span>
      </div>
    );
  }

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="blog-card"
    >
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span>続きを読む →</span>
    </a>
  );
}
