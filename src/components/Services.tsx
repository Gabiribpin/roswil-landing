import { services } from "@/lib/services";
import { serviceIcons } from "./icons";

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
            quem precisa de ajustes ou consertos com capricho.
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
      </div>
    </section>
  );
}
