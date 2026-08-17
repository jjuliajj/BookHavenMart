"use client";

import Link from "next/link";
import { useCart } from "@/lib/CartContext";
import { Plus, Leaf, Heart } from "lucide-react";

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

  return (
    <div className="bg-[#FAF8F5] rounded-[2.5rem] p-6 border border-[#5E6B5D]/20 shadow-xs hover:shadow-xl hover:border-[#5E6B5D] transition-all duration-300 font-sans group">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        
        {/* Left Side Book Cover */}
        <Link href={`/products/${id}`} className="w-32 sm:w-40 aspect-[4/5] bg-[#F4EFEA] rounded-[1.8rem] overflow-hidden border border-[#5E6B5D]/15 flex-shrink-0 block">
          {image ? (
            <img src={image} alt={title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#2C352E] font-serif text-xs px-2 text-center">
              {title}
            </div>
          )}
        </Link>

        {/* Right Side Content & Action */}
        <div className="flex-grow space-y-3 text-left">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <div>
              <span className="bg-[#F4EFEA] text-[#5E6B5D] px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full border border-[#5E6B5D]/20 inline-block mb-1.5">
                {category || "NORDIC SANCTUARY"}
              </span>
              <Link href={`/products/${id}`}>
                <h3 className="font-serif font-normal text-xl sm:text-2xl text-[#2C352E] group-hover:text-[#5E6B5D] transition-colors leading-tight">
                  {title}
                </h3>
              </Link>
              <p className="text-xs text-[#2C352E]/70 italic mt-0.5">by {author}</p>
            </div>

            <span className="font-serif font-bold text-lg text-[#5E6B5D]">{price}</span>
          </div>

          {description && (
            <p className="text-xs text-[#2C352E]/80 leading-relaxed line-clamp-2">
              {description}
            </p>
          )}

          <div className="pt-3 border-t border-[#5E6B5D]/15 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#5E6B5D] flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-[#5E6B5D]" /> Distraction-Free EPUB
            </span>

            <button 
              onClick={handleQuickAdd}
              className="bg-[#5E6B5D] hover:bg-[#2C352E] text-[#FAF8F5] px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" /> Add to Haven
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
