import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { getBooks } from "@/lib/api";
import { Leaf } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function CollectionsPage({
  searchParams,
}: {
  searchParams: Promise<{ genre?: string; category?: string; search?: string }>;
}) {
  const books = await getBooks();
  const resolvedParams = await searchParams;
  const targetCategory = resolvedParams.category || resolvedParams.genre;
  const targetSearch = resolvedParams.search;

  const categories = Array.from(new Set(books.map((b) => b.category).filter(Boolean)));
  let filteredBooks = books;

  if (targetCategory) {
    filteredBooks = filteredBooks.filter((b) => 
      b.category && b.category.toLowerCase() === targetCategory.toLowerCase()
    );
  }

  if (targetSearch) {
    const s = targetSearch.toLowerCase();
    filteredBooks = filteredBooks.filter((b) => 
      b.title.toLowerCase().includes(s) || 
      b.author.toLowerCase().includes(s)
    );
  }


  return (
    <main className="flex min-h-screen flex-col bg-[#F4EFEA] text-[#2C352E] font-sans">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 max-w-5xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="bg-[#5E6B5D] text-[#FAF8F5] text-xs font-serif font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#FAF8F5]" /> Nordic Sanctuary Collections
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-normal text-[#2C352E]">
              Nordic Warm <span className="text-[#5E6B5D] italic">Sanctuary Stack</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#2C352E]/70 font-sans">
              Explore quiet, soothing digital literature formatted with high whitespace for ultimate eye comfort.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/collections"
              className={`px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
                !genre ? "bg-[#5E6B5D] text-[#FAF8F5]" : "bg-[#FAF8F5] text-[#2C352E] border border-[#5E6B5D]/20 hover:border-[#5E6B5D]"
              }`}
            >
              All Shelves ({books.length})
            </a>
            {categories.map((cat) => (
              <a
                key={cat}
                href={`/collections?genre=${encodeURIComponent(cat)}`}
                className={`px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
                  genre?.toLowerCase() === cat.toLowerCase()
                    ? "bg-[#5E6B5D] text-[#FAF8F5]"
                    : "bg-[#FAF8F5] text-[#2C352E] border border-[#5E6B5D]/20 hover:border-[#5E6B5D]"
                }`}
              >
                {cat}
              </a>
            ))}
          </div>

          {/* Horizontal Wide Stack Rows */}
          <div className="space-y-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} {...book} image={book.cover_url} description={book.description} />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
