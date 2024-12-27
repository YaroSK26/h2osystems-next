"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { useTranslations } from "../hooks/use-translataions";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const translations = useTranslations();
  const [currentLanguage, setCurrentLanguage] = useState("sk"); 

  // Load stored language on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("language");
      if (storedLang) {
        setCurrentLanguage(storedLang);
        handleLanguageChange(storedLang);
      }
    }
  }, []);

  const handleLanguageChange = async (lang) => {
    try {
      localStorage.setItem("language", lang);
      setCurrentLanguage(lang);
      const response = await fetch(`/locales/${lang}.json`);
      const data = await response.json();
      window.dispatchEvent(
        new CustomEvent("languageChange", {
          detail: { translations: data },
        })
      );
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#1ABADD]"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-white.png"
              alt="H2O Systems"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          <motion.div
            className="hidden md:flex items-center space-x-8 font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="#about"
              className="nav-link text-white hover:text-white/80"
            >
              {translations?.nav?.about || "O nás"}
            </Link>
            <Link
              href="#products"
              className="nav-link text-white hover:text-white/80"
            >
              {translations?.nav?.products || "Produkty a služby"}
            </Link>
            <Link
              href="#references"
              className="nav-link text-white hover:text-white/80"
            >
              {translations?.nav?.references || "Referencie"}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                            <button
                className="bg-transparent hover:bg-transparent shadow-none active:bg-transparent focus:outline-none focus:ring-0"
              >
                <Image
                  src={`/flags/${currentLanguage}.${
                    currentLanguage === "cz" ||
                    currentLanguage === "es" ||
                    currentLanguage === "au"
                      ? "webp"
                      : "png"
                  }`}
                  alt={currentLanguage.toUpperCase()}
                  width={24}
                  height={24}
                  className="rounded"
                />
              </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange("sk")}>
                  <Image
                    src="/flags/sk.png"
                    alt="SK"
                    width={24}
                    height={24}
                    className="mr-2 rounded"
                  />
                  Slovak
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("cz")}>
                  <Image
                    src="/flags/cz.webp"
                    alt="CZ"
                    width={24}
                    height={24}
                    className="mr-2 rounded"
                  />
                  Czech
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("de")}>
                  <Image
                    src="/flags/au.webp"
                    alt="DE"
                    width={24}
                    height={24}
                    className="mr-2 rounded"
                  />
                  Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                  <Image
                    src="/flags/en.png"
                    alt="EN"
                    width={24}
                    height={24}
                    className="mr-2 rounded"
                  />
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("es")}>
                  <Image
                    src="/flags/es.webp"
                    alt="ES"
                    width={24}
                    height={24}
                    className="mr-2 rounded"
                  />
                  Spanish
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>

          <Button
            size="icon"
            className="md:hidden text-white bg-transparent hover:bg-transparent shadow-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden pt-4 pb-3 space-y-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="#about"
              className="nav-link block text-white hover:text-white/80 py-2"
              onClick={() => setIsOpen(false)}
            >
              {translations?.nav?.about || "O nás"}
            </Link>
            <Link
              href="#products"
              className="nav-link block text-white hover:text-white/80 py-2"
              onClick={() => setIsOpen(false)}
            >
              {translations?.nav?.products || "Produkty a služby"}
            </Link>
            <Link
              href="#references"
              className="nav-link block text-white hover:text-white/80 py-2"
              onClick={() => setIsOpen(false)}
            >
              {translations?.nav?.references || "Referencie"}
            </Link>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
