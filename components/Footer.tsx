import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C3127] text-[#F4F1EA] pt-14 pb-10 border-t border-[#4A6B5D]/30">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#4A6B5D]/30">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-[#C86D51]" />
              <span className="font-serif font-bold text-2xl text-[#F4F1EA]">BookHaven <span className="text-[#C86D51]">Mart</span></span>
            </div>
            <p className="text-xs text-[#F4F1EA]/70 leading-relaxed max-w-md">
              A serene online haven dedicated to thoughtful reading, mindful digital literature, and calm EPUB collections.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#C86D51] uppercase tracking-widest mb-3">Explore Haven</h4>
            <ul className="space-y-1.5 text-xs text-[#F4F1EA]/80">
              <li><Link href="/collections" className="hover:text-[#C86D51]">Curated Shelves</Link></li>
              <li><Link href="/genres" className="hover:text-[#C86D51]">Reading Haven Genres</Link></li>
              <li><Link href="/authors" className="hover:text-[#C86D51]">Authors Sanctuary</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#C86D51] uppercase tracking-widest mb-3">Haven Care</h4>
            <ul className="space-y-1.5 text-xs text-[#F4F1EA]/80">
              <li><Link href="/privacy" className="hover:text-[#C86D51]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#C86D51]">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-[#C86D51]">Support Desk</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 text-center text-xs text-[#F4F1EA]/50">
          © {new Date().getFullYear()} BookHaven Mart. All rights reserved. Your Peaceful Reading Sanctuary.
        </div>
      </div>
    </footer>
  );
}
