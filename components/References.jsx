"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function References() {
  const references = [
    {
      image: "/images/person1.webp",
      text: "Spoločnosť H2O Systems nám poskytla výnimočnú službu pri inštalácii systému na úpravy vody v našom novom dome. Odporúčame ich každému.",
      author: "Ján Novák, súkromný zákazník",
    },
    {
      image: "/images/person2.jpg",
      text: "S H2O Systems spolupracujeme už niekoľko rokov. Vždy sa môžeme spoľahnúť na ich odbornosť a spoľahlivosť.",
      author: "Spokojný zakaznik",
    },
    {
      image: "/images/person3.png",
      text: "Riešenia od H2O Systems nám pomohli výrazne zlepšiť naše výrobné procesy. Ich prístup bol profesionálny a efektívny.",
      author: "Martin Richter, Priemyselný klient",
    },
    {
      image: "/images/person4.avif",
      text: "H2O Systems poskytuje inovatívne riešenia, ktoré sú na špičke technológie vody. Ich produkty a služby sú vynikajúce.",
      author: " Technologický analytik",
    },
    {
      image: "/images/person5.avif",
      text: "S H2O Systems sme mali len pozitívne skúsenosti. Ich systémy na úpravu vody sú spoľahlivé a efektívne.",
      author: "Eva Kovačičová",
    },
    {
      image: "/images/person6.png",
      text: "H2O Systems ponúka špičkové riešenia vo vodných technológiách s dôrazom na kvalitu, inovácie a spoľahlivosť.",
      author: "Andrej Krajčík, Odborník na vodné technológie",
    },
  ];

  return (
    <section id="references" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Referencie
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
          {references.map((reference, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 mx-auto mb-6 relative rounded-full overflow-hidden">
                    <Image
                      src={reference.image}
                      alt={reference.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <blockquote className="text-lg mb-4">
                    "{reference.text}"
                  </blockquote>
                  <cite className="text-sm text-muted-foreground not-italic">
                    {reference.author}
                  </cite>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
