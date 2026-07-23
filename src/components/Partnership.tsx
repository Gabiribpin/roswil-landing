import { ButtonLink } from "./ButtonLink";
import { IconWhatsApp } from "./icons";
import { siteConfig, whatsappLink } from "@/lib/site";

export function Partnership() {
  return (
    <section
      id="parcerias"
      className="relative scroll-mt-24 py-6 md:py-10"
      aria-labelledby="parcerias-title"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-blush/50 bg-gradient-to-br from-ink via-[#4a3f42] to-rose-gold-deep px-7 py-12 text-white shadow-lift sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -right-10 top-0 h-56 w-56 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 left-10 h-40 w-40 rounded-full bg-blush/20 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blush">
              Parcerias
            </p>
            <h2
              id="parcerias-title"
              className="mt-3 font-display text-3xl leading-tight sm:text-4xl"
            >
              Precisa de apoio na sua produção?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
              Oferecemos serviços de costura para ajudar em pequenas produções,
              montagem de peças e acabamentos. Uma parceria baseada em cuidado,
              responsabilidade e compromisso com cada trabalho.
            </p>
            <div className="mt-8">
              <ButtonLink
                href={whatsappLink(siteConfig.partnershipWhatsAppMessage)}
                external
                variant="secondary"
                className="border-transparent bg-white text-ink shadow-soft hover:bg-cream hover:text-ink"
                ariaLabel="Conversar sobre uma parceria pelo WhatsApp"
              >
                <IconWhatsApp className="h-4 w-4 shrink-0 text-rose-gold" />
                <span className="text-ink">Conversar sobre uma parceria</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
