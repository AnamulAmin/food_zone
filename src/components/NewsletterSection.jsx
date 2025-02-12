import { Input, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function NewsletterSection() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">Stay Updated</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new dishes, and
            special events
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Input
              placeholder="Enter your email"
              startContent={<EnvelopeIcon className="w-5 h-5 text-gray-400" />}
              size="lg"
              className="max-w-xs"
            />
            <Button color="primary" size="lg" className="font-medium">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
