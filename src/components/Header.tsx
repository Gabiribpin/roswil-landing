"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "./ButtonLink";
import { IconClose, IconMenu, IconWhatsApp } from "./icons";
import { siteConfig, whatsappLink } from "@/lib/site";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open
          ? "border-b border-blush/50 bg-cream/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link
          href="#inicio"
          className="group flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold"
          aria-label={`${siteConfig.brandName} — início`}
        >
          <Image
            src={siteConfig.logoSrc}
            alt={`Logo ${siteConfig.brandName}`}
            width={88}
            height={88}
            className="h-16 w-16 object-contain transition duration-300 group-hover:scale-[1.03] md:h-20 md:w-20"
            priority
          />
          <span className="font-display text-xl tracking-wide text-ink md:text-2xl">
            {siteConfig.brandName}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition hover:text-rose-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink
            href={whatsappLink()}
            external
            className="!py-2.5"
            ariaLabel="Solicitar orçamento pelo WhatsApp"
          >
            <IconWhatsApp className="h-4 w-4" />
            Solicitar orçamento
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blush-deep/40 bg-white/70 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <IconClose className="h-5 w-5" />
          ) : (
            <IconMenu className="h-5 w-5" />
          )}
        </button>
      </div>

      <div
        id="menu-mobile"
        className={`border-t border-blush/40 bg-cream/95 backdrop-blur-md lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4"
          aria-label="Menu mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-blush/40"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <ButtonLink
            href={whatsappLink()}
            external
            className="mt-3 w-full"
            ariaLabel="Solicitar orçamento pelo WhatsApp"
          >
            <IconWhatsApp className="h-4 w-4" />
            Solicitar orçamento
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
