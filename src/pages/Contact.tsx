import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message sent",
        description: "We'll get back to you within one business day.",
      });
    }, 700);
  };

  return (
    <>
      <section className="container py-20 md:py-28">
        <p className="text-sm font-medium text-accent">Contact</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl text-balance">
          Tell us about your <span className="font-serif-display">idea.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          We reply within one business day. Share a few details and we'll come back with the
          smallest first step.
        </p>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            {[
              { Icon: Mail, label: "Email", value: "hello@sushrabin.com" },
              { Icon: Phone, label: "Phone", value: "+1 (415) 555-0142" },
              { Icon: MapPin, label: "Offices", value: "USA · India · Dubai · Japan · Italy" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="mt-1 font-medium">{value}</p>
                </div>
              </div>
            ))}

            <div className="rounded-3xl bg-soft p-6 text-sm text-muted-foreground">
              Prefer async? Send us a Loom or a written brief — we'll respond with a short plan
              and a ballpark estimate.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7 rounded-3xl border border-border bg-card p-8 md:p-10 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Your name" name="name" placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
            </div>
            <Field label="Company" name="company" placeholder="Acme Inc." />
            <div>
              <label className="text-sm font-medium">Project type</label>
              <select
                name="type"
                className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
              >
                <option>Web Development</option>
                <option>App Development</option>
                <option>Blockchain</option>
                <option>E-Commerce</option>
                <option>Backend Engineering</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Tell us about your project</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="A few sentences is enough to start..."
                className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send message"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

const Field = ({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <input
      {...props}
      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
    />
  </div>
);

export default Contact;
