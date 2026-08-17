import BookCard from "./BookCard";
import { getBooks } from "@/lib/api";
import Link from "next/link";
import { Leaf, ArrowRight } from "lucide-react";

export default async function FeaturedBooks() {
  const books = await getBooks();

  return (
    <section className="py-16 bg-[#F4EFEA]">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 max-w-5xl space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#5E6B5D]/20 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5E6B5D]/10 text-[#5E6B5D] text-xs font-bold rounded-full border border-[#5E6B5D]/20 uppercase tracking-widest mb-2">
              <Leaf className="w-4 h-4 text-[#5E6B5D]" /> Nordic Sanctuary Stack
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#2C352E]">
              Quiet <span className="text-[#5E6B5D] italic">Sanctuary Reading Stack</span>
            </h2>
          </div>
          <Link
            href="/collections"
            className="text-xs font-bold text-[#5E6B5D] hover:text-[#2C352E] flex items-center gap-1 uppercase tracking-wider transition-colors"
          >
            <span>Explore All ({books.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Horizontal Wide Sanctuary Stack Rows */}
        <div className="space-y-6">
          {books.map((book) => (
            <BookCard key={book.id} {...book} image={book.cover_url} description={book.description} />
          ))}
        </div>

      </div>
    </section>
  );
}
