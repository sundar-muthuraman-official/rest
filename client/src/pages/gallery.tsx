export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Fine dining experience with elegant plating",
      title: "Elegant Food Presentation"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Traditional Indian curry dishes with aromatic spices",
      title: "Authentic Indian Curries"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Warm restaurant interior with comfortable seating",
      title: "Cozy Dining Atmosphere"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Tandoori specialties being grilled in clay oven",
      title: "Tandoori Specialties"
    },
    {
      id: 5,
      src: "https://pixabay.com/get/ga4fdc48360512cf473b8748a0abbd3549431d9fc87aa1196bb387df808d494d6223f62369eeee720abecffe22b5d5f0c59b3587795d13c55c8565852b0e6bd56_1280.jpg",
      alt: "Biryani and rice dishes with aromatic garnishes",
      title: "Aromatic Biryani"
    },
    {
      id: 6,
      src: "https://pixabay.com/get/gab36e098759d2af8eb0af6eb3901f2d7fb138717ed205cf615ab103295e6253f14dd7b857f5188d106f57db4a24732f305ab5b769a9938c5b9c6af0b13f71e10_1280.jpg",
      alt: "Chef preparing fresh dishes in modern kitchen",
      title: "Expert Culinary Team"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "International cuisine selection",
      title: "International Delicacies"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Professional food presentation",
      title: "Culinary Artistry"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Restaurant dining hall setup",
      title: "Elegant Dining Space"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-restaurant-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-restaurant-primary mb-4" data-testid="gallery-page-title">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="gallery-page-subtitle">
            Experience the ambiance and artistry of Hearts & Plates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="gallery-grid">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 group"
              data-testid={`gallery-item-${image.id}`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
                loading="lazy"
                data-testid={`gallery-image-${image.id}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg" data-testid={`gallery-title-${image.id}`}>
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-restaurant-primary mb-4" data-testid="gallery-info-title">
              Capturing Moments & Flavors
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6" data-testid="gallery-info-description">
              Every dish at Hearts & Plates tells a story of passion, tradition, and innovation. Our gallery showcases 
              not just the visual appeal of our cuisine, but the warm atmosphere that makes every dining experience special. 
              From the sizzling tandoors to the artistic plating, every moment is crafted to create lasting memories.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div data-testid="gallery-stat-experience">
                <div className="text-2xl font-bold text-restaurant-secondary">5+</div>
                <div className="text-sm text-gray-600">Years of Culinary Excellence</div>
              </div>
              <div data-testid="gallery-stat-dishes">
                <div className="text-2xl font-bold text-restaurant-secondary">100+</div>
                <div className="text-sm text-gray-600">Signature Dishes</div>
              </div>
              <div data-testid="gallery-stat-customers">
                <div className="text-2xl font-bold text-restaurant-secondary">10,000+</div>
                <div className="text-sm text-gray-600">Memorable Meals Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
