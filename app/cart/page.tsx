"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowLeft, 
  ShieldCheck, 
  Leaf,
  ArrowRight
} from "lucide-react";

export default function CartPage() {
  const { cartItems, allBooks, updateQuantity, removeFromCart, cartTotal, isMounted } = useCart();

  const fullCartItems = cartItems.map(item => {
    const book = allBooks.find(b => b.id === item.id);
    return { ...book, quantity: item.quantity, id: item.id };
  }).filter(item => item.title);

  if (!isMounted) return null;

  return (
    <main className="flex min-h-screen flex-col bg-[#F5F3EF] text-[#2E4A3E]">
      <Navbar />
      
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <Link href="/collections" className="inline-flex items-center text-xs font-bold text-[#D96B43] hover:text-[#2E4A3E] transition-colors mb-2 uppercase tracking-widest gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Haven Catalog
              </Link>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2E4A3E] flex items-center gap-3">
                <ShoppingBag className="w-8 h-8 text-[#2E4A3E]" />
                Your Reading Haven Cart
              </h1>
            </div>
            <span className="text-xs font-bold text-[#2E4A3E] bg-[#E8F0EC] px-4 py-2 rounded-full border border-[#2E4A3E]/20 w-fit">
              {fullCartItems.length} {fullCartItems.length === 1 ? 'Haven Book' : 'Haven Books'}
            </span>
          </div>

          {fullCartItems.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-[#2E4A3E]/20 shadow-md max-w-lg mx-auto my-8">
              <div className="w-16 h-16 bg-[#E8F0EC] text-[#2E4A3E] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#2E4A3E]/20">
                <Leaf className="w-8 h-8 text-[#D96B43]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2E4A3E] mb-2">Haven Cart is Empty</h3>
              <p className="text-xs text-[#2E4A3E]/70 mb-6">Explore our peaceful botanical library and discover quiet digital literature.</p>
              <Link 
                href="/collections" 
                className="inline-flex items-center gap-2 bg-[#2E4A3E] hover:bg-[#D96B43] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow"
              >
                <span>Browse Haven Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-4">
                {fullCartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-3xl p-4 border border-[#2E4A3E]/20 shadow-xs hover:border-[#2E4A3E] transition-all flex gap-4 items-center"
                  >
                    <Link href={`/products/${item.id}`} className="w-16 md:w-20 aspect-[9/16] bg-[#E8F0EC] rounded-2xl overflow-hidden flex-shrink-0 border border-[#2E4A3E]/10 block">
                      {item.cover_url ? (
                        <img src={item.cover_url} alt={item.title} className="object-cover w-full h-full" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#2E4A3E] text-[9px] font-serif">
                          {item.title}
                        </div>
                      )}
                    </Link>

                    <div className="flex-grow min-w-0 space-y-1.5">
                      <div className="flex justify-between items-start gap-2">
                        <Link href={`/products/${item.id}`} className="font-serif text-base md:text-lg font-bold text-[#2E4A3E] hover:text-[#D96B43] transition-colors line-clamp-1">
                          {item.title}
                        </Link>
                        <span className="font-bold text-[#D96B43] text-sm whitespace-nowrap">
                          {item.price && item.price.startsWith('$') ? item.price : `$${item.price || '0.00'}`}
                        </span>
                      </div>

                      <p className="text-xs text-[#2E4A3E]/70 italic">by {item.author}</p>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center space-x-3 bg-[#E8F0EC] border border-[#2E4A3E]/20 rounded-full px-3 py-1">
                          <button className="text-[#2E4A3E]/70 hover:text-[#D96B43]" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-[#2E4A3E] w-4 text-center">{item.quantity}</span>
                          <button className="text-[#2E4A3E]/70 hover:text-[#D96B43]" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button className="text-rose-600 hover:bg-rose-50 p-2 rounded-lg transition-all" onClick={() => removeFromCart(item.id)}>
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary - High Contrast */}
              <div className="lg:col-span-5">
                <div className="bg-[#2E4A3E] text-white rounded-3xl p-6 md:p-8 shadow-xl border-2 border-[#D96B43]/30 space-y-6 sticky top-28">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h2 className="font-serif text-xl font-bold flex items-center gap-2 text-white">
                      <Leaf className="w-5 h-5 text-[#D96B43]" /> Haven Order Summary
                    </h2>
                    <span className="text-xs font-bold text-[#D96B43] bg-white/10 px-3 py-1 rounded-full uppercase">Instant EPUB</span>
                  </div>

                  <div className="space-y-3 text-xs text-white">
                    <div className="flex justify-between text-white/90">
                      <span>Subtotal ({fullCartItems.length} items)</span>
                      <span className="font-bold text-white">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-white/90">
                      <span>Digital Haven Delivery</span>
                      <span className="text-emerald-400 font-bold uppercase text-[10px]">Free Direct Access</span>
                    </div>
                    <div className="flex justify-between text-white/90">
                      <span>Estimated Tax</span>
                      <span className="font-bold text-white">$0.00</span>
                    </div>

                    <div className="flex justify-between items-baseline pt-4 border-t border-white/10">
                      <span className="text-base font-bold text-white">Total Amount</span>
                      <span className="text-3xl font-extrabold text-[#D96B43]">${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <Link 
                    href="/checkout" 
                    className="w-full bg-[#D96B43] hover:bg-[#b85430] text-white py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <span>Proceed to Haven Checkout</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] text-white/80 uppercase text-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Instant Direct Download Guarantee</span>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
