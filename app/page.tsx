import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Leaf, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F4EFEA] text-[#2C352E]">
      <Navbar />
      <Hero />

      {/* Featured Books Section */}
      <FeaturedBooks />

      {/* Nordic Sanctuary Philosophy */}
      <section className="py-16 px-4 sm:px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#FAF8F5] rounded-[2.5rem] p-8 sm:p-12 border border-[#5E6B5D]/20 shadow-xs space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#5E6B5D] text-[#FAF8F5] text-xs font-bold rounded-full uppercase tracking-widest">
              <Leaf className="w-4 h-4 text-[#FAF8F5]" /> Nordic Sanctuary Values
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#2C352E]">
              Nordic Warm <span className="text-[#5E6B5D] italic">Reading Sanctuary</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#2C352E]/80 font-sans leading-relaxed max-w-2xl">
              We curate gentle, soothing digital literature designed to provide quiet reflection and eye comfort in your daily reading routine.
            </p>

            <div className="pt-2">
              <Link 
                href="/about"
                className="bg-[#5E6B5D] hover:bg-[#2C352E] text-[#FAF8F5] px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Discover Sanctuary Notes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
