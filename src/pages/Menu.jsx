import { motion } from "framer-motion";
import { Card, CardBody, Button, Tabs, Tab, Badge } from "@nextui-org/react";
import { StarIcon, FireIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline";
import GallerySection from "../components/GallerySection";
import MenuSection from "../components/MenuSection";
import { Link } from "react-router-dom";

export default function Menu() {
  const categories = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Desserts",
    "Drinks",
  ];
  const menuItems = [
    {
      id: 1,
      name: "Classic Burger",
      category: "Lunch",
      price: "$12.99",
      rating: 4.8,
      reviews: 124,
      image: "/menu/burger.jpg",
      isSpicy: true,
      isNew: true,
      isBestSeller: true,
      description: "Premium beef patty with fresh vegetables and special sauce",
      ingredients: ["Beef", "Lettuce", "Tomato", "Cheese", "Special Sauce"],
    },
    // Add more menu items with similar structure
  ];

  const specialOffers = [
    {
      title: "Weekend Special",
      description: "Get 20% off on family meals",
      discount: "20% OFF",
      image: "/frontend_assets/special_1.jpg",
    },
    {
      title: "Happy Hour",
      description: "All drinks half price from 4-6 PM",
      discount: "50% OFF",
      image: "/frontend_assets/special_2.jpg",
    },
  ];

  const galleryImages = [
    {
      id: 1,
      image: "/menu/gallery1.jpg",
      title: "Kitchen Preparation",
      category: "Behind the Scenes",
    },
    {
      id: 2,
      image: "/menu/gallery2.jpg",
      title: "Chef's Special",
      category: "Signature Dishes",
    },
    {
      id: 3,
      image: "/menu/gallery3.jpg",
      title: "Dining Experience",
      category: "Ambiance",
    },
  ];

  const handleScrollToMenu = () => {
    window.scrollTo({ top: 700, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-black">
        <div className="absolute inset-0">
          <img
            src="/frontend_assets/menu_header_image.jpg"
            alt="Menu Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-primary font-medium mb-4 block">
                Our Menu
              </span>
              <h1 className="text-5xl font-bold text-white mb-6">
                Discover Our Culinary Excellence
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Experience a fusion of flavors crafted with passion and premium
                ingredients
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  color="primary"
                  className="font-medium"
                  onPress={handleScrollToMenu}
                >
                  View Menu
                </Button>
                <Button
                  size="lg"
                  variant="bordered"
                  className="text-white border-white hover:bg-white/10"
                >
                  <Link to="/reservation">Make Reservation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <MenuSection />

      {/* Special Offers Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <FireIcon className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold">Today's Special</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialOffers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <Card className="bg-primary text-white overflow-hidden">
                  <CardBody className="p-0">
                    <div className="grid md:grid-cols-2">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-2">
                          {offer.title}
                        </h3>
                        <p className="text-white/80 mb-4">
                          {offer.description}
                        </p>
                        <div className="text-3xl font-bold mb-6">
                          {offer.discount}
                        </div>
                        <Button
                          className="bg-white text-primary"
                          size="lg"
                          endContent={<ShoppingCartIcon className="w-5 h-5" />}
                        >
                          Order Now
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Menu Section */}
      {/* <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Tabs 
            aria-label="Menu categories"
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-primary",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-primary"
            }}
          >
            {categories.map((category) => (
              <Tab key={category} title={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    >
                      <Card className="hover:shadow-xl transition-all group">
                        <CardBody className="p-0">
                          <div className="relative">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 right-4 flex gap-2">
                              {item.isNew && (
                                <Badge color="primary" variant="solid">New</Badge>
                              )}
                              {item.isBestSeller && (
                                <Badge color="warning" variant="solid">
                                  <SparklesIcon className="w-4 h-4 mr-1" />
                                  Best Seller
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-lg font-bold">{item.name}</h3>
                              <span className="text-primary font-bold">{item.price}</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {item.ingredients.map((ingredient, idx) => (
                                <span 
                                  key={idx}
                                  className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                                >
                                  {ingredient}
                                </span>
                              ))}
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-1">
                                <StarIcon className="w-5 h-5 text-yellow-400" />
                                <span className="text-sm">{item.rating}</span>
                                <span className="text-gray-500 text-sm">({item.reviews})</span>
                              </div>
                              <div className="flex gap-2">
                                <Button 
                                  isIconOnly
                                  variant="light"
                                  className="text-gray-500 hover:text-red-500"
                                >
                                  <HeartIcon className="w-5 h-5" />
                                </Button>
                                <Button 
                                  color="primary" 
                                  endContent={<ShoppingCartIcon className="w-5 h-5" />}
                                >
                                  Add to Cart
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </section> */}

      <GallerySection />
    </div>
  );
}
