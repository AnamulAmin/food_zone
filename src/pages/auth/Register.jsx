import { Card, CardBody, Input, Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-orange-100 to-cyan-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="w-full">
          <CardBody className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Create Account</h1>
              <p className="text-gray-600">Join our food community</p>
            </div>

            <form className="space-y-6">
              <Input
                type="text"
                label="Full Name"
                placeholder="Enter your full name"
                startContent={<UserIcon className="w-5 h-5 text-gray-400" />}
              />

              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                startContent={
                  <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                }
              />

              <Input
                type="tel"
                label="Phone Number"
                placeholder="Enter your phone number"
                startContent={<PhoneIcon className="w-5 h-5 text-gray-400" />}
              />

              <Input
                type="password"
                label="Password"
                placeholder="Create a password"
                startContent={
                  <LockClosedIcon className="w-5 h-5 text-gray-400" />
                }
              />

              <Input
                type="password"
                label="Confirm Password"
                placeholder="Confirm your password"
                startContent={
                  <LockClosedIcon className="w-5 h-5 text-gray-400" />
                }
              />

              <Button color="primary" className="w-full" size="lg">
                Create Account
              </Button>

              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-primary">
                  Login
                </Link>
              </p>
            </form>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
