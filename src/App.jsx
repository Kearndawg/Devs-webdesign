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

// Single-file, production-ready landing site for selling web design to small businesses.
// Tailwind is assumed available. Replace placeholders (brand, email, phone, portfolio links).

const BRAND = {
  name: "Dev's Web Design",
  tagline: "Affordable, clean websites that help small businesses grow.",
  city: "Iowa City, IA",
  email: "hello@yourdomain.com",
  phone: "(555) 123-4567",
  domain: "yourdomain.com",
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

function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-zinc-400/60";
  const sizes = {
    sm: "px-3.5 py-2 text-sm",
    md: "px-4.5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
  };
  const variants = {
    primary:
      "bg-zinc-900 text-white shadow hover:bg-zinc-800 active:bg-zinc-950",
    secondary:
      "bg-white text-zinc-900 border border-zinc-200 shadow-sm hover:bg-zinc-50",
    ghost: "bg-transparent text-zinc-900 hover:bg-zinc-100",
  };
  const cls = classNames(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

function Section({ id, eyebrow, title, desc, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
              {title}
            </h2>
          ) : null}
          {desc ? (
            <p className="mt-3 text-base leading-relaxed text-zinc-600">
              {desc}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-zinc-900 p-3 text-white shadow">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-zinc-900">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function PriceCard({
  name,
  price,
  note,
  features,
  popular,
  ctaHref,
  ctaText,
}) {
  return (
    <div
      className={classNames(
        "relative rounded-3xl border bg-white p-7 shadow-sm",
        popular ? "border-zinc-900" : "border-zinc-200"
      )}
    >
      {popular ? (
        <div className="absolute -top-3 left-6 rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white shadow">
          Most popular
        </div>
      ) : null}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-extrabold text-zinc-900">{name}</h3>
          <p className="mt-1 text-sm text-zinc-600">{note}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-extrabold tracking-tight text-zinc-900">
            {price}
          </div>
          <div className="mt-1 text-xs text-zinc-500">starting</div>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-zinc-700">
            <Check className="mt-0.5 h-4 w-4 flex-none" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <Button href={ctaHref} size="lg" className="w-full">
          {ctaText} <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function PortfolioCard({ title, industry, bullets }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-zinc-900">{title}</h3>
          <p className="mt-1 text-sm text-zinc-600">{industry}</p>
        </div>
        <div className="rounded-2xl bg-zinc-100 p-3">
          <LayoutTemplate className="h-5 w-5 text-zinc-700" />
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-zinc-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:underline"
        >
          Request a similar design <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <span className="text-sm font-bold text-zinc-900">{q}</span>
        <span className="text-zinc-500">{open ? "–" : "+"}</span>
      </button>
      {open ? (
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">{a}</p>
      ) : null}
    </div>
  );
}

function useMailto() {
  return useMemo(() => {
    const subject = encodeURIComponent("Website design inquiry");
    const body = encodeURIComponent(
      `Hi ${BRAND.name},\n\nI'm interested in a website. Here are the details:\n- Business name:\n- Industry:\n- Location/service area:\n- Current website (if any):\n- What you need (pages/features):\n- Ideal launch date:\n- Budget range:\n\nThanks!`
    );
    return `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  }, []);
}

export default function SmallBizWebDesignSalesSite() {
  const mailto = useMailto();
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    notes: "",
  });

  const submitHref = useMemo(() => {
    const subject = encodeURIComponent(
      `New website inquiry: ${form.business || form.name || "Small Business"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nNotes:\n${form.notes}\n`
    );
    return `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Top gradient */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-72 bg-gradient-to-b from-zinc-100 to-transparent" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <div
              className={classNames(
                "grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br",
                ACCENT,
                "text-white shadow"
              )}
            >
              <img src="/logo.png" alt="Dev's Web Design logo" className="h-5 w-5 object-contain" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight">
                {BRAND.name}
              </div>
              <div className="text-[11px] text-zinc-500">{BRAND.city}</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm font-medium text-zinc-700 hover:text-zinc-900" href="#services">
              Services
            </a>
            <a className="text-sm font-medium text-zinc-700 hover:text-zinc-900" href="#work">
              Work
            </a>
            <a className="text-sm font-medium text-zinc-700 hover:text-zinc-900" href="#pricing">
              Pricing
            </a>
            <a className="text-sm font-medium text-zinc-700 hover:text-zinc-900" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href={mailto}
              variant="secondary"
              size="md"
              className="hidden sm:inline-flex"
            >
              <Mail className="h-4 w-4" /> Email
            </Button>
            <Button
              href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`}
              variant="secondary"
              size="md"
              className="hidden sm:inline-flex"
            >
              <Phone className="h-4 w-4" /> Call
            </Button>
            <Button href="#contact" size="md">
              Get a quote <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <Pill>Small-business websites • Built to convert</Pill>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl"
              >
                Sell more with a website that works — without the tech headaches.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg"
              >
                {BRAND.tagline} You tell me what you want and need — I handle the tech, design, and setup so you don’t have to worry about any of it.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="mt-7 flex flex-col gap-3 sm:flex-row"
              >
                <Button href="#pricing" size="lg">
                  See pricing <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="#work" variant="secondary" size="lg">
                  View examples
                </Button>
              </motion.div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-extrabold">7–14</div>
                  <div className="mt-1 text-sm text-zinc-600">day typical launch</div>
                </div>
                <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-extrabold">95+</div>
                  <div className="mt-1 text-sm text-zinc-600">Google Lighthouse focus</div>
                </div>
                <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-extrabold">0</div>
                  <div className="mt-1 text-sm text-zinc-600">tech headaches for you</div>
                </div>
              </div>
            </div>

            {/* Hero mock */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-zinc-200 to-transparent blur-2xl" />
              <div className="relative rounded-[2.25rem] border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-zinc-300" />
                    <div className="h-3 w-3 rounded-full bg-zinc-300" />
                    <div className="h-3 w-3 rounded-full bg-zinc-300" />
                  </div>
                  <div className="text-xs text-zinc-500">preview</div>
                </div>
                <div className="mt-5 rounded-3xl bg-zinc-50 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-bold">Built for your business</div>
                      <div className="mt-1 text-xs text-zinc-500">
                        Restaurants • Local shops • Service businesses
                      </div>
                    </div>
                    <div className="rounded-2xl bg-zinc-900 px-3 py-2 text-xs font-semibold text-white">
                      Get started
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white p-4 shadow-sm">
                      <div className="text-xs font-semibold text-zinc-500">
                        Popular services
                      </div>
                      <div className="mt-3 space-y-2">
                        {[
                          "Restaurants",
                          "Local small businesses",
                          "Landscaping",
                          "Home services",
                        ].map((s) => (
                          <div
                            key={s}
                            className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-3 py-2"
                          >
                            <span className="text-sm font-medium">{s}</span>
                            <ArrowRight className="h-4 w-4 text-zinc-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-3xl bg-white p-4 shadow-sm">
                      <div className="text-xs font-semibold text-zinc-500">
                        Why choose us
                      </div>
                      <div className="mt-3 space-y-3">
                        {["Same-week availability", "Upfront pricing", "5-star rated"].map(
                          (x) => (
                            <div key={x} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-4 w-4" />
                              <p className="text-sm text-zinc-700">{x}</p>
                            </div>
                          )
                        )}
                      </div>
                      <div className="mt-4 rounded-2xl bg-zinc-900 px-3 py-2 text-center text-sm font-semibold text-white">
                        Get a quote in 60 seconds
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {["Mobile-first", "Fast load", "SEO-ready"].map((t) => (
                    <div
                      key={t}
                      className="rounded-3xl border border-zinc-200 bg-white px-4 py-3 text-center text-sm font-semibold"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-20 py-16">
          <Section
            id="services"
            eyebrow="What you get"
            title="Done-for-you websites for real-world small businesses"
            desc="If your customers are on their phones, your website needs to be too. These builds are clean, fast, and built around calls, quotes, bookings, and trust."
          >
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={Zap}
                title="Fast + mobile-first"
                desc="Speed matters. I build lightweight pages that feel snappy and look great on any screen."
              />
              <FeatureCard
                icon={ShieldCheck}
                title="Trust builders"
                desc="Reviews, before/after, certifications, and clear CTAs — the stuff that makes people pick you."
              />
              <FeatureCard
                icon={Globe}
                title="Local SEO setup"
                desc="Clean structure, metadata, and on-page basics so you can show up when people search."
              />
              <FeatureCard
                icon={Wrench}
                title="Simple editing"
                desc="Need to update photos or pricing? I can handle it, or set you up with easy updates."
              />
              <FeatureCard
                icon={LayoutTemplate}
                title="Custom design"
                desc="No cookie-cutter themes. Each site matches your brand and your customers."
              />
              <FeatureCard
                icon={Phone}
                title="Conversion-focused"
                desc="Click-to-call, quick quote forms, and clear next steps — built around getting leads."
              />
            </div>

            <div className="mt-10 rounded-[2.25rem] border border-zinc-200 bg-white p-7 shadow-sm">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-extrabold">Want me to audit your current site?</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    Send your URL and I’ll reply with 5 quick wins (speed, clarity, calls-to-action, and trust).
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href={mailto} variant="secondary" size="lg">
                    Email your URL <Mail className="h-4 w-4" />
                  </Button>
                  <Button href="#contact" size="lg">
                    Free audit <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* Work */}
        <div className="py-16 bg-zinc-50">
          <Section
            id="work"
            eyebrow="Examples"
            title="Sample concepts (swap these with your real portfolio)"
            desc="Add screenshots and links once you have live sites. For now, these are positioned by industry with outcomes clients care about."
          >
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <PortfolioCard
                title="Fiddlehead Gardens"
                industry="Landscaping / Outdoor services"
                bullets={["Quote-first homepage", "Before/after gallery", "Service area pages"]}
              />
              <PortfolioCard
                title="Hawkeye Auto Care"
                industry="Auto / Repair"
                bullets={["Click-to-call header", "Services + pricing blocks", "Google Reviews embed"]}
              />
              <PortfolioCard
                title="Downtown Barber Co."
                industry="Salon / Booking"
                bullets={["Booking CTA everywhere", "Staff + styles grid", "Instagram integration"]}
              />
              <PortfolioCard
                title="Local HVAC Pros"
                industry="HVAC / Home services"
                bullets={["Emergency call CTA", "Seasonal promos", "Financing / coupons section"]}
              />
              <PortfolioCard
                title="Midwest Cleaning"
                industry="Cleaning / Residential"
                bullets={["Trust + safety section", "Recurring plans", "Simple intake form"]}
              />
              <PortfolioCard
                title="Coffee & Co."
                industry="Cafe / Retail"
                bullets={["Menu + hours", "Events page", "Google Maps + directions"]}
              />
            </div>
          </Section>
        </div>

        {/* Pricing */}
        <div className="py-16">
          <Section
            id="pricing"
            eyebrow="Simple packages"
            title="Pricing built for small businesses"
            desc="Pick a package, fill out the short intake form, and I handle the rest. Add-ons available if you need more pages or custom features."
          >
            <div className="grid gap-4 lg:grid-cols-3">
              <PriceCard
                name="Starter"
                price="$299"
                note="Perfect for new businesses"
                features={[
                  "1-page website",
                  "Mobile-first design",
                  "Contact form + click-to-call",
                  "Basic SEO setup",
                  "Fast turnaround",
                ]}
                ctaHref="#contact"
                ctaText="Start Starter"
              />
              <PriceCard
                name="Growth"
                price="$499"
                note="Best value for small businesses"
                popular
                features={[
                  "Up to 5 pages",
                  "Service pages (SEO-friendly)",
                  "Photo gallery / before-after",
                  "Review + trust section",
                  "Speed + analytics setup",
                ]}
                ctaHref="#contact"
                ctaText="Start Growth"
              />
              <PriceCard
                name="Pro"
                price="$1,299"
                note="Hands-off website management + AI"
                features={[
                  "Up to 10 pages",
                  "AI chatbot for customer questions",
                  "Unlimited site changes & updates",
                  "Advanced quote / intake forms",
                  "Ongoing website management",
                ]}
                ctaHref="#contact"
                ctaText="Start Pro"
              />
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[{
                t: "Common add-ons",
                d: "Logo refresh, extra pages, copywriting help, booking setup, and local SEO pages.",
              }, {
                t: "Hosting + maintenance",
                d: "Monthly plan available for updates, backups, security checks, and content tweaks.",
              }, {
                t: "Payment options",
                d: "Split payments available for Growth/Pro builds. Ask in the form.",
              }].map((x) => (
                <div key={x.t} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <div className="text-sm font-bold">{x.t}</div>
                  <div className="mt-2 text-sm text-zinc-600">{x.d}</div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* FAQ */}
        <div className="py-16 bg-zinc-50">
          <Section
            id="faq"
            eyebrow="Questions"
            title="FAQ"
            desc="If you don’t see your question here, hit the quote form and I’ll answer fast."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <FAQItem
                q="How fast can you launch?"
                a="Most Starter sites are 7–10 days once I have your content. Growth/Pro usually land in the 2–4 week range depending on pages and revisions."
              />
              <FAQItem
                q="Do you write the words too?"
                a="Yes — I can help polish what you have or write from scratch for an add-on. Either way, we keep it simple and customer-focused."
              />
              <FAQItem
                q="What do you need from me?"
                a="Logo (if you have it), photos, a list of services, service area, hours, and a couple competitor sites you like. I’ll guide you through it."
              />
              <FAQItem
                q="Can you connect my domain and email?"
                a="Yep. If you already own a domain, I’ll connect it. If not, I can walk you through buying one and setting up a professional email."
              />
            </div>
          </Section>
        </div>

        {/* Contact */}
        <div className="py-16">
          <Section
            id="contact"
            eyebrow="Get a quote"
            title="Tell me what you need"
            desc="Fill this out and I’ll reply with a clear quote, timeline, and next steps."
          >
            <div className="grid gap-6 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <div className="rounded-[2.25rem] border border-zinc-200 bg-white p-7 shadow-sm">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold">Your name</span>
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
                        placeholder="Devin"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold">Business name</span>
                      <input
                        value={form.business}
                        onChange={(e) => setForm({ ...form, business: e.target.value })}
                        className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
                        placeholder="Fiddlehead Gardens"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold">Email</span>
                      <input
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
                        placeholder="you@business.com"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold">Phone (optional)</span>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
                        placeholder="(555) 555-5555"
                      />
                    </label>
                  </div>

                  <label className="mt-4 block">
                    <span className="text-sm font-semibold">What do you need?</span>
                    <textarea
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="mt-2 h-32 w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
                      placeholder="Pages (Home/Services/About), booking/quotes, examples you like, ideal launch date, anything else…"
                    />
                  </label>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs text-zinc-500">
                      This form opens your email app — no data is stored on this page.
                    </div>
                    <Button href={submitHref} size="lg">
                      Send request <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="rounded-[2.25rem] border border-zinc-200 bg-white p-7 shadow-sm">
                  <h3 className="text-base font-extrabold">Contact</h3>
                  <div className="mt-4 space-y-3 text-sm">
                    <a
                      className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 hover:bg-zinc-100"
                      href={mailto}
                    >
                      <Mail className="h-4 w-4" />
                      <span className="font-semibold">{BRAND.email}</span>
                    </a>
                    <a
                      className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 hover:bg-zinc-100"
                      href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`}
                    >
                      <Phone className="h-4 w-4" />
                      <span className="font-semibold">{BRAND.phone}</span>
                    </a>
                    <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                      <Globe className="h-4 w-4" />
                      <span className="font-semibold">{BRAND.domain}</span>
                    </div>
                  </div>

                  <div className="mt-7 rounded-3xl bg-zinc-900 p-6 text-white">
                    <div className="flex items-start gap-3">
                      <div className="rounded-2xl bg-white/10 p-3">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">No sketchy surprises</div>
                        <div className="mt-1 text-sm text-white/80">
                          You’ll get a clear scope, timeline, and what’s included before we start.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-xs text-zinc-500">
                    Tip: Replace the sample portfolio above with screenshots + live links as you finish projects.
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* Footer */}
        <footer className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-extrabold">{BRAND.name}</div>
                <div className="mt-1 text-xs text-zinc-500">
                  © {new Date().getFullYear()} • Built for small businesses
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#services"
                  className="rounded-full px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                >
                  Services
                </a>
                <a
                  href="#pricing"
                  className="rounded-full px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  className="rounded-full px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* AI Chatbot Placeholder */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 p-4 shadow-lg text-white text-sm font-semibold cursor-pointer">
            Chat with us
          </div>
        </div>
      </main>
    </div>
  );
}
