import BlogCard from "@/components/ui/blog-card";
import { blogItems } from "@/scripts/data/blog";

export default function BlogSection() {
  return (
    <section id="blog-section">
      <div className="blog-content">
        <h2>BLOG</h2>
        <p>最新の活動報告 (外部サイトに移動します)</p>

        <div className="blog-items">
          {blogItems.map((item, index) => (
            <BlogCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
