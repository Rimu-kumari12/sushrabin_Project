import { Code2, Smartphone, Boxes, ShoppingBag, Server, Palette, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    Icon: Code2,
    title: "Web Development",
    desc: "Modern, responsive, high-performance websites and apps.",
    stack: ["React.js", "Next.js", "Angular", "TypeScript", "WordPress", "Shopify"],
  },
  {
    Icon: Smartphone,
    title: "App Development",
    desc: "High-performing mobile applications for Android and iOS.",
    stack: ["Flutter", "React Native", "Native iOS", "Native Android"],
  },
  {
    Icon: Boxes,
    title: "Blockchain Development",
    desc: "Secure, scalable blockchain systems for transparent, decentralized products.",
    stack: ["Smart Contracts", "DApps", "ERC-20 / BEP-20", "NFT Marketplaces", "DeFi", "Web3 & Wallets", "Enterprise Chains", "Security Audits"],
  },
  {
    Icon: ShoppingBag,
    title: "E-Commerce Solutions",
    desc: "Custom storefronts that help businesses sell online efficiently.",
    stack: ["Shopify", "WooCommerce", "Custom E-commerce"],
  },
  {
    Icon: Server,
    title: "Backend Engineering",
    desc: "Robust, scalable, and secure backend systems tailored to your needs.",
    stack: ["Node.js", "NestJS", "Golang", "FastAPI", "Django", "Laravel", "PHP"],
  },
  {
    Icon: Palette,
    title: "Design & Strategy",
    desc: "Product thinking, UX research, and brand systems that scale with you.",
    stack: ["Discovery", "UX Research", "UI Systems", "Brand Identity"],
  },
];

const Services = () => {
  return (
    <>
      <section className="container py-20 md:py-28">
        <p className="text-sm font-medium text-accent">Services</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl text-balance">
          One studio. <span className="font-serif-display">Every layer of the stack.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          From product strategy to launch, we partner across the full lifecycle. Pick a service
          or hire a complete cross-functional pod.
        </p>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ Icon, title, desc, stack }) => (
            <article key={title} className="group rounded-3xl border border-border bg-card p-8 transition-colors hover:bg-surface-cream">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{title}</h2>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
              <ul className="mt-8 grid grid-cols-2 gap-2">
                {stack.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-accent" />
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="rounded-[2.5rem] bg-soft p-10 md:p-16">
          <h2 className="max-w-3xl text-4xl md:text-5xl font-semibold text-balance">
            Not sure where to start? <span className="font-serif-display">Let's talk.</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            A 30-minute call is enough to scope your idea and recommend the smallest first step.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
          >
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
