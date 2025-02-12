import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "50+", label: "Professional Chefs" },
    { number: "1000+", label: "Happy Customers" },
    { number: "100+", label: "Menu Items" },
  ];

  return (
    <section className="py-20 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center text-white"
            >
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
