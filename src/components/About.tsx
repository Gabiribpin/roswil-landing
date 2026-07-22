import Image from "next/image";

export function About() {
  return (
    <section
      id="sobre"
      className="relative scroll-mt-24 py-20 md:py-28"
      aria-labelledby="sobre-title"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -left-4 top-6 hidden h-full w-full rounded-[1.75rem] bg-blush/50 md:block"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 shadow-lift">
            <Image
              src="/images/rosane.png"
              alt="Ambiente de costura — substitua pela foto da Rosane em public/images/rosane.png"
              width={860}
              height={1075}
              className="aspect-[4/5] h-auto w-full object-cover object-[center_42%]"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-gold">
            Sobre
          </p>
          <h2
            id="sobre-title"
            className="mt-3 font-display text-3xl text-ink sm:text-4xl"
          >
            Costura com dedicação em cada detalhe
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            Rosane está iniciando sua oficina de costura com o propósito de
            oferecer um trabalho cuidadoso, responsável e de qualidade. Com
            máquina reta e overloque, atende diferentes necessidades, desde
            pequenos ajustes até apoio na produção de peças.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            O foco é simples e claro: capricho, comunicação próxima e
            compromisso com cada pedido — seja para uso pessoal, loja, confecção
            ou parceria de produção.
          </p>
        </div>
      </div>
    </section>
  );
}
