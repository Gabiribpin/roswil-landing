import Image from "next/image";
import { IconWhatsApp } from "./icons";
import { siteConfig, whatsappLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blush/50 bg-beige/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-roswil.png"
              alt={`Logo ${siteConfig.brandName}`}
              width={52}
              height={52}
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="font-display text-xl text-ink">
                {siteConfig.brandName}
              </p>
              <p className="text-sm text-ink-soft">{siteConfig.tagline}</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
            Costura com cuidado, qualidade e compromisso para confecções,
            marcas, lojas e clientes particulares.
          </p>
        </div>

        <div className="space-y-3 text-sm text-ink-soft md:justify-self-end">
          <p>
            <span className="font-medium text-ink">WhatsApp:</span>{" "}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-rose-gold"
            >
              <IconWhatsApp className="h-3.5 w-3.5" />
              {siteConfig.whatsappDisplay}
            </a>
          </p>
          {siteConfig.instagramUrl ? (
            <p>
              <span className="font-medium text-ink">Instagram:</span>{" "}
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-rose-gold"
              >
                @{siteConfig.instagramUrl.replace(/\/$/, "").split("/").pop()}
              </a>
            </p>
          ) : null}
          <p>
            <span className="font-medium text-ink">Atendimento:</span>{" "}
            {siteConfig.location}
          </p>
        </div>
      </div>

      <div className="border-t border-blush/40 px-5 py-5 text-center text-xs text-ink-soft md:px-8">
        © {year} {siteConfig.brandName}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
