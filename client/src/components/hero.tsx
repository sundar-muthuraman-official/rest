import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/attached_assets/849A7636_1755396277207.JPG')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4" data-testid="hero-content">
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 tracking-wide drop-shadow-2xl" data-testid="hero-title">
          Hearts & Plates
        </h1>
        <div className="w-24 h-1 bg-restaurant-accent mx-auto mb-6 rounded-full"></div>
        <p className="text-xl md:text-3xl mb-4 max-w-3xl mx-auto font-light tracking-wide" data-testid="hero-subtitle">
          Multi-Cuisine Excellence in the Heart of Pondicherry
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
          Where traditional Indian flavors meet international cuisine in perfect harmony
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu">
            <Button 
              className="bg-restaurant-secondary hover:bg-restaurant-highlight text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              data-testid="button-explore-menu"
            >
              Explore Our Menu
            </Button>
          </Link>
          <Link href="/reservations">
            <Button 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white hover:bg-white hover:text-restaurant-primary px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl"
              data-testid="button-reserve-table"
            >
              Reserve Your Table
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
