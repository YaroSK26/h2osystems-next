import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error() {
  return (
    <section className="relative min-h-screen  px-4 flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
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
        {/* Logo and Main Content */}
        <div className="flex justify-center items-center  flex-col gap-5">

            <h1 className=" font-bold text-5xl">404 Error</h1>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light ">
              Stránka nebola nájdená
            </h1>

<Link href="/">
            <Button
              size="lg"
              className="bg-[#1ABADD] hover:bg-[#1596B4] text-white border-none transition-all duration-300 text-lg px-8 py-6 animate-fade-in-up"
              
              >
              Domov
            </Button>
              </Link>
          </div>

        
        </div>

      
    </section>
  );
}
