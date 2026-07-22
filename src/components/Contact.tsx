"use client";

import { FormEvent, useState } from "react";
import { ButtonLink } from "./ButtonLink";
import { IconWhatsApp } from "./icons";
import { serviceTypeOptions } from "@/lib/services";
import {
  buildContactWhatsAppMessage,
  siteConfig,
  whatsappLink,
} from "@/lib/site";

export function Contact() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [serviceType, setServiceType] = useState(serviceTypeOptions[0]);
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = buildContactWhatsAppMessage({
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      serviceType,
      quantity: quantity.trim(),
      message: message.trim(),
    });
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contato"
      className="relative scroll-mt-24 py-20 md:py-28"
      aria-labelledby="contato-title"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-gold">
              Contato
            </p>
            <h2
              id="contato-title"
              className="mt-3 font-display text-3xl text-ink sm:text-4xl"
            >
              Peça informações ou orçamento
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Preencha o formulário e envie sua solicitação diretamente pelo
              WhatsApp, com uma mensagem organizada. Ou, se preferir, fale agora
              com um clique.
            </p>

            <div className="mt-8 space-y-3 text-sm text-ink-soft">
              <p>
                <span className="font-medium text-ink">WhatsApp:</span>{" "}
                {siteConfig.whatsappDisplay}
              </p>
              <p>
                <span className="font-medium text-ink">Atendimento:</span>{" "}
                {siteConfig.location}
              </p>
            </div>

            <div className="mt-8">
              <ButtonLink
                href={whatsappLink()}
                external
                className="w-full sm:w-auto !px-8 !py-4 text-base"
                ariaLabel="Falar agora pelo WhatsApp"
              >
                <IconWhatsApp className="h-5 w-5" />
                Falar agora pelo WhatsApp
              </ButtonLink>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[1.75rem] border border-blush/60 bg-white/80 p-6 shadow-soft sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-ink">
                  Nome
                </span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="field"
                  placeholder="Seu nome"
                />
              </label>

              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-ink">
                  WhatsApp
                </span>
                <input
                  required
                  name="whatsapp"
                  inputMode="tel"
                  autoComplete="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="field"
                  placeholder="(00) 00000-0000"
                />
              </label>

              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-ink">
                  Tipo de serviço
                </span>
                <select
                  required
                  name="serviceType"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="field"
                >
                  {serviceTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-ink">
                  Quantidade aproximada de peças
                </span>
                <input
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="field"
                  placeholder="Ex.: 10 peças"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-ink">
                  Mensagem
                </span>
                <textarea
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="field resize-y min-h-[120px]"
                  placeholder="Conte um pouco sobre o que você precisa"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-gold px-6 py-3.5 text-sm font-medium text-white shadow-soft transition hover:bg-rose-gold-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2"
            >
              <IconWhatsApp className="h-4 w-4" />
              Enviar solicitação pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
