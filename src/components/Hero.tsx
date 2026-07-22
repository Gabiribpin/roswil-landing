import Image from "next/image";
import { ButtonLink } from "./ButtonLink";
import { IconWhatsApp } from "./icons";
import { siteConfig, whatsappLink } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-24 md:pt-28"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush/50 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-beige/80 blur-3xl" />
        <div className="fabric-grid absolute inset-0 opacity-40" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-8 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-24 lg:pt-12">
        <div className="animate-rise order-2 lg:order-1">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-rose-gold">
            {siteConfig.brandName} · {siteConfig.tagline}
          </p>
          <h1
            id="hero-title"
            className="font-display text-4xl leading-[1.12] text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Costura feita com cuidado, qualidade e compromisso
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Serviços de costura com máquina reta e overloque para confecções,
            pequenas marcas, costureiras e clientes que procuram um trabalho
            cuidadoso e bem-feito.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={whatsappLink()}
              external
              ariaLabel="Solicitar orçamento pelo WhatsApp"
            >
              <IconWhatsApp className="h-4 w-4" />
              Solicitar orçamento pelo WhatsApp
            </ButtonLink>
            <ButtonLink href="#servicos" variant="secondary">
              Conhecer os serviços
            </ButtonLink>
          </div>
        </div>

        <div className="animate-rise-delay order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blush/70 via-transparent to-rose-gold/20 blur-sm"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/40 shadow-lift">
              <Image
                src="/images/rosane.png"
                alt="Ambiente de costura — substitua pela foto da Rosane em public/images/rosane.png"
                width={900}
                height={1125}
                className="aspect-[4/5] h-auto w-full object-cover object-[center_42%]"
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
