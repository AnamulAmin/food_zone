import { Card, CardBody, Avatar } from "@nextui-org/react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Critic",
      comment:
        "The best dining experience I've had in years. The flavors are extraordinary!",
      rating: 5,
      avatar: "/avatars/avatar1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Regular Customer",
      comment:
        "Amazing food and excellent service. The atmosphere is perfect for any occasion.",
      rating: 5,
      avatar: "/avatars/avatar2.jpg",
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Food Blogger",
      comment:
        "Their attention to detail and quality ingredients make every dish special.",
      rating: 5,
      avatar: "/avatars/avatar3.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar src={testimonial.avatar} size="lg" />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">{testimonial.comment}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
