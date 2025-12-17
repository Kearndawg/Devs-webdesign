import React, { useMemo } from "react";
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
  tagline: "Clean, affordable websites that help small businesses grow.",
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
  const base = "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition";
  const sizes = { sm: "px-3.5 py-2 text-sm", md: "px-4.5 py-2.5 text-sm", lg: "px-5 py-3 text-base" };
  const variants = {
    primary: "bg-gradient-to-r from-orange-500 via-pink-500 to-rose-400 text-white shadow hover:opacity-90",
    secondary: "bg-white text-zinc-900 border border-zinc-200 shadow-sm hover:bg-zinc-50",
  };

  return (
    <a href={href} className={`${base} ${sizes[size]} ${variants[variant]}`}>
      {children}
    </a>
  );
}

function Section({ id, eyebrow, title, desc, children }) {
  return (
    <section id={id} className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{eyebrow}</p>}
          {title && <h2 className="mt-2 text-3xl font-extrabold">{title}</h2>}
          {desc && <p className="mt-3 text-lg text-zinc-600">{desc}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex gap-4">
        <div className={`rounded-2xl p-3 text-white bg-gradient-to-br ${ACCENT}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="mt-2 text-sm text-zinc-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function PriceCard({ name, price, note, features, popular }) {
  return (
    <div className={`relative rounded-3xl border bg-white p-7 shadow-sm ${popular ? "border-orange-400" : "border-zinc-200"}`}>
      {popular && <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-3 py-1 text-xs font-semibold text-white">Most popular</div>}
      <h3 className="text-lg font-extrabold">{name}</h3>
      <p className="mt-1 text-sm text-zinc-600">{note}</p>
      <div className="mt-4 text-4xl font-extrabold">{price}</div>
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex gap-2 text-sm"><Check className="h-4 w-4 mt-0.5" />{f}</li>
        ))}
      </ul>
      <div className="mt-7"><Button href="#contact" size="lg">Get started <ArrowRight className="h-4 w-4" /></Button></div>
    </div>
  );
}

export default function App() {
  const mailto = useMemo(() => `mailto:${BRAND.email}`, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" className="h-9" />
            <div><div className="text-sm font-extrabold">{BRAND.name}</div><div className="text-xs text-zinc-500">{BRAND.city}</div></div>
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-semibold">
            <a href="#services">Services</a><a href="#work">Work</a><a href="#pricing">Pricing</a><a href="#contact">Get a quote</a>
          </nav>
          <div className="flex gap-2">
            <Button href={mailto} variant="secondary" size="sm"><Mail className="h-4 w-4" /> Email</Button>
            <Button href={`tel:${BRAND.phone.replace(/[^0-9]/g, "")}`} variant="secondary" size="sm"><Phone className="h-4 w-4" /> Call</Button>
          </div>
        </div>
      </header>

      <main id="home" className="mx-auto max-w-6xl px-6 pt-24">
        <Pill>Small-business websites • Built to convert</Pill>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 text-4xl sm:text-5xl font-extrabold">Sell more with a website that actually works.</motion.h1>
        <p className="mt-5 text-lg text-zinc-600 max-w-2xl">{BRAND.tagline}</p>
        <div className="mt-8 flex gap-3"><Button href="#pricing" size="lg">See pricing</Button><Button href="#contact" variant="secondary" size="lg">Get a quote</Button></div>
      </main>

      <Section id="services" eyebrow="What you get" title="Done-for-you websites for real businesses" desc="Results without the tech confusion.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={Zap} title="Fast & mobile-first" desc="Optimized for speed and phones." />
          <FeatureCard icon={ShieldCheck} title="Trust builders" desc="Reviews and credibility." />
          <FeatureCard icon={LayoutTemplate} title="Custom design" desc="Built for your business." />
          <FeatureCard icon={Wrench} title="Easy updates" desc="Change things anytime." />
          <FeatureCard icon={Sparkles} title="AI chatbot" desc="24/7 lead capture." />
        </div>
      </Section>

      <Section id="work" eyebrow="Examples" title="Examples of Our Past Projects">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {["Fiddlehead Gardens", "Iowa Men's Club Soccer", "Local Restaurants"].map((t) => (
            <div key={t} className="rounded-3xl border bg-white p-6 shadow-sm"><LayoutTemplate className="h-6 w-6 mb-4 text-orange-500" /><h3 className="font-bold">{t}</h3><p className="text-sm text-zinc-600 mt-2">Conversion-focused layout.</p></div>
          ))}
        </div>
      </Section>

      <Section id="pricing" title="Packages" desc="Clear pricing and no hidden fees.">
        <div className="grid gap-6 lg:grid-cols-3">
          <PriceCard name="Starter" price="$299" note="New businesses" features={["1 page", "Mobile-first", "Contact form", "Basic SEO"]} />
          <PriceCard name="Growth" price="$499" note="Best value" popular features={["Up to 5 pages", "Gallery", "Reviews"]} />
          <PriceCard name="Pro" price="$1299" note="AI + management" features={["Up to 10 pages", "AI chatbot", "Unlimited updates"]} />
        </div>
      </Section>

      <Section id="contact" eyebrow="Get started" title="Let’s build something great" desc="Submit a quote and we'll respond same day!">
        <Button href={mailto} size="lg">Email me <Mail className="h-4 w-4" /></Button>
      </Section>

      <Section id="faq" title="FAQs" desc="Common questions.">
        <div className="grid gap-4 md:grid-cols-2">
          {[{q:"How long does it take to make my website?",a:"Depending on the complexity of your business, 5–10 days."},{q:"Am I able to make edits to my website later?",a:"Yes! We can make edits anytime! "},{q:"What if I don't have professional photos?",a:"We can help! The pro package includes a content creation option meaning we will take professional photos for you and your website."},{q:"Why are your prices lower than most agencies?",a:"We keep our prices low by running a lean operation with no agency overhead. You work directly with our web designer, which means faster communication, less confusion, and a high-quality website without paying for extras you don’t need."}].map(i=> (
            <div key={i.q} className="rounded-3xl border bg-white p-6"><h3 className="font-bold mb-2">{i.q}</h3><p className="text-sm text-zinc-600">{i.a}</p></div>
          ))}
        </div>
      </Section>

      <div className="fixed bottom-6 right-6"><div className="bg-gradient-to-r from-orange-500 via-pink-500 to-rose-400 text-white px-5 py-3 rounded-full shadow-lg font-semibold">Chat with us</div></div>
    </div>
  );
}
