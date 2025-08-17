import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Reservations", href: "/reservations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-restaurant-primary text-restaurant-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4" data-testid="footer-logo">
              Hearts & Plates
            </h3>
            <p className="text-restaurant-accent mb-4 leading-relaxed" data-testid="footer-description">
              Experience the finest multi-cuisine dining in Pondicherry. From traditional Indian delicacies to international favorites, 
              every dish is crafted with love and passion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-restaurant-accent hover:text-white transition duration-300" data-testid="social-facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-restaurant-accent hover:text-white transition duration-300" data-testid="social-instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-restaurant-accent hover:text-white transition duration-300" data-testid="social-twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-restaurant-accent hover:text-white transition duration-300" data-testid="social-email">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4" data-testid="footer-quick-links-title">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <a className="text-restaurant-accent hover:text-white transition duration-300" data-testid={`footer-link-${link.name.toLowerCase()}`}>
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4" data-testid="footer-contact-title">
              Contact Info
            </h4>
            <div className="space-y-2 text-restaurant-accent">
              <p className="flex items-center" data-testid="footer-address">
                <MapPin className="mr-2" size={16} />
                51B First Floor Mission Street, Pondicherry
              </p>
              <p className="flex items-center" data-testid="footer-phone">
                <Phone className="mr-2" size={16} />
                +91 98765 43210
              </p>
              <p className="flex items-center" data-testid="footer-email">
                <Mail className="mr-2" size={16} />
                info@heartsandplates.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-restaurant-secondary mt-8 pt-8 text-center">
          <p className="text-restaurant-accent" data-testid="footer-copyright">
            &copy; 2024 Hearts & Plates Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
