import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function MenuSection() {
  const menuCategories = [
    { id: 1, name: "Pizza", icon: "🍕" },
    { id: 2, name: "Burger", icon: "🍔" },
    { id: 3, name: "Fried Chicken", icon: "🍗" },
    { id: 4, name: "Drink", icon: "🥤" },
    { id: 5, name: "Salad", icon: "🥗" },
    { id: 6, name: "Sandwich", icon: "🥪" },
  ];

  const handleCardClick = (category) => {
    console.log(`Selected category: ${category.name}`);
    // Add your click handling logic here
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-2">Our Menus</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="relative px-16">
        <motion.button
          id="prev"
          //   whileHover={{ scale: 1.1 }}
          //   whileTap={{ scale: 0.9 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10  bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all flex"
        >
          <FaAngleLeft className="w-6 h-6 text-gray-700" />
        </motion.button>

        <motion.button
          id="next"
          //   whileHover={{ scale: 1.1 }}
          //   whileTap={{ scale: 0.9 }}
          className="absolute !text-gray-500 !text-xl right-0 top-1/2 -translate-y-1/2 z-10  bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all"
        >
          <FaAngleRight size={20} className="text-xl !text-gray-700" />
        </motion.button>

        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            prevEl: "#prev",
            nextEl: "#next",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 20 },
            640: { slidesPerView: 2.5, spaceBetween: 30 },
            768: { slidesPerView: 3.5, spaceBetween: 40 },
            1024: { slidesPerView: 4.5, spaceBetween: 50 },
          }}
          centeredSlides={true}
          loop={true}
          className="menu-swiper py-20 h-[250px] pt-44"
        >
          {menuCategories.map((category) => (
            <SwiperSlide key={category.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleCardClick(category)}
              >
                <Card
                  className={`cursor-pointer bg-white/30 backdrop-blur-xl  border border-white/20 p-6 rounded-lg   hover:bg-primary hover:text-white`}
                >
                  <CardBody className="text-center py-8">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <p className="font-medium">{category.name}</p>
                  </CardBody>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
