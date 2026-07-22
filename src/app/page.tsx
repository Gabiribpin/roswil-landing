import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Differentials } from "@/components/Differentials";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partnership } from "@/components/Partnership";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:inline-flex focus:h-auto focus:w-auto focus:items-center focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lift focus:outline-none focus:ring-2 focus:ring-rose-gold"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <Services />
        <Partnership />
        <About />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
