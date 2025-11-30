import { Logo } from "@/components/logo";
import { Github } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  product: [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Changelog", href: "#" },
    { name: "Roadmap", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Community", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "/contact" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#" },
  ],
};

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153Zm-1.653 19.33h2.61l-10.595-12.02L3.55 3.48H.94l10.84 12.333L20.48 20.483Z" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
  </svg>
);
function Footer() {
  return (
    <div>
      <footer className="bg-background border-t border-border/40 text-muted-foreground">
        <div className="container py-12">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-5 md:gap-x-8">
            <div className="md:col-span-2">
              <Logo className="text-2xl" />
              <p className="mt-4 text-sm max-w-xs">
                The real-time collaborative coding platform for modern
                development teams.
              </p>
              <div className="mt-6 flex space-x-4">
                <Link href="#" className="hover:text-foreground">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-foreground">
                  <XIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-foreground">
                  <DiscordIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-3">
              <div>
                <h3 className="font-headline font-semibold text-foreground">
                  Product
                </h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm hover:text-foreground"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-headline font-semibold text-foreground">
                  Resources
                </h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm hover:text-foreground"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-headline font-semibold text-foreground">
                  Company
                </h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm hover:text-foreground"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; 2025 Code Canvas. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            All systems operational
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
