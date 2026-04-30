import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ShieldCheck, Rocket, Users, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import Counter from "@/components/Counter";

const services = [
  { title: "Web Development", desc: "React, Next.js, Angular — fast, accessible, beautifully built.", tag: "01" },
  { title: "App Development", desc: "Flutter, React Native, native iOS & Android.", tag: "02" },
  { title: "Blockchain", desc: "Smart contracts, DApps, NFTs, DeFi, Web3.", tag: "03" },
  { title: "E-Commerce", desc: "Shopify, WooCommerce, custom storefronts.", tag: "04" },
  { title: "Backend Engineering", desc: "Node, Nest, Go, FastAPI, Django, Laravel.", tag: "05" },
  { title: "Design & Strategy", desc: "Product thinking, UX & brand systems.", tag: "06" },
];

const workflow = [
  { step: "01", title: "Discovery & Strategy", desc: "We define goals, audiences, and a clear roadmap." },
  { step: "02", title: "Design & Prototyping", desc: "Crafting interfaces that feel inevitable." },
  { step: "03", title: "Development", desc: "Clean, scalable code with weekly demos." },
  { step: "04", title: "Testing & Optimization", desc: "Performance, accessibility, security — verified." },
  { step: "05", title: "Launch & Growth", desc: "Ship, measure, iterate. Long-term partnership." },
];

const valueProps = [
  { Icon: Sparkles, title: "Best for every budget", desc: "Transparent pricing and scalable solutions for startups and enterprises alike." },
  { Icon: ShieldCheck, title: "Protected delivery", desc: "Robust processes ensure trust, security, and reliability at every step." },
  { Icon: Rocket, title: "Quality, delivered fast", desc: "Senior engineers and a proven track record — 437+ projects shipped." },
  { Icon: Users, title: "End-to-end support", desc: "From planning through long-term care, across USA, India, Dubai, Japan, and Italy." },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="container relative grid gap-12 py-20 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7 reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Millions of Applicants & Projects
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] text-balance md:text-6xl lg:text-7xl">
              Software that feels{" "}
              <span className="font-serif-display text-accent">inevitable.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Sushrabin Private Limited is a leading IT services company. With 67+ senior
              engineers and 8+ years of experience, we've delivered 437+ web, mobile, and
              blockchain products to teams worldwide.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3.5 text-sm font-medium hover:bg-secondary backdrop-blur"
              >
                View work
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
                ))}
                <span className="ml-2 font-medium text-foreground">4.8</span>
              </div>
              <span>15,944 client ratings</span>
            </div>
          </div>

          <div className="lg:col-span-5 reveal">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/20 to-transparent blur-2xl" />
              <img
                src={heroImg}
                alt="Soft glass shapes representing modern software craftsmanship"
                width={1536}
                height={1280}
                className="relative w-full rounded-[2rem] shadow-elegant"
              />
              <div className="glass absolute -left-4 bottom-8 hidden rounded-2xl px-4 py-3 shadow-soft sm:block">
                <p className="text-xs text-muted-foreground">Active projects</p>
                <p className="mt-0.5 text-2xl font-semibold">42</p>
              </div>
              <div className="glass absolute -right-4 top-8 hidden rounded-2xl px-4 py-3 shadow-soft sm:block">
                <p className="text-xs text-muted-foreground">Client satisfaction</p>
                <p className="mt-0.5 text-2xl font-semibold">98%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE OF STACK */}
      <section className="border-y border-border bg-card">
        <div className="container flex flex-wrap items-center justify-around gap-x-10 gap-y-4 py-8 text-sm text-muted-foreground">
          {["React", "Next.js", "Flutter", "Node.js", "Solidity", "Shopify", "Go", "Django"].map((t) => (
            <span key={t} className="font-medium">{t}</span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent">Our offerings</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl text-balance">
              Everything you need, <span className="font-serif-display">crafted in one place.</span>
            </h2>
          </div>
          <Link to="/services" className="text-sm font-medium hover:text-accent">
            See all services →
          </Link>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative bg-card p-8 transition-colors hover:bg-surface-cream">
              <p className="text-xs text-muted-foreground">{s.tag}</p>
              <h3 className="mt-8 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ArrowRight className="absolute bottom-8 right-8 h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
            </div>
          ))}
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="bg-soft py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent">Why work with us</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl text-balance">
              Strong teams, <span className="font-serif-display">successful projects.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our expert-driven approach ensures high-quality delivery, seamless collaboration,
              and scalable solutions for every project.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-3xl bg-card p-7 shadow-soft">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent">How it works</p>
          <h2 className="mt-3 text-4xl font-semibold md:text-5xl text-balance">
            From idea to launch — <span className="font-serif-display">together.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {workflow.map((w) => (
            <div key={w.step} className="rounded-3xl border border-border p-6">
              <p className="font-serif-display text-3xl text-accent">{w.step}</p>
              <h3 className="mt-6 font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { num: 6, suffix: "+", label: "Years of experience", desc: "Consistent delivery, project after project." },
              { num: 437, suffix: "+", label: "Projects delivered", desc: "A track record built on precision." },
              { num: 98, suffix: "%", label: "Client satisfaction", desc: "Long-term partnerships, exceptional results." },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-6xl md:text-7xl font-semibold tracking-tight">
                  <Counter to={s.num} suffix={s.suffix} />
                </p>
                <h3 className="mt-4 text-xl font-medium">{s.label}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-accent">Testimonials</p>
          <blockquote className="mt-6 font-serif-display text-3xl leading-snug md:text-5xl text-balance">
            "Their engineers provided expert guidance on architecture, CI/CD, and security
            hardening. The hands-on approach and documentation sped up our developer onboarding
            significantly."
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-primary" />
            <div className="text-left">
              <p className="text-sm font-medium">Jim Newman</p>
              <p className="text-xs text-muted-foreground">CEO, Marketing Story</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24 md:pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-surface-cream to-accent-soft p-10 md:p-16">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold text-balance">
              Find the right team. <span className="font-serif-display">Ship something great.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us about your project — we'll come back within one business day.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        </div>
      </section>
    </>
  );
};

export default Index;
