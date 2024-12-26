"use client"
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { References } from "@/components/References";
import useLenis from "@/components/lenis";

export default function Home() {
  useLenis();
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <References />
    </div>
  );
}
