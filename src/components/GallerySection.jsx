import { Card, CardBody, Button, Tabs, Tab } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import { CameraIcon, FireIcon, StarIcon } from "@heroicons/react/24/outline";

export default function GallerySection() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "pizza",
    "burger",
    "salad",
    "drinks",
    "dessert",
    "main",
  ];

  const featuredDishes = [
    {
      id: "f1",
      src: "/frontend_assets/food_1.png",
      title: "Special Pizza",
      rating: 4.9,
      reviews: 120,
    },
    {
      id: "f2",
      src: "/frontend_assets/food_2.png",
      title: "Premium Burger",
      rating: 4.8,
      reviews: 95,
    },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/frontend_assets/food_1.png",
      title: "Signature Pizza",
      category: "Pizza",
    },
    {
      id: 2,
      src: "/frontend_assets/food_2.png",
      title: "Gourmet Burger",
      category: "Burger",
    },
    {
      id: 3,
      src: "/frontend_assets/food_3.png",
      title: "Fresh Salad",
      category: "Salad",
    },
    {
      id: 4,
      src: "/frontend_assets/food_4.png",
      title: "Special Drinks",
      category: "Drinks",
    },
    {
      id: 5,
      src: "/frontend_assets/food_5.png",
      title: "Desserts",
      category: "Dessert",
    },
    {
      id: 6,
      src: "/frontend_assets/food_6.png",
      title: "Main Course",
      category: "Main",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter(
          (img) => img.category.toLowerCase() === selectedCategory
        );

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <CameraIcon className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium">Our Gallery</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Food Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our delicious dishes through our food gallery
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Featured Dishes Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <FireIcon className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Featured Dishes</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredDishes.map((dish) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden">
                  <CardBody className="p-0">
                    <div className="relative h-96">
                      <img
                        src={dish.src}
                        alt={dish.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="absolute bottom-6 left-6 right-6">
                          <h4 className="text-white text-2xl font-bold mb-2">
                            {dish.title}
                          </h4>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <StarIcon className="w-5 h-5 text-yellow-400" />
                              <span className="text-white">{dish.rating}</span>
                            </div>
                            <span className="text-gray-300">
                              ({dish.reviews} reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Filter */}
        <div className="mb-8">
          <Tabs
            selectedKey={selectedCategory}
            onSelectionChange={setSelectedCategory}
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-6",
              cursor: "w-full bg-primary",
            }}
          >
            {categories.map((category) => (
              <Tab
                key={category}
                title={category.charAt(0).toUpperCase() + category.slice(1)}
              />
            ))}
          </Tabs>
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    className="overflow-hidden cursor-pointer group"
                    onClick={() => {
                      setPhotoIndex(index);
                      setIsOpen(true);
                    }}
                  >
                    <CardBody className="p-0 relative">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-primary text-sm font-medium">
                          {image.category}
                        </span>
                        <h3 className="text-white text-xl font-bold mt-2">
                          {image.title}
                        </h3>
                        <Button
                          className="mt-4 w-fit"
                          color="primary"
                          size="sm"
                        >
                          View Details
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={galleryImages.map((img) => ({ src: img.src }))}
        />
      </div>
    </section>
  );
}
