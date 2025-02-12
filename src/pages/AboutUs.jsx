import { motion } from "framer-motion";
import { Card, CardBody, Button, Image } from "@nextui-org/react";
import {
  UserGroupIcon,
  SparklesIcon,
  TrophyIcon,
  HeartIcon,
  TruckIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function AboutUs() {
  const chefs = [
    {
      name: "John Smith",
      role: "Executive Chef",
      image: "/frontend_assets/chef_1.jpg",
      experience: "15+ Years Experience",
    },
    {
      name: "Maria Garcia",
      role: "Head Chef",
      image: "/frontend_assets/chef_2.jpg",
      experience: "12+ Years Experience",
    },
    {
      name: "David Chen",
      role: "Pastry Chef",
      image: "/frontend_assets/chef_3.jpg",
      experience: "10+ Years Experience",
    },
  ];

  const achievements = [
    { number: "250+", label: "Daily Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Team Members" },
    { number: "100+", label: "Menu Items" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-black">
        <div className="absolute inset-0">
          <img
            src="/frontend_assets/menu_header_image.jpg"
            alt="Restaurant Interior"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold text-white mb-6">Our Story</h1>
            <p className="text-xl text-gray-200">
              A journey of passion, flavor, and dedication to culinary
              excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <SparklesIcon className="w-12 h-12 text-primary" />
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                At Food Park, our mission is to create extraordinary dining
                experiences that combine innovative culinary artistry with warm
                hospitality. We strive to source the finest ingredients and
                transform them into memorable dishes that tell a story.
              </p>
              <Button color="primary" size="lg">
                Learn More
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                src="/frontend_assets/about_us.jpg"
                alt="Our Mission"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <UserGroupIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Meet Our Chefs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team of culinary experts brings passion and
              creativity to every dish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <motion.div
                key={chef.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden">
                  <CardBody className="p-0">
                    <img
                      src={chef.image}
                      alt={chef.name}
                      className="w-full  object-cover object-top h-[500px]"
                      //   isZoomed
                    />
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-2">{chef.name}</h3>
                      <p className="text-primary font-medium mb-2">
                        {chef.role}
                      </p>
                      <p className="text-gray-600">{chef.experience}</p>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold mb-2">{item.number}</h3>
                <p className="text-white/80">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <HeartIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in delivering exceptional dining
              experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TruckIcon className="w-12 h-12" />,
                title: "Quality",
                description: "We source only the finest ingredients",
              },
              {
                icon: <ClockIcon className="w-12 h-12" />,
                title: "Innovation",
                description: "Constantly evolving our menu and techniques",
              },
              {
                icon: <ShieldCheckIcon className="w-12 h-12" />,
                title: "Service",
                description: "Dedicated to exceptional customer experience",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-gray-50 rounded-2xl text-center flex items-center justify-center flex-col gap-4"
              >
                <span className="text-primary font-medium">{value.icon}</span>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
