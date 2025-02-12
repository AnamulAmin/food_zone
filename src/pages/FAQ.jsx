import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function FAQ() {
  const faqItems = [
    {
      question: "What are your opening hours?",
      answer:
        "We are open Monday to Friday from 8:00 AM to 10:00 PM, and on weekends from 10:00 AM to 11:00 PM.",
    },
    {
      question: "Do you offer delivery services?",
      answer:
        "Yes, we offer delivery within a 5-mile radius. Orders can be placed through our website or mobile app.",
    },
    {
      question: "Are reservations required?",
      answer:
        "While walk-ins are welcome, we recommend reservations for dinner service and special occasions to ensure availability.",
    },
    {
      question: "Do you cater to dietary restrictions?",
      answer:
        "Yes, we offer vegetarian, vegan, and gluten-free options. Please inform our staff about any allergies or dietary requirements.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, and digital payment methods including Apple Pay and Google Pay.",
    },
    {
      question: "Do you offer private dining?",
      answer:
        "Yes, we have private dining rooms available for special events and gatherings. Please contact us for details and reservations.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* FAQ Hero Section */}
      <section className="relative h-[50vh] bg-black">
        <div className="absolute inset-0">
          <img
            src="/frontend_assets/menu_header_image.jpg"
            alt="FAQ Header"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl px-4"
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200">
              Find answers to common questions about our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <QuestionMarkCircleIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">How Can We Help You?</h2>
            <p className="text-gray-600">
              Browse through our frequently asked questions to find quick
              answers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Accordion>
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  aria-label={item.question}
                  title={item.question}
                  //   className="group"
                >
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 text-center bg-gray-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              {`Can't find the answer you're looking for? Please contact our
              friendly team.`}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:support@foodpark.com"
                className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
