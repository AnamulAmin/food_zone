import { Card, CardBody, Input, Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function Login() {
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
              <h1 className="text-2xl font-bold mb-2">Welcome Back!</h1>
              <p className="text-gray-600">Login to your account</p>
            </div>

            <form className="space-y-6">
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                startContent={
                  <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                }
              />

              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                startContent={
                  <LockClosedIcon className="w-5 h-5 text-gray-400" />
                }
              />

              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Remember me</span>
                </label>
                <Link href="#" className="text-sm text-primary">
                  Forgot Password?
                </Link>
              </div>

              <Button color="primary" className="w-full" size="lg">
                Login
              </Button>

              <p className="text-center text-sm text-gray-600">
                {`Don't have an account?`}
                <Link href="/auth/register" className="text-primary">
                  Create Account
                </Link>
              </p>
            </form>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
