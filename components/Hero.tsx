import Link from "next/link";
import { ArrowRight, Leaf, Heart, Sun, Star, Coffee } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#F5F3EF]">
      {/* Background Soft Botanical Circle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E8F0EC] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 md:px-12 max-w-7xl relative z-10">
        
        {/* Organic Shaped Hero Container with rounded-[3rem] */}
        <div className="bg-[#E8F0EC]/90 backdrop-blur-md rounded-[3rem] p-8 sm:p-12 md:p-16 border-2 border-[#2E4A3E]/20 shadow-xl grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E4A3E] text-[#E8F0EC] text-xs font-bold rounded-full shadow-xs uppercase tracking-widest">
              <Leaf className="w-4 h-4 text-[#D96B43]" /> Organic Sanctuary & Calm Reading Haven
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#2E4A3E] leading-[1.1]">
              Find Your Quiet <br />
              <span className="text-[#D96B43] italic font-normal">Sanctuary of Stories</span>
            </h1>

            <p className="text-sm sm:text-base text-[#2E4A3E]/80 leading-relaxed max-w-xl font-sans">
              Unwind with calm digital literature, soothing philosophy, and handpicked EPUB reads designed to nourish your mind in a cozy, distraction-free reading haven.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href="/collections" 
                className="bg-[#2E4A3E] hover:bg-[#D96B43] text-white rounded-full px-9 py-4 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2.5 hover:scale-105"
              >
                <span>Enter The Haven Shelves</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link 
                href="/about" 
                className="bg-[#F5F3EF] hover:bg-[#2E4A3E] text-[#2E4A3E] hover:text-[#F5F3EF] rounded-full px-8 py-4 border border-[#2E4A3E]/30 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Heart className="w-4 h-4 text-[#D96B43]" />
                <span>Our Philosophy</span>
              </Link>
            </div>

            {/* Trust Pills */}
            <div className="pt-4 border-t border-[#2E4A3E]/20 flex flex-wrap gap-4 text-xs font-bold text-[#2E4A3E]/80">
              <div className="flex items-center gap-2 bg-[#F5F3EF] px-3.5 py-1.5 rounded-full border border-[#2E4A3E]/15">
                <Sun className="w-4 h-4 text-[#D96B43]" />
                <span>Distraction-Free Reading</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F5F3EF] px-3.5 py-1.5 rounded-full border border-[#2E4A3E]/15">
                <Leaf className="w-4 h-4 text-[#2E4A3E]" />
                <span>Instant Direct EPUB</span>
              </div>
            </div>
          </div>

          {/* Right Side: Staggered Organic Cards with Speech Bubble Review */}
          <div className="lg:col-span-5 relative flex justify-center py-4">
            <div className="relative w-full max-w-sm space-y-4">
              
              {/* Floating Quote Speech Bubble */}
              <div className="bg-[#F5F3EF] p-4 rounded-2xl border border-[#2E4A3E]/20 shadow-md space-y-2 transform -rotate-2 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-1 text-[#D96B43]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D96B43]" />
                  ))}
                </div>
                <p className="text-xs font-serif italic text-[#2E4A3E]/90">
                  "A peaceful reading refuge. Finding these digital books brought pure calm to my routine."
                </p>
                <span className="text-[10px] font-bold uppercase text-[#2E4A3E]/60 block">— Quiet Reader Review</span>
              </div>

              {/* Haven Choice Organic Card */}
              <div className="bg-white rounded-[2.5rem] p-6 border-2 border-[#2E4A3E]/30 shadow-lg text-center space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D96B43] bg-[#D96B43]/10 px-3.5 py-1 rounded-full inline-block">
                  Botanical Haven Choice
                </span>

                <div className="py-2 space-y-2">
                  <Coffee className="w-10 h-10 mx-auto text-[#2E4A3E]" />
                  <h3 className="text-2xl font-serif font-bold text-[#2E4A3E]">Mindful Literature</h3>
                  <p className="text-xs text-[#2E4A3E]/70 font-sans">Curated titles for reflection, mindfulness, and quiet hours.</p>
                </div>

                <div className="pt-3 border-t border-[#2E4A3E]/15 text-xs font-bold text-[#2E4A3E] uppercase tracking-wider">
                  Handcrafted with Care
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
