import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Reservations", href: "/reservations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-restaurant-primary shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="font-serif text-2xl font-bold text-restaurant-background cursor-pointer" data-testid="logo">
                Hearts & Plates
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`px-3 py-2 text-sm font-medium transition duration-300 cursor-pointer ${
                      location === item.href
                        ? "text-restaurant-accent"
                        : "text-restaurant-background hover:text-restaurant-accent"
                    }`}
                    data-testid={`nav-link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-restaurant-background hover:text-restaurant-accent"
              data-testid="mobile-menu-button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`block px-3 py-2 text-base font-medium transition duration-300 cursor-pointer ${
                      location === item.href
                        ? "text-restaurant-accent"
                        : "text-restaurant-background hover:text-restaurant-accent"
                    }`}
                    onClick={() => setIsOpen(false)}
                    data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
