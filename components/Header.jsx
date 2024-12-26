"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
              O nás
            </Link>
            <Link
              href="#products"
              className="nav-link text-white hover:text-white/80"
            >
              Produkty a služby
            </Link>
            <Link
              href="#references"
              className="nav-link text-white hover:text-white/80"
            >
              Referencie
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="bg-transparent hover:bg-transparent shadow-none"
                  size="icon"
                >
                  <Image
                    src="/flags/sk.png"
                    alt="SK"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Image
                    src="/flags/sk.png"
                    alt="SK"
                    width={24}
                    height={24}
                    className="mr-2 rounded"
                  />
                  Slovak
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Image
                    src="/flags/cz.webp"
                    alt="CZ"
                    width={24}
                    height={24}
                    className="mr-2 rounded"
                  />
                  Czech
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Image
                    src="/flags/au.webp"
                    alt="DE"
                    width={24}
                    height={24}
                    className="mr-2 rounded"
                  />
                  Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Image
                    src="/flags/en.png"
                    alt="EN"
                    width={24}
                    height={24}
                    className="mr-2 rounded"
                  />
                  English
                </DropdownMenuItem>
                <DropdownMenuItem>
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
              O nás
            </Link>
            <Link
              href="#products"
              className="nav-link block text-white hover:text-white/80 py-2"
              onClick={() => setIsOpen(false)}
            >
              Produkty a služby
            </Link>
            <Link
              href="#references"
              className="nav-link block text-white hover:text-white/80 py-2"
              onClick={() => setIsOpen(false)}
            >
              Referencie
            </Link>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
