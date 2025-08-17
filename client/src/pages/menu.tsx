import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { menuData, menuCategories, type MenuItem } from "@/data/menu";
import { Leaf, Star, Filter, Utensils } from "lucide-react";

type FilterType = "all" | "vegetarian" | "non-vegetarian";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("soups");
  const [dietFilter, setDietFilter] = useState<FilterType>("all");

  const filteredItems = menuData.filter(item => {
    const categoryMatch = item.category === activeCategory;
    const dietMatch = dietFilter === "all" || 
      (dietFilter === "vegetarian" && item.isVegetarian) ||
      (dietFilter === "non-vegetarian" && !item.isVegetarian);
    return categoryMatch && dietMatch;
  });
  const currentCategory = menuCategories.find(cat => cat.id === activeCategory);

  const getSubcategoryItems = (subcategory?: string) => {
    return filteredItems.filter(item => item.subcategory === subcategory);
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item) => (
      <Card key={item.id} className="hover:shadow-xl transition duration-300 group" data-testid={`menu-item-${item.id}`}>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-serif text-lg font-semibold text-restaurant-primary group-hover:text-restaurant-secondary transition-colors" data-testid={`menu-item-name-${item.id}`}>
              {item.name}
            </h4>
            <div className="flex items-center space-x-2">
              {item.isVegetarian && (
                <Badge variant="secondary" className="bg-green-100 text-green-800" data-testid={`menu-item-veg-${item.id}`}>
                  <Leaf size={12} className="mr-1" />
                  Veg
                </Badge>
              )}
              {item.isSpecial && (
                <Badge className="bg-restaurant-accent text-restaurant-text-dark" data-testid={`menu-item-special-${item.id}`}>
                  <Star size={12} className="mr-1" />
                  Special
                </Badge>
              )}
            </div>
          </div>
          <p className="text-gray-600 mb-3 text-sm leading-relaxed" data-testid={`menu-item-description-${item.id}`}>
            {item.description}
          </p>
          <div className="text-restaurant-secondary font-bold text-lg" data-testid={`menu-item-price-${item.id}`}>
            ₹{item.price}
          </div>
        </CardContent>
      </Card>
    ));
  };

  return (
    <div className="pt-16 min-h-screen bg-restaurant-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-restaurant-primary mb-4" data-testid="menu-page-title">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="menu-page-subtitle">
            Discover our carefully crafted selection of authentic Indian and international dishes
          </p>
        </div>

        {/* Dietary Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-2 shadow-lg inline-flex items-center space-x-2" data-testid="diet-filter">
            <Filter size={16} className="text-restaurant-primary" />
            <span className="text-sm font-medium text-gray-700">Filter:</span>
            <Button
              onClick={() => setDietFilter("all")}
              variant={dietFilter === "all" ? "default" : "ghost"}
              size="sm"
              className={`transition duration-300 ${
                dietFilter === "all"
                  ? "bg-restaurant-primary text-white"
                  : "hover:bg-gray-100"
              }`}
              data-testid="filter-all"
            >
              <Utensils size={14} className="mr-1" />
              All Items
            </Button>
            <Button
              onClick={() => setDietFilter("vegetarian")}
              variant={dietFilter === "vegetarian" ? "default" : "ghost"}
              size="sm"
              className={`transition duration-300 ${
                dietFilter === "vegetarian"
                  ? "bg-green-600 text-white"
                  : "hover:bg-green-50 hover:text-green-600"
              }`}
              data-testid="filter-vegetarian"
            >
              <Leaf size={14} className="mr-1" />
              Vegetarian
            </Button>
            <Button
              onClick={() => setDietFilter("non-vegetarian")}
              variant={dietFilter === "non-vegetarian" ? "default" : "ghost"}
              size="sm"
              className={`transition duration-300 ${
                dietFilter === "non-vegetarian"
                  ? "bg-red-600 text-white"
                  : "hover:bg-red-50 hover:text-red-600"
              }`}
              data-testid="filter-non-vegetarian"
            >
              <Utensils size={14} className="mr-1" />
              Non-Vegetarian
            </Button>
          </div>
        </div>

        {/* Menu Categories Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-lg p-2 shadow-lg" data-testid="menu-categories">
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "ghost"}
              className={`mx-1 my-1 transition duration-300 ${
                activeCategory === category.id
                  ? "bg-restaurant-primary text-white"
                  : "hover:bg-gray-100"
              }`}
              data-testid={`menu-category-${category.id}`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-8" data-testid={`menu-category-content-${activeCategory}`}>
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-semibold text-restaurant-primary mb-2" data-testid="active-category-title">
              {currentCategory?.name}
            </h2>
            <p className="text-lg text-gray-600" data-testid="active-category-description">
              {currentCategory?.description}
            </p>
          </div>

          {/* Render items based on category structure */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-16" data-testid="no-items-found">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-2xl font-serif font-semibold text-restaurant-primary mb-4">
                No items found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filter or explore a different category
              </p>
              <button
                onClick={() => setDietFilter("all")}
                className="text-restaurant-secondary hover:text-restaurant-primary font-medium underline"
                data-testid="reset-filter-button"
              >
                Show all items
              </button>
            </div>
          ) : activeCategory === "starters" || activeCategory === "tandoori" || activeCategory === "mains" ? (
            <div className="space-y-12">
              {/* Vegetarian Section */}
              {getSubcategoryItems("vegetarian").length > 0 && (
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-restaurant-secondary mb-6" data-testid="vegetarian-section-title">
                    Vegetarian
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderMenuItems(getSubcategoryItems("vegetarian"))}
                  </div>
                </div>
              )}

              {/* Non-Vegetarian Section */}
              {getSubcategoryItems("non-vegetarian").length > 0 && (
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-restaurant-secondary mb-6" data-testid="non-vegetarian-section-title">
                    Non-Vegetarian
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderMenuItems(getSubcategoryItems("non-vegetarian"))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Single grid for categories without subcategories */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderMenuItems(filteredItems)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
