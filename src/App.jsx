import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
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

function PriceCard({ name, price, note, features, popular }) {
  return (
    <div
      className={classNames(
        "relative rounded-3xl border bg-white p-7 shadow-sm",
        popular ? "border-orange-500" : "border-zinc-200"
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-3 py-1 text-xs font-semibold text-white shadow">
          Most popular
        </div>
      )}

      <h3 className="text-lg font-extrabold">{name}</h3>
      <p className="mt-1 text-sm text-zinc-600">{note}</p>

      <div className="mt-4 text-4xl font-extrabold">{price}</div>

      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <Button href="#contact" size="lg" className="w-full">
          Get started <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default function App() {
  const mailto = useMemo(() => `mailto:${BRAND.email}`, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Dev's Web Design logo"
              className="h-9 w-auto"
            />
            <div>
              <div className="text-sm font-extrabold">{BRAND.name}</div>
              <div className="text-xs text-zinc-500">{BRAND.city}</div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button href={mailto} variant="secondary" size="sm">
              <Mail className="h-4 w-4" /> Email
            </Button>
            <Button
              href={`tel:${BRAND.phone.replace(/[^0-9]/g, "")}`}
              variant="secondary"
              size="sm"
            >
              <Phone className="h-4 w-4" /> Call
            </Button>
            <Button href="#contact" size="sm">
              Get a quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6 pt-20">
        <Pill>Small-business websites • Built to convert</Pill>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-4xl sm:text-5xl font-extrabold"
        >
          Sell more with a website that actually works.
        </motion.h1>

        <p className="mt-5 text-lg text-zinc-600">{BRAND.tagline}</p>

        <div className="mt-8 flex gap-3">
          <Button href="#pricing" size="lg">
            See pricing
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            Get a quote
          </Button>
        </div>
      </main>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-extrabold mb-10">Pricing</h2>

          <div className="grid gap-6 lg:grid-cols-3">
            <PriceCard
              name="Starter"
              price="$299"
              note="Perfect for new businesses"
              features={[
                "1-page website",
                "Mobile-first design",
                "Contact form",
                "Basic SEO setup",
              ]}
            />

            <PriceCard
              name="Growth"
              price="$499"
              note="Best for growing businesses"
              popular
              features={[
                "Up to 5 pages",
                "Service pages",
                "Photo gallery",
                "Review section",
              ]}
            />

            <PriceCard
              name="Pro"
              price="$1299"
              note="Hands-off management + AI"
              features={[
                "Up to 10 pages",
                "AI chatbot",
                "Unlimited updates",
                "Ongoing site management",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="mx-auto max-w-xl text-center px-6">
          <h2 className="text-3xl font-extrabold mb-4">Get in touch</h2>
          <p className="text-zinc-600 mb-8">
            Tell me what you need and I’ll make it happen — no tech stress.
          </p>
          <Button href={mailto} size="lg">
            Email me <Mail className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Chat */}
      <div className="fixed bottom-6 right-6">
        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-rose-400 text-white px-5 py-3 rounded-full shadow-lg font-semibold cursor-pointer">
          Chat with us
        </div>
      </div>
    </div>
  );
}
