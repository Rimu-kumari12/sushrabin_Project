import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type Project = {
  title: string;
  category: "Blockchain" | "Web" | "Mobile" | "E-Commerce" | "Backend";
  client: string;
  year: number;
  desc: string;
  gradient: string;
};

const projects: Project[] = [
  { title: "Helix DeFi Vaults", category: "Blockchain", client: "Helix Protocol", year: 2024, desc: "Yield-aggregating smart contract suite with audited vault strategies.", gradient: "from-blue-200 to-violet-200" },
  { title: "Northwind Storefront", category: "E-Commerce", client: "Northwind Co.", year: 2024, desc: "Headless Shopify build with sub-second navigation and global checkout.", gradient: "from-amber-100 to-rose-200" },
  { title: "Lumen Health App", category: "Mobile", client: "Lumen Health", year: 2023, desc: "Cross-platform Flutter app for chronic-care patients and clinicians.", gradient: "from-emerald-100 to-teal-200" },
  { title: "Atlas NFT Market", category: "Blockchain", client: "Atlas Studios", year: 2024, desc: "Curated NFT marketplace with lazy minting and creator royalties.", gradient: "from-fuchsia-200 to-indigo-200" },
  { title: "Northstar Booking", category: "Web", client: "Northstar Travel", year: 2023, desc: "Next.js booking platform serving 8M visitors per month.", gradient: "from-sky-200 to-cyan-200" },
  { title: "Forge Internal Tools", category: "Backend", client: "Forge Industries", year: 2023, desc: "Go + Postgres microservices powering ops, billing, and analytics.", gradient: "from-stone-200 to-zinc-300" },
  { title: "Verdant Marketplace", category: "E-Commerce", client: "Verdant Living", year: 2024, desc: "Multi-vendor marketplace with split payouts and global shipping.", gradient: "from-lime-200 to-emerald-200" },
  { title: "Pulse Trading App", category: "Mobile", client: "Pulse Finance", year: 2024, desc: "React Native trading client with real-time order book and biometrics.", gradient: "from-orange-200 to-red-200" },
  { title: "Beacon CMS Platform", category: "Web", client: "Beacon Media", year: 2022, desc: "Custom React + Nest CMS for a 12-publication newsroom.", gradient: "from-yellow-100 to-amber-200" },
];

const categories = ["All", "Blockchain", "Web", "Mobile", "E-Commerce", "Backend"] as const;

const Projects = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="container py-20 md:py-28">
        <p className="text-sm font-medium text-accent">Selected work</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl text-balance">
          437+ projects shipped. <span className="font-serif-display">A few favorites.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          A small slice of the products we've helped build across blockchain, web, mobile,
          commerce, and backend infrastructure.
        </p>
      </section>

      <section className="container pb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                filter === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-border bg-card transition-all hover:shadow-soft"
            >
              <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7),transparent_50%)]" />
                <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-card/80 backdrop-blur transition-transform group-hover:scale-110">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div className="absolute bottom-4 left-4 rounded-full bg-card/80 px-3 py-1 text-xs font-medium backdrop-blur">
                  {p.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="text-xs text-muted-foreground">{p.year}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{p.client}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-surface-cream to-accent-soft p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance">
            Have a project in mind? <span className="font-serif-display">Let's build it.</span>
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
};

export default Projects;
