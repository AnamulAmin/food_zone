import { Input, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-orange-100 to-cyan-100">
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-600">
            <span className="mr-2">40% off</span>
            <span className="text-gray-400">on your every order</span>
          </div>

          <h1 className="text-6xl font-bold text-gray-800 leading-tight">
            Make Sure your order with us.
          </h1>

          <p className="text-xl text-gray-600">
            Hey! Our Delicious food is waiting for you, we are always near to
            you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Type your location"
              size="lg"
              radius="full"
              className="max-w-xs "
              startContent={<MapPinIcon className="w-5 h-5 text-gray-400" />}
            />
            <Button
              size="lg"
              radius="full"
              className="bg-primary text-white font-medium"
            >
              Search
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative aspect-square">
            <img
              src="/frontend_assets/pizza_1.png"
              alt="Delicious Food Bowl"
              className="w-full h-full object-cover rounded-full shadow-xl"
            />
            <div className="absolute -bottom-4 right-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
              <p className="font-bold text-2xl text-gray-800">5K+</p>
              <p className="text-sm text-gray-600">Review</p>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-lg">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
