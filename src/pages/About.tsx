import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Counter from "@/components/Counter";

const values = [
  { title: "Craft", desc: "Every detail considered. We obsess over the small things so the whole feels effortless." },
  { title: "Clarity", desc: "Plain language, transparent estimates, weekly demos. You always know where things stand." },
  { title: "Care", desc: "Long-term partnerships over one-off transactions. Your success is the metric." },
];

const About = () => {
  return (
    <>
      <section className="container py-20 md:py-28">
        <p className="text-sm font-medium text-accent">About Sushrabin</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl text-balance">
          We build software with{" "}
          <span className="font-serif-display">intention,</span> for teams who care about{" "}
          <span className="font-serif-display">quality.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Sushrabin Private Limited is a 67-person engineering studio with 6+ years of experience
          delivering web, mobile, and blockchain products. We work with startups and enterprises
          across the USA, India, Dubai, Japan, and Italy.
        </p>
      </section>

      <section className="border-y border-border bg-soft">
        <div className="container grid gap-10 py-16 md:grid-cols-3">
          {[
            { num: 67, suffix: "+", label: "Senior engineers" },
            { num: 437, suffix: "+", label: "Projects delivered" },
            { num: 8, suffix: "+", label: "Avg years per dev" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-5xl md:text-6xl font-semibold tracking-tight">
                <Counter to={s.num} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-accent">Our values</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl text-balance">
              Three principles, <span className="font-serif-display">always.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 grid gap-px overflow-hidden rounded-3xl bg-border">
            {values.map((v) => (
              <div key={v.title} className="bg-card p-8">
                <h3 className="font-serif-display text-2xl text-accent">{v.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="rounded-[2.5rem] bg-primary p-10 md:p-16 text-primary-foreground">
          <h2 className="max-w-3xl text-4xl md:text-5xl font-semibold text-balance">
            A community of innovators <span className="font-serif-display">and builders.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-primary-foreground/80 leading-relaxed">
            Collaborate with accomplished developers, designers, and product leaders. Our team
            connects ambitious organizations with proven talent and durable digital solutions.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-medium text-primary"
          >
            Work with us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
