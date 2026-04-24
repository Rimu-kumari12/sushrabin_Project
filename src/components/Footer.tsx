import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-soft">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 max-w-md">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-accent to-primary" />
              <span className="font-semibold tracking-tight">Sushrabin Private Limited</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              A leading IT services company delivering web, mobile, and blockchain solutions to
              ambitious teams worldwide.
            </p>
            <div className="mt-6 flex gap-3">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Blockchain</li>
              <li>E-Commerce</li>
              <li>Backend Engineering</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sushrabin Private Limited. All rights reserved.</p>
          <p>Crafted with care across USA · India · Dubai · Japan · Italy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
