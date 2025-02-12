import { motion } from "framer-motion";
import { Card, CardBody, Button, Input, Textarea } from "@nextui-org/react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function ContactUs() {
  const contactInfo = [
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Phone",
      info: "+1 234 567 890",
      subInfo: "Mon-Fri 9am-6pm",
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: "Email",
      info: "info@foodpark.com",
      subInfo: "Online support",
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Location",
      info: "123 Food Street",
      subInfo: "New York, NY 10001",
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "Working Hours",
      info: "Mon-Sat: 9AM-10PM",
      subInfo: "Sunday: 10AM-8PM",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[55vh] bg-black">
        <div className="absolute inset-0">
          <img
            src="/frontend_assets/menu_header_image.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
              <p className="text-xl text-gray-200">
                Get in touch with us for any questions or reservations
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center">
                  <CardBody className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-800 font-medium mb-1">
                      {item.info}
                    </p>
                    <p className="text-gray-500 text-sm">{item.subInfo}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card className="p-6 bg-white/50 backdrop-blur-xl">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="First Name"
                      placeholder="Enter your first name"
                      //   variant="bordered"
                      //   color={"default"}
                      classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                          "bg-transparent",
                          "text-black/90 dark:text-white/90",
                          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                          "bg-transparent",
                          "dark:bg-default/60",
                          "backdrop-blur-xl",
                          "backdrop-saturate-200",
                          "hover:bg-default-200/70",
                          "dark:hover:bg-default/70",
                          "group-data-[focus=true]:bg-default-200/50",
                          "dark:group-data-[focus=true]:bg-default/60",
                          "!cursor-text",
                        ],
                      }}
                    />
                    <Input
                      label="Last Name"
                      placeholder="Enter your last name"
                      //   variant="bordered"
                      //   color={"default"}
                      classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                          "bg-transparent",
                          "text-black/90 dark:text-white/90",
                          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                          "bg-transparent",
                          "dark:bg-default/60",
                          "backdrop-blur-xl",
                          "backdrop-saturate-200",
                          "hover:bg-default-200/70",
                          "dark:hover:bg-default/70",
                          "group-data-[focus=true]:bg-default-200/50",
                          "dark:group-data-[focus=true]:bg-default/60",
                          "!cursor-text",
                        ],
                      }}
                    />
                  </div>
                  <Input
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    // variant="bordered"
                    // color={"default"}
                    classNames={{
                      label: "text-black/50 dark:text-white/90",
                      input: [
                        "bg-transparent",
                        "text-black/90 dark:text-white/90",
                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                      ],
                      innerWrapper: "bg-transparent",
                      inputWrapper: [
                        "bg-transparent",
                        "dark:bg-default/60",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-default-200/70",
                        "dark:hover:bg-default/70",
                        "group-data-[focus=true]:bg-default-200/50",
                        "dark:group-data-[focus=true]:bg-default/60",
                        "!cursor-text",
                      ],
                    }}
                  />
                  <Input
                    type="tel"
                    label="Phone"
                    placeholder="Enter your phone number"
                    // variant="bordered"
                    // color={"default"}
                    isClearable={true}
                    classNames={{
                      label: "text-black/50 dark:text-white/90",
                      input: [
                        "bg-transparent",
                        "text-black/90 dark:text-white/90",
                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                      ],
                      innerWrapper: "bg-transparent",
                      inputWrapper: [
                        "bg-transparent",
                        "dark:bg-default/60",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-default-200/70",
                        "dark:hover:bg-default/70",
                        "group-data-[focus=true]:bg-default-200/50",
                        "dark:group-data-[focus=true]:bg-default/60",
                        "!cursor-text",
                      ],
                    }}
                  />
                  <Textarea
                    label="Message"
                    placeholder="Enter your message"
                    // variant="bordered"
                    // color={"default"}
                    classNames={{
                      label: "text-black/50 dark:text-white/90",
                      input: [
                        "bg-transparent",
                        "text-black/90 dark:text-white/90",
                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                      ],
                      innerWrapper: "bg-transparent",
                      inputWrapper: [
                        "bg-transparent",
                        "dark:bg-default/60",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-default-200/70",
                        "dark:hover:bg-default/70",
                        "group-data-[focus=true]:bg-default-200/50",
                        "dark:group-data-[focus=true]:bg-default/60",
                        "!cursor-text",
                      ],
                    }}
                    minRows={4}
                  />
                  <Button
                    color="primary"
                    size="lg"
                    className="w-full text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card className="overflow-hidden h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25987368715491!3d40.69767006458873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647281016790!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
