"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "./ButtonLink";
import { BrandLogo } from "./BrandLogo";
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
          ? "border-b border-blush/40 bg-[#fffcf9]/95 backdrop-blur-md shadow-soft"
          : "bg-[#fffcf9]/70 backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8 md:py-3.5">
        <Link
          href="#inicio"
          className="group flex min-w-0 items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold sm:gap-4"
          aria-label={`${siteConfig.brandName} — início`}
        >
          <BrandLogo
            size="xl"
            priority
            className="transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_0_4px_#fff,0_0_0_7px_rgba(168,102,112,0.35),0_16px_32px_rgba(143,81,90,0.28)]"
          />
          <span className="font-display text-[1.65rem] leading-none tracking-wide text-ink sm:text-3xl md:text-[2rem]">
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
