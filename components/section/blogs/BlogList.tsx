import TitleCategory from "@/components/layout/TitleCategory";
import { BlogPostProps } from "@/types/types";

export default function BlogList({
  posts,
  limit,
}: {
  posts: BlogPostProps[];
  limit?: number;
}) {
  const visiblePosts = typeof limit === "number" ? posts.slice(0, limit) : posts;

  return (
    <TitleCategory id="writing" title="Writing">
      <div className="grid gap-3">
        {visiblePosts.map((post) => (
          <article
            key={post.title}
            className="rounded-xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-foreground/10"
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span>{post.category}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span className="rounded-full border border-border px-2 py-0.5">
                    {post.status}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-foreground">
                  {post.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {post.summary}
                </p>
              </div>

              <ul className="grid gap-1.5 text-xs leading-relaxed text-muted-foreground">
                {post.takeaways.map((takeaway) => (
                  <li key={takeaway}>- {takeaway}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </TitleCategory>
  );
}
