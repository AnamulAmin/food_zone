import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  TruckIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function ServiceSection() {
  const services = [
    {
      icon: <TruckIcon className="w-12 h-12" />,
      title: "Fast Delivery",
      description: "We deliver your food fresh and hot within 30 minutes",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: <ClockIcon className="w-12 h-12" />,
      title: "24/7 Service",
      description: "Order anytime, we're always at your service",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12" />,
      title: "Quality Food",
      description: "We ensure the best quality ingredients for your meals",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <SparklesIcon className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium">What We Offer</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the best food delivery service with our dedicated team
            and quality assurance
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden border border-gray-100">
                  <CardBody className={`text-center p-8 ${service.bgColor}`}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`${service.iconColor} mb-6 flex justify-center`}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <motion.div className="mt-6" whileHover={{ scale: 1.05 }}>
                      <button className="text-primary font-medium hover:underline">
                        Learn More →
                      </button>
                    </motion.div>
                  </CardBody>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
