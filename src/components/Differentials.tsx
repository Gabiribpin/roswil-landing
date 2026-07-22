import { differentials } from "@/lib/services";
import { IconCheck } from "./icons";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative scroll-mt-24 bg-gradient-to-b from-beige/70 to-cream py-20 md:py-28"
      aria-labelledby="diferenciais-title"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-gold">
            Diferenciais
          </p>
          <h2
            id="diferenciais-title"
            className="mt-3 font-display text-3xl text-ink sm:text-4xl"
          >
            O que você encontra na Rosane
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Uma forma de trabalhar pensada para transmitir confiança, delicadeza
            e profissionalismo em cada entrega.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <li
              key={item.title}
              className="flex gap-4 rounded-3xl border border-transparent bg-white/60 px-5 py-5 transition hover:border-blush/70"
            >
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blush text-rose-gold">
                <IconCheck className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-display text-lg text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
