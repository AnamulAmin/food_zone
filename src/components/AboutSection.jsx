import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function AboutSection() {
  const features = [
    "Fresh & Tasty Food",
    "Professional Chefs",
    "Clean Environment",
    "24/7 Food Delivery",
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -right-4 -top-4 bg-white p-4 rounded-lg shadow-xl"
          >
            <div className="text-center">
              <h4 className="text-3xl font-bold text-primary">15+</h4>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
          </motion.div>

          <img
            src="/frontend_assets/about_us.jpg"
            alt="About Our Restaurant"
            className="rounded-3xl shadow-2xl w-full object-cover h-[600px]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute -left-4 -bottom-4 bg-white p-4 rounded-lg shadow-xl"
          >
            <div className="text-center">
              <h4 className="text-3xl font-bold text-primary">100+</h4>
              <p className="text-sm text-gray-600">Daily Customers</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <span className="text-primary font-medium">About Us</span>
          <h2 className="text-4xl font-bold leading-tight">
            Delivering the Best Food Dining Experience
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to Food Park, where culinary excellence meets warm
            hospitality. We take pride in serving delicious meals made from the
            freshest ingredients, carefully prepared by our expert chefs to
            create an unforgettable dining experience.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <CheckCircleIcon className="w-5 h-5 text-primary" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button color="primary" size="lg" className="font-medium px-8">
                Learn More
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="bordered" size="lg" className="font-medium px-8">
                Contact Us
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
