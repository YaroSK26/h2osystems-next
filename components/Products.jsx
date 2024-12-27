"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useEffect, useState } from "react";
import { useTranslations } from "../hooks/use-translataions";

export function Products() {
  const translations = useTranslations();
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const totalImages = 6;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === totalImages ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

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
          {translations?.products?.title || "Produkty a Služby"}
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
                <CardTitle>
                  {translations?.products?.containerSystems?.title ||
                    "Kontajnerové systémy úpravy vody"}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <div className="space-y-4">
                  <p>
                    {translations?.products?.containerSystems?.description ||
                      "Kontajnery s komplexom systémov na úpravu vody..."}
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
                <CardTitle>
                  {translations?.products?.waterSystems?.title ||
                    "Systémy na úpravu vody"}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="list-disc list-inside space-y-2">
                  {(
                    translations?.products?.waterSystems?.items || [
                      "Systémy na zmäkčenie vody",
                      "Systémy na odstránenie železa, mangánu a amoniaku",
                      "Systémy na odstránenie dusičnanov, dusitanov",
                      "Systémy na odstránenie arzénu",
                      "Systémy na odstránenie chlóru, zápachu a zákalu",
                      "Systémy na odstránenie mechanického znečistenia",
                      "Systémy na úpravu morskej a oceánskej vody",
                    ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
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
                <CardTitle>
                  {translations?.products?.drinkingWaterSystems?.title ||
                    "Systémy na úpravu vody na pitný režim"}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    {translations?.products?.drinkingWaterSystems
                      ?.membraneTitle || "Membránová filtrácia:"}
                    <ul className="list-inside ml-4 space-y-1">
                      {(
                        translations?.products?.drinkingWaterSystems
                          ?.membraneTypes || [
                          "Ultrafiltrácia",
                          "Nanofiltrácia",
                          "Reverzná osmóza",
                        ]
                      ).map((type, index) => (
                        <li key={index}>{type}</li>
                      ))}
                    </ul>
                  </li>
                  {(
                    translations?.products?.drinkingWaterSystems?.other || [
                      "Výdajníky vody so systémom úpravy vody pre office",
                      "UV lampy - dezinfekcie vody",
                      "Systémy na odstránenie chlóru",
                    ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
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
                {translations?.products?.construction?.title ||
                  "Výstavba malých stavieb k systémom úpravy vody"}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-1">
              <p className="text-lg text-[#1ABADD] font-bold">
                {translations?.products?.construction?.note ||
                  "Všetky návrhy riešenia realizácie systémov na úpravu vody..."}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
