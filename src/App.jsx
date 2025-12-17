import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  ShieldCheck,
  Zap,
  Wrench,
  LayoutTemplate,
} from "lucide-react";

const BRAND = {
  name: "Dev's Web Design",
  tagline: "Affordable, clean websites that help small businesses grow.",
  city: "Iowa City, IA",
  email: "devs.web.design@gmail.com",
  phone: "712-314-0712",
};

const ACCENT = "from-orange-500 via-pink-500 to-rose-400";

function classNames(...c) {
  return c.filter(Boolean).join(" ");
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function Button({ children, href, variant = "primary", size = "md" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition focus:outline-none";
  const sizes = {
    sm: "px-3.5 py-2 text-sm",
    md: "px-4.5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
  };
  const variants = {
    primary:
      "bg-gradient-to-r from-orange-500 via-pink-500 to-rose-400 text-white shadow hover:opacity-90",
    secondary:
      "bg-white text-zinc-900 border border-zinc-200 shadow-sm hover:bg-zinc-50",
  };

  return (
    <a href={href} className={classNames(base, sizes[size], variants[variant])}>
      {children}
    </a>
  );
}

function Section({ id, eyebrow, title, desc, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
              {title}
            </h2>
          )}
          {desc && <p className="mt-3 text-base text-zinc-600">{desc}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const mailto = useMemo(() => `mailto:${BRAND.email}`, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div
              className={classNames(
                "grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br",
                ACCENT,
                "text-white shadow"
              )}
            >
              <img src="/logo.png" alt="Dev's Web Design logo" className="h-6 w-auto" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight">{BRAND.name}</div>
              <div className="text-[11px] text-zinc-500">{BRAND.city}</div>
            </div>
          </a>

          <div className="flex items-center gap-2">
            <Button href={mailto} variant="secondary" size="sm">
              <Mail className="h-4 w-4" /> Email
            </Button>
            <Button href={`tel:${BRAND.phone.replace(/[^0-9]/g, "")}`} variant="secondary" size="sm">
              <Phone className="h-4 w-4" /> Call
            </Button>
            <Button href="#contact" size="sm">
              Get a quote <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Pill>Small-business websites • Built to convert</Pill>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              Sell more with a website that works — not just one that exists.
            </motion.h1>
            <p className="mt-5 text-lg text-zinc-600">{BRAND.tagline}</p>
            <div className="mt-7 flex gap-3">
              <Button href="#pricing" size="lg">
                See pricing <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#work" variant="secondary" size="lg">
                View examples
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Services */}
      <div className="mt-24 py-16">
        <Section
          id="services"
          eyebrow="What you get"
          title="Done-for-you websites for real-world businesses"
          desc="Restaurants, local shops, and service businesses — without tech confusion."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm"><Zap /> Fast & mobile-first</div>
            <div className="rounded-3xl bg-white p-6 shadow-sm"><ShieldCheck /> Trust builders</div>
            <div className="rounded-3xl bg-white p-6 shadow-sm"><LayoutTemplate /> Custom design</div>
            <div className="rounded-3xl bg-white p-6 shadow-sm"><Wrench /> Easy updates</div>
          </div>
        </Section>
      </div>

      {/* Pricing */}
      <div className="py-16 bg-white">
        <Section id="pricing" eyebrow="Packages" title="Simple pricing">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-3xl border p-6">Starter — $299</div>
            <div className="rounded-3xl border p-6">Growth — $499</div>
            <div className="rounded-3xl border p-6">Pro — $1299</div>
          </div>
        </Section>
      </div>

      {/* Contact */}
      <div className="py-16" id="contact">
        <Section eyebrow="Get a quote" title="Tell me what you need">
          <Button href={mailto} size="lg">
            Email me <Mail className="h-4 w-4" />
          </Button>
        </Section>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {BRAND.name}
      </footer>

      {/* Chat */}
      <div className="fixed bottom-6 right-6">
        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-rose-400 text-white px-5 py-3 rounded-full shadow-lg font-semibold">
          Chat with us
        </div>
      </div>
    </div>
  );
}
