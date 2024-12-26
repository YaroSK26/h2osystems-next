"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Products() {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const totalImages = 6;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === totalImages ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === totalImages ? 1 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 1 ? totalImages : prev - 1));
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Produkty a Služby
        </motion.h2>

        <div className="flex flex-wrap gap-8">
          <motion.div
            className="flex flex-col flex-1"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="flex flex-col flex-1">
              <CardHeader>
                <CardTitle>Kontajnerové systémy úpravy vody</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <div className="space-y-4">
                  <p>
                    Kontajnery s komplexom systémov na úpravu vody podľa typu
                    vody, rozboru vody a podľa individuálnych požiadaviek
                    klienta, energeticky nezávislé a mobilné.
                  </p>
                  <div className="relative w-full h-64">
                    <Image
                      src={`/images/container${currentImageIndex}.png`}
                      alt={`Container system ${currentImageIndex}`}
                      fill
                      className="rounded-lg transition-opacity duration-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="flex flex-col flex-1"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="flex flex-col flex-1">
              <CardHeader>
                <CardTitle>Systémy na úpravu vody</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="list-disc list-inside space-y-2">
                  <li>Systémy na zmäkčenie vody</li>
                  <li>Systémy na odstránenie železa, mangánu a amoniaku</li>
                  <li>Systémy na odstránenie dusičnanov, dusitanov</li>
                  <li>Systémy na odstránenie arzénu</li>
                  <li>Systémy na odstránenie chlóru, zápachu a zákalu</li>
                  <li>Systémy na odstránenie mechanického znečistenia</li>
                  <li>Systémy na úpravu morskej a oceánskej vody</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="flex flex-col flex-1"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="flex flex-col flex-1">
              <CardHeader>
                <CardTitle>Systémy na úpravu vody na pitný režim</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Membránová filtrácia:
                    <ul className="list-inside ml-4 space-y-1">
                      <li>Ultrafiltrácia</li>
                      <li>Nanofiltrácia</li>
                      <li>Reverzná osmóza</li>
                    </ul>
                  </li>
                  <li>Výdajníky vody so systémom úpravy vody pre office</li>
                  <li>UV lampy - dezinfekcie vody</li>
                  <li>Systémy na odstránenie chlóru</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="flex flex-col flex-1">
            <CardHeader>
              <CardTitle>
                Výstavba malých stavieb k systémom úpravy vody
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-1">
              <p className="text-lg text-[#1ABADD] font-bold">
                Všetky návrhy riešenia realizácie systémov na úpravu vody sa
                robia podľa rozboru vody a individuálnych požiadaviek klienta.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default Products;