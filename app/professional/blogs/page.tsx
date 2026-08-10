import HeroBlogs from "@/components/section/blogs/HeroBlogs";

export default function Blogs() {
  return (
    <main className="max-w-220 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <HeroBlogs
        title="Writing"
        description="Short notes on software delivery, integrations and operational systems."
      />
    </main>
  );
}
