import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import {
  CalendarIcon,
  UsersIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Reservation() {
  const timeSlots = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
  ];

  const guestOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[55vh] bg-black">
        <div className="absolute inset-0">
          <img
            src="/frontend_assets/menu_header_image.jpg"
            alt="Reservation"
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
              <h1 className="text-5xl font-bold text-white mb-4">
                Make a Reservation
              </h1>
              <p className="text-xl text-gray-200">
                Book your table for an unforgettable dining experience
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card className="p-6 bg-white/50 backdrop-blur-xl">
                <CardBody>
                  <h2 className="text-2xl font-bold mb-6">
                    Reserve Your Table
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="First Name"
                        placeholder="Enter your first name"
                        classNames={{
                          label: "text-black/50 dark:text-white/90",
                          input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                          ],
                          innerWrapper: "bg-transparent",
                          inputWrapper: [
                            "bg-transparent",
                            "backdrop-blur-xl",
                            "hover:bg-default-200/70",
                            "group-data-[focus=true]:bg-default-200/50",
                          ],
                        }}
                      />
                      <Input
                        label="Last Name"
                        placeholder="Enter your last name"
                        classNames={{
                          label: "text-black/50 dark:text-white/90",
                          input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                          ],
                          innerWrapper: "bg-transparent",
                          inputWrapper: [
                            "bg-transparent",
                            "backdrop-blur-xl",
                            "hover:bg-default-200/70",
                            "group-data-[focus=true]:bg-default-200/50",
                          ],
                        }}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                        classNames={{
                          label: "text-black/50 dark:text-white/90",
                          input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                          ],
                          innerWrapper: "bg-transparent",
                          inputWrapper: [
                            "bg-transparent",
                            "backdrop-blur-xl",
                            "hover:bg-default-200/70",
                            "group-data-[focus=true]:bg-default-200/50",
                          ],
                        }}
                      />
                      <Input
                        type="tel"
                        label="Phone"
                        placeholder="Enter your phone number"
                        classNames={{
                          label: "text-black/50 dark:text-white/90",
                          input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                          ],
                          innerWrapper: "bg-transparent",
                          inputWrapper: [
                            "bg-transparent",
                            "backdrop-blur-xl",
                            "hover:bg-default-200/70",
                            "group-data-[focus=true]:bg-default-200/50",
                          ],
                        }}
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <Input
                        type="date"
                        label="Date"
                        placeholder="Select date"
                        classNames={{
                          label: "text-black/50 dark:text-white/90",
                          input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                          ],
                          innerWrapper: "bg-transparent",
                          inputWrapper: [
                            "bg-transparent",
                            "backdrop-blur-xl",
                            "hover:bg-default-200/70",
                            "group-data-[focus=true]:bg-default-200/50",
                          ],
                        }}
                      />
                      <Select
                        label="Time"
                        placeholder="Select time"
                        className="max-w-xs"
                      >
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </Select>
                      <Select
                        label="Guests"
                        placeholder="Number of guests"
                        className="max-w-xs"
                      >
                        {guestOptions.map((num) => (
                          <SelectItem key={num} value={num}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>

                    <Input
                      label="Special Requests"
                      placeholder="Any special requests or dietary requirements?"
                      classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                          "bg-transparent",
                          "text-black/90 dark:text-white/90",
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                          "bg-transparent",
                          "backdrop-blur-xl",
                          "hover:bg-default-200/70",
                          "group-data-[focus=true]:bg-default-200/50",
                        ],
                      }}
                    />

                    <Button
                      color="primary"
                      size="lg"
                      className="w-full text-white"
                    >
                      Reserve Table
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </motion.div>

            {/* Information Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Card className="bg-primary text-white">
                <CardBody className="p-6">
                  <SparklesIcon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Reservation Information
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <ClockIcon className="w-6 h-6 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Opening Hours</p>
                        <p className="text-white/80">
                          Monday - Saturday: 11:00 AM - 10:00 PM
                        </p>
                        <p className="text-white/80">
                          Sunday: 11:00 AM - 9:00 PM
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <UsersIcon className="w-6 h-6 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Group Bookings</p>
                        <p className="text-white/80">
                          For parties of more than 10 people, please contact us
                          directly.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CalendarIcon className="w-6 h-6 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Advance Booking</p>
                        <p className="text-white/80">
                          Reservations can be made up to 30 days in advance.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-6">
                  <h3 className="text-xl font-bold mb-4">Reservation Policy</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>
                      • Please arrive within 15 minutes of your reservation time
                    </li>
                    <li>
                      • We hold reservations for up to 15 minutes after the
                      scheduled time
                    </li>
                    <li>
                      • Cancellations should be made at least 2 hours in advance
                    </li>
                    <li>• Special requests are subject to availability</li>
                  </ul>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
