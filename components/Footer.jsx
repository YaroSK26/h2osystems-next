"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "../hooks/use-translataions";

export function Footer() {
  const translations = useTranslations();

  return (
    <footer className="bg-gradient-to-br from-[#1ABADD] to-[#1596B4] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            className="flex flex-col items-center md:items-start space-y-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/" className="transition-opacity hover:opacity-90">
              <Image
                src="/images/logo-white.png"
                alt="H2O Systems"
                width={200}
                height={67}
                className="mb-2"
              />
            </Link>
            <p className="text-sm text-white/90 max-w-xs text-center md:text-left">
              {translations?.footer?.description ||
                "Profesionálne riešenia pre úpravu vody a vykurovanie. Kvalita a spoľahlivosť."}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">
              {translations?.footer?.quickLinks || "Rýchle odkazy"}
            </h3>
            <nav className="flex flex-col items-center md:items-start space-y-2">
              <Link
                href="/#about"
                className="text-white/90 hover:text-white transition-colors"
              >
                {translations?.nav?.about || "O nás"}
              </Link>
              <Link
                href="/#products"
                className="text-white/90 hover:text-white transition-colors"
              >
                {translations?.nav?.products || "Produkty a služby"}
              </Link>
              <Link
                href="/#references"
                className="text-white/90 hover:text-white transition-colors"
              >
                {translations?.nav?.references || "Referencie"}
              </Link>
            </nav>
          </motion.div>

          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-bold text-lg mb-4">
              {translations?.footer?.contactInfo || "Kontaktné informácie"}
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:sales.h2osystems@gmail.com"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>sales.h2osystems@gmail.com</span>
              </a>
              <a
                href="tel:+421918516375"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>+421 918 516 375</span>
              </a>
              <a
                href="tel:+421918167156"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>+421 918 167 156</span>
              </a>
              <a
                href="tel:+420725532198"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>+420 725 532 198</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="font-bold text-lg mb-4">
              {translations?.footer?.location || "Kde nás najdete"}
            </h3>
            <div className="space-y-3 text-white/90">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5" />
                <div>
                  <p>
                    {translations?.footer?.locationText ||
                      "Slovensko & Česká republika"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="pt-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/90">
              &copy; {new Date().getFullYear()} H2O Systems.{" "}
              {translations?.footer?.copyright || "Všetky práva vyhradené."}
            </p>
            <div className="flex items-center gap-4">
              <p className="text-sm text-white/90">
                {translations?.footer?.createdBy || "Stránku vytvoril"}{" "}
                <a
                  href="https://www.jaroslav.website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors font-medium"
                >
                  Jaroslav Barabáš
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
