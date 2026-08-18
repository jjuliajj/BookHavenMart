"use client";

import Link from "next/link";
import { useCart } from "@/lib/CartContext";
import { Plus, Leaf } from "lucide-react";
import { formatPrice } from "@/lib/api";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: string;
  category: string;
  image: string;
  description?: string;
}

export default function BookCard({ id, title, author, price, category, image, description }: BookCardProps) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(id, 1);
  };

  const displayPrice = formatPrice(price);

  return (
    <div className="bg-[#FAF8F5] rounded-[2rem] p-5 sm:p-6 border border-[#5E6B5D]/20 shadow-xs hover:shadow-xl hover:border-[#5E6B5D] transition-all duration-300 font-sans group">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
        
        {/* Left Side Book Cover */}
        <Link href={`/products/${id}`} className="w-28 sm:w-36 aspect-[9/14] sm:aspect-[4/5] bg-[#F4EFEA] rounded-2xl overflow-hidden border border-[#5E6B5D]/15 flex-shrink-0 block shadow-sm">
          {image ? (
            <img src={image} alt={title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#2C352E] font-serif text-xs px-2 text-center">
              {title}
            </div>
          )}
        </Link>

        {/* Right Side Content & Action */}
        <div className="flex-grow space-y-3 text-left w-full min-w-0 flex flex-col justify-between self-stretch">
          <div className="flex justify-between items-start gap-2">
            <div className="min-w-0 flex-1 pr-2">
              <span className="bg-[#F4EFEA] text-[#5E6B5D] px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full border border-[#5E6B5D]/20 inline-block mb-1.5">
                {category || "NORDIC SANCTUARY"}
              </span>
              <Link href={`/products/${id}`}>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#2C352E] group-hover:text-[#5E6B5D] transition-colors leading-tight line-clamp-2">
                  {title}
                </h3>
              </Link>
              <p className="text-xs text-[#2C352E]/70 italic mt-0.5 truncate">by {author}</p>
            </div>

            <span className="font-serif font-bold text-lg sm:text-xl text-[#5E6B5D] bg-[#F4EFEA] px-3.5 py-1 rounded-xl border border-[#5E6B5D]/20 shadow-xs flex-shrink-0">
              {displayPrice}
            </span>
          </div>

          <div className="pt-3 border-t border-[#5E6B5D]/15 flex items-center justify-between gap-2 flex-wrap mt-auto">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#5E6B5D] flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-[#5E6B5D]" /> Distraction-Free EPUB
            </span>

            <button 
              onClick={handleQuickAdd}
              className="bg-[#5E6B5D] hover:bg-[#2C352E] text-[#FAF8F5] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5 cursor-pointer ml-auto"
            >
              <Plus className="w-3.5 h-3.5" /> Add to Haven
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
