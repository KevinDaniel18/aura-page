"use client"

import HeroSection from "@/components/hero/hero-section";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <section className="bg-background py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xl italic text-secondary mb-6">
            “Acompañamos tu proceso con respeto, cuidado y esperanza.”
          </p>
          <Link href="/servicios">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition cursor-pointer">
              Ver nuestros servicios
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
