"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { useTranslations } from "../hooks/use-translataions";

export function Hero() {
  const translations = useTranslations();

  return (
    <section className="relative min-h-screen px-4 flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.png"
          alt="Water background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/logo-white.png"
              alt="H2O Systems"
              width={400}
              height={133}
              className=""
              priority
            />

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light">
              {translations?.hero?.title || "Vaša cesta k čistej vode"}
            </h1>

            <Button
              size="lg"
              className="bg-[#1ABADD] hover:bg-[#1596B4] text-white border-none transition-all duration-300 text-lg px-8 py-6 animate-fade-in-up"
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {translations?.hero?.button || "Kto sme?"}
            </Button>
          </motion.div>

          <motion.blockquote
            className="text-xl md:text-2xl lg:text-3xl italic font-light opacity-90 lg:text-right animate-fade-in-up"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            &quot;{" "}
            {translations?.hero?.quote ||
              "Voda je základným prvkom života, ktorý si zaslúži našu pozornosť a starostlivosť."}
            &quot;
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
