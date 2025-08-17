import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4" data-testid="hero-content">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6" data-testid="hero-title">
          Hearts & Plates
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto" data-testid="hero-subtitle">
          Multi-Cuisine Excellence in the Heart of Pondicherry
        </p>
        <p className="text-lg mb-8 opacity-90" data-testid="hero-description">
          Experience authentic flavors from Indian & International cuisines
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu">
            <Button 
              className="bg-restaurant-secondary hover:bg-restaurant-highlight text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
              data-testid="button-explore-menu"
            >
              Explore Menu
            </Button>
          </Link>
          <Link href="/reservations">
            <Button 
              variant="outline"
              className="bg-transparent border-2 border-restaurant-accent text-restaurant-accent hover:bg-restaurant-accent hover:text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
              data-testid="button-reserve-table"
            >
              Reserve Table
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
