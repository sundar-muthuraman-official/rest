export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-testid="about-content">
            <h2 className="font-serif text-4xl font-bold text-restaurant-primary mb-6" data-testid="about-title">
              Welcome to Hearts & Plates
            </h2>
            <p className="text-lg mb-6 leading-relaxed text-restaurant-text-dark" data-testid="about-description-1">
              Located in the charming streets of Pondicherry, Hearts & Plates offers an exceptional dining experience 
              that celebrates the rich tapestry of Indian and international cuisines. Our passion for culinary excellence 
              drives us to create memorable meals in a warm, inviting atmosphere.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-restaurant-text-dark" data-testid="about-description-2">
              From traditional tandoori specialties to contemporary international dishes, each plate tells a story of 
              flavor, creativity, and love. Our skilled chefs use only the finest ingredients to craft dishes that 
              delight the senses and warm the heart.
            </p>
            
            <div className="flex items-center space-x-4" data-testid="about-stats">
              <div className="text-center">
                <div className="text-2xl font-bold text-restaurant-secondary" data-testid="stat-years">5+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-restaurant-secondary" data-testid="stat-menu-items">100+</div>
                <div className="text-sm text-gray-600">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-restaurant-secondary" data-testid="stat-customers">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="relative" data-testid="about-image">
            <img 
              src="https://pixabay.com/get/gaf1486b8508bf31f0daf8730151145b4ff0664899ca2174083448971faad55b58a0931a4899c47299a0d303d3b564ee44e2d7664a4be2214f2accd907ad964f2_1280.jpg" 
              alt="Restaurant interior with warm ambiance" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
