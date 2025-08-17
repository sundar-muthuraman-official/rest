import { Star, Users, Clock, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Star, number: "4.8", label: "Average Rating", suffix: "/5" },
    { icon: Users, number: "10,000+", label: "Happy Customers", suffix: "" },
    { icon: Clock, number: "5", label: "Years of Excellence", suffix: "+" },
    { icon: Award, number: "100+", label: "Menu Items", suffix: "" },
  ];

  return (
    <>
      {/* Statistics Section */}
      <section className="py-16 bg-restaurant-primary text-white" data-testid="stats-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group" data-testid={`stat-${index}`}>
                  <IconComponent className="w-8 h-8 mx-auto mb-4 text-restaurant-accent group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl md:text-4xl font-bold mb-2 font-serif">
                    {stat.number}
                    <span className="text-xl text-restaurant-accent">{stat.suffix}</span>
                  </div>
                  <p className="text-restaurant-text-light opacity-90">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-restaurant-background" data-testid="about-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-restaurant-primary mb-6" data-testid="about-title">
              About Hearts & Plates
            </h2>
            <div className="w-24 h-1 bg-restaurant-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-testid="about-subtitle">
              A culinary journey that brings together the finest Indian and international flavors in the heart of Pondicherry
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg" data-testid="about-description">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Since our establishment, <span className="font-semibold text-restaurant-primary">Hearts & Plates</span> has been dedicated to creating exceptional dining experiences that celebrate the rich culinary traditions of India while embracing international flavors.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Located at <span className="font-medium">51B First Floor Mission Street, Pondicherry</span>, we offer an elegant atmosphere where families and friends can gather to enjoy authentic, freshly prepared dishes made with the finest ingredients and traditional cooking techniques.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our expert chefs bring years of experience from across India and international kitchens, ensuring every dish tells a story of <span className="text-restaurant-secondary font-medium">passion, tradition, and innovation</span>.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-t-4 border-restaurant-accent" data-testid="feature-authentic">
                  <div className="text-restaurant-secondary text-4xl mb-4">🍛</div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-restaurant-primary">Authentic Flavors</h3>
                  <p className="text-gray-600">Traditional recipes passed down through generations</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl mt-8 border-t-4 border-green-500" data-testid="feature-fresh">
                  <div className="text-restaurant-secondary text-4xl mb-4">🌿</div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-restaurant-primary">Fresh Ingredients</h3>
                  <p className="text-gray-600">Sourced daily from local markets and trusted suppliers</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-t-4 border-purple-500" data-testid="feature-ambiance">
                  <div className="text-restaurant-secondary text-4xl mb-4">✨</div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-restaurant-primary">Elegant Ambiance</h3>
                  <p className="text-gray-600">Warm, welcoming atmosphere perfect for any occasion</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl mt-8 border-t-4 border-blue-500" data-testid="feature-service">
                  <div className="text-restaurant-secondary text-4xl mb-4">🤝</div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-restaurant-primary">Exceptional Service</h3>
                  <p className="text-gray-600">Attentive staff committed to your dining satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}