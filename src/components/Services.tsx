import Image from "next/image";
import { dishTowelPhotos, services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";
import { IconWhatsApp, serviceIcons } from "./icons";

const dishTowelMessage =
  "Olá, Rosane! Vi os panos de prato confeccionados no site e gostaria de saber mais / pedir orçamento.";

export function Services() {
  return (
    <section
      id="servicos"
      className="relative scroll-mt-24 py-20 md:py-28"
      aria-labelledby="servicos-title"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-gold">
            Serviços
          </p>
          <h2
            id="servicos-title"
            className="mt-3 font-display text-3xl text-ink sm:text-4xl"
          >
            Soluções de costura para o seu dia a dia e para a sua produção
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Atendimento para confecções, pequenas marcas, lojas, costureiras e
            quem precisa de ajustes, consertos ou peças confeccionadas com
            capricho.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <li
                key={service.id}
                className="group rounded-3xl border border-blush/60 bg-white/70 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-rose-gold/35 hover:shadow-lift"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blush/70 text-rose-gold transition group-hover:bg-rose-gold group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>

        <div
          id="panos-de-prato"
          className="mt-16 scroll-mt-28 rounded-[2rem] border border-blush/50 bg-beige/40 px-5 py-10 sm:px-8 sm:py-12"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-gold">
              Destaque
            </p>
            <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
              Panos de prato confeccionados
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              Peças com barrados estampados e acabamento caprichado. Ideais para
              o dia a dia, presentes e encomendas. Peça pelo WhatsApp.
            </p>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dishTowelPhotos.map((photo) => (
              <li
                key={photo.src}
                className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-soft"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={960}
                  className="aspect-[4/5] h-auto w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center">
            <ButtonLink
              href={whatsappLink(dishTowelMessage)}
              external
              ariaLabel="Pedir panos de prato pelo WhatsApp"
            >
              <IconWhatsApp className="h-4 w-4" />
              Pedir panos de prato pelo WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
