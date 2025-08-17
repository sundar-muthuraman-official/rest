// Using your authentic restaurant photos for gallery

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: "/attached_assets/849A7636_1755396277207.JPG",
      alt: "Hearts & Plates elegant dining area with warm lighting and traditional decor",
      title: "Warm & Welcoming Atmosphere"
    },
    {
      id: 2,
      src: "/attached_assets/849A7611_1755396277201.JPG",
      alt: "Hearts & Plates premium restaurant interior design",
      title: "Sophisticated Interior"
    },
    {
      id: 3,
      src: "/attached_assets/849A7614_1755396277206.JPG",
      alt: "Hearts & Plates cozy seating arrangement with comfortable ambiance",
      title: "Comfortable Dining Space"
    },
    {
      id: 4,
      src: "/attached_assets/849A7618_1755396277206.JPG",
      alt: "Hearts & Plates modern restaurant ambiance",
      title: "Contemporary Design"
    },
    {
      id: 5,
      src: "/attached_assets/849A7621_1755396277207.JPG",
      alt: "Hearts & Plates inviting dining environment",
      title: "Perfect for Any Occasion"
    },
    {
      id: 6,
      src: "/attached_assets/849A7628_1755396277207.JPG",
      alt: "Hearts & Plates premium dining experience setup",
      title: "Fine Dining Excellence"
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
