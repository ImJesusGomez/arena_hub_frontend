import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const navItems = [
  { label: "Inicio", href: "#home" },
  { label: "Servicios", href: "#service" },
  { label: "Testimoniales", href: "#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-b-primary bg-slate-950">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-primary unique-class-for-spacing"
        >
          <img src="/logo.svg" alt="ArenaHub Logo" className="h-8 w-auto object-contain" />
          <span className="truncate text-white">
            Arena<span className="text-primary">Hub</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2  ">
          <Button variant="ghost" className="hover:text-primary text-white" asChild>
            <Link to="/login">Iniciar sesión</Link>
          </Button>

          <Button className="text-black" asChild>
            <Link to="/register">Reservar ahora</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="h-5 w-5 text-primary" />
          ) : (
            <Menu className="h-5 w-5 text-primary" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white text-center"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="hover:text-white" asChild>
                <Link to="/login">Iniciar sesión</Link>
              </Button>

              <Button asChild>
                <Link to="/register">Reservar ahora</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
