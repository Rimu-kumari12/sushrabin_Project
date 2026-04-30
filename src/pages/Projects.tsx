// import { useState } from "react";
// import { ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";

// type Project = {
//   title: string;
//   category: "Blockchain" | "Web" | "Mobile" | "E-Commerce" | "Backend";
//   client: string;
//   year: number;
//   desc: string;
//   gradient: string;
// };

// const projects: Project[] = [
//   { title: "Custom DeFi Protocol", category: "Blockchain", client: "Tech: Solidity (EVM: Ethereum, Polygon, Avalanche), OpenZeppelin, React/Next.js (Frontend", year: 2024, desc: "Yield-aggregating smart contract suite with audited vault strategies.", gradient: "from-blue-200 to-violet-200" },
//   { title: "Northwind Storefront", category: "E-Commerce", client: "Northwind Co.", year: 2024, desc: "Headless Shopify build with sub-second navigation and global checkout.", gradient: "from-amber-100 to-rose-200" },
//   { title: "Lumen Health App", category: "Mobile", client: "Lumen Health", year: 2023, desc: "Cross-platform Flutter app for chronic-care patients and clinicians.", gradient: "from-emerald-100 to-teal-200" },
//   { title: "Atlas NFT Market", category: "Blockchain", client: "Atlas Studios", year: 2024, desc: "Curated NFT marketplace with lazy minting and creator royalties.", gradient: "from-fuchsia-200 to-indigo-200" },
//   { title: "Northstar Booking", category: "Web", client: "Northstar Travel", year: 2023, desc: "Next.js booking platform serving 8M visitors per month.", gradient: "from-sky-200 to-cyan-200" },
//   { title: "Forge Internal Tools", category: "Backend", client: "Forge Industries", year: 2023, desc: "Go + Postgres microservices powering ops, billing, and analytics.", gradient: "from-stone-200 to-zinc-300" },
//   { title: "Verdant Marketplace", category: "E-Commerce", client: "Verdant Living", year: 2024, desc: "Multi-vendor marketplace with split payouts and global shipping.", gradient: "from-lime-200 to-emerald-200" },
//   { title: "Pulse Trading App", category: "Mobile", client: "Pulse Finance", year: 2024, desc: "React Native trading client with real-time order book and biometrics.", gradient: "from-orange-200 to-red-200" },
//   { title: "Beacon CMS Platform", category: "Web", client: "Beacon Media", year: 2022, desc: "Custom React + Nest CMS for a 12-publication newsroom.", gradient: "from-yellow-100 to-amber-200" },
// ];

// const categories = ["All", "Blockchain", "Web", "Mobile", "E-Commerce", "Backend"] as const;

// const Projects = () => {
//   const [filter, setFilter] = useState<(typeof categories)[number]>("All");
//   const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

//   return (
//     <>
//       <section className="container py-20 md:py-28">
//         <p className="text-sm font-medium text-accent">Selected work</p>
//         <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl text-balance">
//           437+ projects shipped. <span className="font-serif-display">A few favorites.</span>
//         </h1>
//         <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
//           A small slice of the products we've helped build across blockchain, web, mobile,
//           commerce, and backend infrastructure.
//         </p>
//       </section>

//       <section className="container pb-12">
//         <div className="flex flex-wrap gap-2">
//           {categories.map((c) => (
//             <button
//               key={c}
//               onClick={() => setFilter(c)}
//               className={`rounded-full px-4 py-2 text-sm transition-colors ${
//                 filter === c
//                   ? "bg-primary text-primary-foreground"
//                   : "border border-border text-muted-foreground hover:text-foreground"
//               }`}
//             >
//               {c}
//             </button>
//           ))}
//         </div>
//       </section>

//       <section className="container pb-24 md:pb-32">
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((p) => (
//             <article
//               key={p.title}
//               className="group cursor-pointer overflow-hidden rounded-3xl border border-border bg-card transition-all hover:shadow-soft"
//             >
//               <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7),transparent_50%)]" />
//                 <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-card/80 backdrop-blur transition-transform group-hover:scale-110">
//                   <ArrowUpRight className="h-4 w-4" />
//                 </div>
//                 <div className="absolute bottom-4 left-4 rounded-full bg-card/80 px-3 py-1 text-xs font-medium backdrop-blur">
//                   {p.category}
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="flex items-baseline justify-between gap-4">
//                   <h3 className="text-lg font-semibold">{p.title}</h3>
//                   <span className="text-xs text-muted-foreground">{p.year}</span>
//                 </div>
//                 <p className="mt-1 text-sm text-muted-foreground">{p.client}</p>
//                 <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       <section className="container pb-24 md:pb-32">
//         <div className="rounded-[2.5rem] bg-gradient-to-br from-surface-cream to-accent-soft p-10 md:p-16 text-center">
//           <h2 className="text-4xl md:text-5xl font-semibold text-balance">
//             Have a project in mind? <span className="font-serif-display">Let's build it.</span>
//           </h2>
//           <Link
//             to="/contact"
//             className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
//           >
//             Start a project
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Projects;




import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import customDefi from "../assets/custom_defi.png";
import enterprise from "../assets/enterprise.png";
import nftMarket from "../assets/Nft_market.png";
import selfSove from "../assets/self_sove.png";
import decentralized from "../assets/Decentralized.png";
import layer2 from "../assets/custom_layer2.png";
import fintech from "../assets/fintech.png";
import profinder from "../assets/profinder.png";
import ml from "../assets/machine_learning.png";
import ecommerce from "../assets/Animated_e-com.png";
import crm from "../assets/cross_platform.png";
import health from "../assets/health_well.png";
import dataflow from "../assets/dataflow.png";
import collaborative from "../assets/collaborative.png";
import nexuscart from "../assets/nexuscart.png";
import ai from "../assets/AI-powerde.png";
import timeslot from "../assets/timeslot.png";
import job from "../assets/custom_jon.png";
import collaboard from "../assets/collaboard_real.png";
import stockpulse from "../assets/stockpulse.png";
import dispatch from "../assets/dispatch_now.png";
import omnichat from "../assets/omnichat.png";
import smarthome from "../assets/smarthome.png";
import interactive from "../assets/interactive.png";

type Project = {
  title: string;
  category: "Blockchain" | "Web" | "Mobile" | "UI/UX" | "Backend";
  client: string;
  year: number;
  desc: string;
  image: string; // ✅ added
};

const projects: Project[] = [
  {
    title: "Custom DeFi Protocol",
    category: "Blockchain",
    client: "Tech: Solidity, Ethereum, Polygon, OpenZeppelin, React/Next.js",
    year: 2024,
    desc: "Development of a decentralized finance (DeFi) application, such as a Lending/Borrowing platform or an Automated Market Maker (AMM) DEX. This showcases advanced smart contract logic, secure token handling (ERC-20), liquidity pool design, and integration with complex on-chain oracles (like Chainlink).",
    image: "/src/assets/custom_defi.png",
  },
  {
    title: "Enterprise Supply Chain Traceability",
    category: "Backend",
    client: "Tech: Hyperledger, Corda, Node.js, IoT",
    year: 2024,
    desc: "Building a permissioned blockchain solution to track goods (e.g., luxury items, pharmaceuticals) from origin to consumer. This demonstrates expertise in private/consortium chains, setting up peer nodes, managing membership services (KYC/AML), and integrating with traditional business systems (ERPs).",
    image: "/src/assets/enterprise.png",
  },
  {
    title: "NFT Marketplace Platform",
    category: "Blockchain",
    client: "Tech: Solana, Ethereum, Rust, IPFS",
    year: 2024,
    desc: "Full-stack development of a secondary marketplace for Non-Fungible Tokens (NFTs) or the tokenization of real-world assets (RWA) like real estate. This highlights proficiency in custom token standard implementation, designing dynamic royalty fees, and secure wallet integration (e.g., MetaMask, Phantom).",
    image: "/src/assets/Nft_market.png",
  },
  {
    title: "Self-Sovereign Identity (SSI) System",
    category: "Blockchain",
    client: "Tech : Hyperledger Indy/Aries, Zero-Knowledge Proofs (ZKP), Verifiable Credentials (VCs)",
    year: 2024,
    desc: "A system that allows users to store and control their identity data (e.g., academic degrees, medical records) and share Verifiable Credentials without relying on a central authority. This showcases expertise in complex cryptographic security, privacy-preserving technologies (ZKP), and enterprise-grade identity management.",
    image: "/src/assets/self_sove.png",
  },
  {
    title: "Decentralized Autonomous Organization (DAO)",
    category: "Blockchain",
    client: "Tech : Solidity/Vyper, OpenZeppelin Governor contracts, Snapshot (Off-chain voting)",
    year: 2023,
    desc: "Creating the entire framework for a DAO, including the governance token contract, proposal and voting smart contracts, and a front-end portal for member interaction and treasury management. This proves ability in governance logic, community-based decision systems, and secure on-chain treasury control.",
    image: "/src/assets/Decentralized.png",
  },
  {
    title: "Custom Layer 2 Scaling Solution",
    category: "Blockchain",
    client: "Tech: Polygon SDK / Arbitrum Nitro stack, EVM compatibility, Node.js/Go",
    year: 2023,
    desc: "Building a custom sidechain or Layer 2 solution tailored to a specific application’s high throughput needs (e.g., gaming, frequent small payments). This demonstrates mastery of blockchain architecture design, gas optimization, and advanced knowledge of scaling solutions beyond the main chains.",
    image: "/src/assets/custom_layer2.png",
  },

    {
    title: "FinTech/Expense Tracker App",
    category: "Mobile",
    client: "Tech: Flutter with Firebase(for real-time backend/auth), REST API integration",
    year: 2024,
    desc: "A secure, cross-platform financial application that allows users to track income and expenses across multiple accounts. Key Features to Highlight: Secure biometric authentication, real-time data sync, dynamic charts/reporting for monthly spending analysis, and customizable budget alerts. This showcases expertise in security, data visualization, and complex state management.",
    image: "/src/assets/fintech.png",
  },
  {
    title: "ProFinder: Service Provider Locator",
    category: "Mobile",
    client: "Tech: Flutter with Node.js/Express Backend, MongoDB, Google Maps API",
    year: 2024,
    desc: "An app that connects users (clients) with nearby service providers (freelancers, handymen, tutors, etc.) based on location. Key Features to Highlight: Real-time GPS tracking (for the provider side), integrated chat feature (using a service like Socket.IO or Firebase Realtime Database), rating and review system, and dynamic map markers. This demonstrates proficiency in real-time communication, mapping services, and multi-user type architecture.",
    image: "/src/assets/profinder.png",
  },
  {
    title: "Machine Learning Utility",
    category: "Mobile",
    client: "Tech:React Native, Python Backend (Flask/FastAPI), TensorFlow Lite/OpenAI API",
    year: 2024,
    desc: "A utility app that processes user input (e.g., photo of an object, text snippet) and performs a classification or summarization task via a custom or third-party ML model. Focus: Essential for demonstrating AI/ML integration via APIs and managing high-load backend communication.",
    image: "/src/assets/machine_learning.png",
  },
  {
    title: "Animated E-Commerce Platform",
    category: "Mobile",
    client: "Tech:Flutter, Riverpod/Bloc (State Management), Firebase/Supabase, Stripe SDK",
    year: 2024,
    desc: "A visually stunning e-commerce application with smooth, customized animations for browsing products and checking out. Focus: Leverages Flutter’s ability to build pixel-perfect, highly custom UI/UX with native performance, complex product filtering, and reliable payment gateway integration.",
    image: "/src/assets/Animated_e-com.png",
  },
  {
    title: "Cross-Platform CRM Tool",
    category: "Mobile",
    client: "Tech: Flutter, GetX/Bloc, Hive/Sqflite (Local DB), RESTful API",
    year: 2023,
    desc: "A professional productivity app designed to manage sales leads or customer pipelines across mobile and web (using Flutter Web). Focus: Highlights code reusability across multiple platforms, offline functionality (local data caching), and complex form/data entry design.",
    image: "/src/assets/cross_platform.png",
  },
  {
    title: "Health & Wellness Tracker",
    category: "Mobile",
    client: "Tech: Flutter, Provider/Bloc, HealthKit/Google Fit APIs, Local Notifications",
    year: 2023,
    desc: "A fitness app that integrates with native health services to track steps, calories, and provide personalized goal setting. Focus: Mastery of Native API integration (crucial for health apps), scheduling local notifications, and developing an engaging, motivational user interface.",
    image: "/src/assets/health_well.png",
  },
   {
    title: "DataFlow: Subscription Analytics Hub",
    category: "Web",
    client: "Tech: React, Next.js App Router, TypeScript, Chart.js/Recharts, Tailwind CSS, PostgreSQL/MongoDB",
    year: 2024,
    desc: "A comprehensive dashboard designed for a subscription business. Users can view real-time metrics (MRR, Churn), manage user subscriptions, and handle webhooks from payment processors (Stripe/PayPal). This project showcases proficiency in security, complex data visualization , and large-scale state management.",
    image: "/src/assets/dataflow.png",
  },
  {
    title: "Collaborative Markdown Editor",
    category: "Web",
    client: "Tech: React, Next.js App Router, Socket.IO (for real-time), Rich Text Editor Library (e.g., BlockNote/TipTap), Prisma/Supabase.",
    year: 2024,
    desc: "A Google Docs-style application where users can create and edit documents collaboratively in real-time. Focus: Mastery of WebSockets for real-time synchronization, complex form management, and handling data persistence with an ORM/database.",
    image: "/src/assets/collaborative.png",
  },
  {
    title: "NexusCart: High-Performance Retail",
    category: "Web",
    client: "Tech: React, Next.js Pages Router (for ISR), GraphQL/Apollo, Stripe SDK, Headless CMS (e.g., Strapi/Contentful).",
    year: 2024,
    desc: "A blazing-fast, consumer-facing storefront decoupled from a traditional e-commerce backend. Focus: Demonstrates expertise in performance optimization, advanced filtering/search, secure payment gateway integration, and utilizing GraphQL for efficient data fetching.",
    image: "/src/assets/nexuscart.png",
  },
  {
    title: "AI-Powered Content Generator",
    category: "Web",
    client: "Tech: React, Next.js App Router, Vercel AI SDK, OpenAI/Gemini API, Authentication (NextAuth.js/Clerk), Vector Database (e.g., Pinecone).",
    year: 2024,
    desc: "A tool where users input a prompt (e.g., “write a blog post about X”) and receive AI-generated content. Includes history, saved drafts, and token limits. Focus: Essential for showing proficiency in AI API integration, streaming responses (for real-time typing), and full-stack authentication.",
    image: "/src/assets/Ai-powerde.png",
  },
  {
    title: "TimeSlot: Freelancer Booking Hub",
    category: "Web",
    client: "Tech: React, Next.js App Router, FullCalendar.js, PostgreSQL, tRPC (optional, for type-safe APIs).",
    year: 2023,
    desc: "A SaaS application where businesses (tenants) can create unique booking pages (/user-slug/book), manage their availability, and clients can schedule appointments. Focus: Demonstrates multi-tenancy architecture, complex calendar logic, and user authorization flows.",
    image: "/src/assets/timeslot.png",
  },
  {
    title: "Custom Job Board Platform",
    category: "Web",
    client: "Tech: React, Next.js App Router, Algolia/Elasticsearch (for search), NextAuth.js, Node.js/Prisma.",
    year: 2023,
    desc: "A specialized job board platform (e.g., for niche tech roles). Features include job posting for employers and advanced filtering/search for job seekers. Focus: Mastering advanced search functionality, handling different user roles (Employer/Seeker), and implementing SEO-friendly job listing pages (crucial for traffic).",
    image: "/src/assets/custom_jon.png",
  },

    {
    title: "CollabBoard: Real-Time Whiteboard",
    category: "UI/UX",
    client: "Tool: Figma",
    year: 2024,
    desc: "Collaborative tools, low-latency design, multi-user cursors, and version control. Project: Redesign a simplified, real-time online whiteboard (like Miro or FigJam) optimized for remote design teams. The UX must prioritize simultaneous editing, clear visual indicators for collaborators’ presence, and a clean, context-sensitive tool menu that avoids clutter. UI Challenge: Creating smooth, lag-free interactions (drawing, moving objects) and a comprehensive history/version-rollback panel.",
    image: "/src/assets/collaboard_real.png",
  },
  {
    title: "StockPulse: Live Trading Dashboard",
    category: "UI/UX",
    client: "Tool: Figma",
    year: 2024,
    desc: "Data visualization, information architecture, and real-time alerts. Project: Design a professional dashboard for monitoring cryptocurrency or stock portfolios. The UX must allow users to track dozens of metrics simultaneously without cognitive overload. UI Challenge: Designing complex, highly-readable charts (e.g., Candlestick charts), optimizing data density, and creating an intuitive alert system for price changes that minimizes false alarms.",
    image: "/src/assets/stockpulse.png",
  },
  {
    title: "DispatchNow: Geo-Tracking & Logistics App",
    category: "UI/UX",
    client: "Tool: Figma",
    year: 2024,
    desc: " Location services, real-time map interaction, and urgent status updates. Project: Design the mobile interface for a service provider (e.g., a delivery driver, ambulance dispatcher). The UX must reduce cognitive load during high-stress situations. UI Challenge: Creating a map interface with highly visible, color-coded status pins, designing an efficient two-tap workflow for status updates (“Arrived,” “Complete”), and ensuring the turn-by-turn navigation is clear even in bright sunlight.",
    image: "/src/assets/dispatch_now.png",
  },
  {
    title: "OmniChat: Unified Messaging Hub",
    category: "UI/UX",
    client: "Tool: Figma",
    year: 2024,
    desc: "Multi-channel integration, conversation threading, and notification management. Project: Design an application that aggregates messages from various platforms (Slack, WhatsApp, Email, CRM) into a single inbox. The UX must solve the pain point of context switching. UI Challenge: Creating effective filtering and sorting tools, designing a visual system for different source icons, and developing a clean, multi-panel layout for viewing the conversation list alongside the active chat.",
    image: "/src/assets/omnichat.png",
  },
  {
    title: "SmartHome Energy Dashboard",
    category: "UI/UX",
    client: "Tool: Figma",
    year: 2023,
    desc: "IoT control, data logging, and proactive system alerts. Project: Design an iPad/Tablet interface for monitoring and managing a smart home’s energy consumption and devices. The UX should shift the user from reactive control to proactive management. UI Challenge: Creating an appealing and clear data visualization of energy use over time, designing a simple zoning interface (e.g., “Downstairs vs. Upstairs”), and making the controls for critical devices immediately accessible.",
    image: "/src/assets/smarthome.png",
  },
  {
    title: "Interactive Fitness Class Streamer",
    category: "UI/UX",
    client: "Tool: Figma",
    year: 2023,
    desc: "Two-way social interaction, media streaming, and performance data display. Project: Design the web or smart TV interface for a live-streamed fitness platform. The UX needs to replicate the energy of a real class. UI Challenge: Strategically placing a low-distraction chat/social feed next to the primary video stream, designing an unobtrusive overlay for real-time user metrics (leaderboard, heart rate), and ensuring a seamless, high-quality media streaming experience.",
    image: "/src/assets/interactive.png",
  },
];

const categories = ["All", "Blockchain", "Web", "Mobile", "E-Commerce", "Backend"] as const;

const Projects = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Header */}
      <section className="container py-20 md:py-28">
        <p className="text-sm font-medium text-accent">Selected work</p>

        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">
          437+ projects shipped.{" "}
          <span className="font-serif-display">A few favorites.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          A small slice of the products we've helped build across blockchain,
          web, mobile, commerce, and backend infrastructure.
        </p>
      </section>

      {/* Filter Buttons */}
      <section className="container pb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                filter === c
                  ? "bg-primary text-white"
                  : "border border-gray-300 text-gray-500 hover:text-black"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container pb-24 md:pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="group cursor-pointer overflow-hidden rounded-3xl border bg-white transition-all hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Icon */}
                <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/80 backdrop-blur group-hover:scale-110 transition">
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                {/* Category */}
                <div className="absolute bottom-4 left-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium backdrop-blur">
                  {p.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="text-xs text-gray-500">{p.year}</span>
                </div>

                {/* Tech */}
                <p className="mt-1 text-sm text-blue-600 font-semibold">
                  {p.client}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container pb-24 md:pb-32">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-yellow-100 to-pink-100 p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Have a project in mind?{" "}
            <span className="font-serif-display">Let's build it.</span>
          </h2>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white"
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
};

export default Projects;