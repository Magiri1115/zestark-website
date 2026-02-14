import BlogCard from "@/app/components/ui/BlogCard/BlogCard";
import { blogItems } from "@/app/data/blog";
import styles from "./blog-section.module.css";

export default function BlogSection() {
  return (
    <section id="blog-section">
      <div className="blog-content">
        <h2>BLOG</h2>
        <p>最新の活動報告 (外部サイトに移動します)</p>

        <div className={styles.blogItems}>
          {blogItems.map((item, index) => (
            <BlogCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}