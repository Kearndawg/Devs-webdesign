import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
} from "lucide-react";

const BRAND = {
  name: "Dev's Web Design",
  city: "Iowa City, IA",
  email: "devs.web.design@gmail.com",
  phone: "712-314-0712",
};

function Button({ children, href, variant = "primary" }) {
  const styles = {
    primary:
      "bg-gradient-to-r from-orange-500 via-pink-500 to-rose-400 text-white px-5 py-3 rounded-2xl font-semibold hover:opacity-90",
    secondary:
      "border border-zinc-300 text-zinc-800 px-4 py-2 rounded-2xl font-semibold",
  };
  return (
    <a href={href} className={styles[variant]}>
      {children}
    </a>
  );
}

export default function App() {
  const mailto = useMemo(
    () => `mailto:${BRAND.email}`,
    []
  );

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Header */}
      <header className="border-b bg-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Dev's Web Design logo"
            className="h-10 w-auto"
          />
          <div>
            <div className="font-bold">{BRAND.name}</div>
            <div className="text-xs text-zinc-500">{BRAND.city}</div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button href={mailto} variant="secondary">
            <Mail className="inline h-4 w-4 mr-1" /> Email
          </Button>
          <Button
            href={`tel:${BRAND.phone.replace(/[^0-9]/g, "")}`}
            variant="secondary"
          >
            <Phone className="inline h-4 w-4 mr-1" /> Call
          </Button>
        </div>
      </header>

      {/* Hero */}
      <main className="px-6 py-20 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold mb-6"
        >
          Websites for small businesses — without the tech headache
        </motion.h1>

        <p className="text-zinc-600 mb-10 text-lg">
          You tell me what you want. I handle the design, setup, and tech so you
          can focus on running your business.
        </p>

        <Button href="#contact">
          Get a free quote <ArrowRight className="inline h-4 w-4 ml-1" />
        </Button>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {BRAND.name}
      </footer>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6">
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-3 rounded-full shadow-lg font-semibold cursor-pointer">
          Chat with us
        </div>
      </div>
    </div>
  );
}
