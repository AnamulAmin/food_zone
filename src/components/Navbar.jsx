import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navigation() {
  const menuItems = [
    "Home",
    "Menu",
    "Blog",
    "About Us",
    "FAQ",
    "Reservation",
    "Contact",
  ];

  const location = useLocation();

  const pathArr = ["/", "/gallery"];

  const isLight = pathArr.includes(location.pathname);

  return (
    <Navbar
      maxWidth="xl"
      className="bg-transparent"
      height="5rem"
      className={`fixed transition-all duration-300  top-0 z-50 py-3 bg-white/10 backdrop-blur-xl `}
    >
      <NavbarBrand>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`font-bold text-2xl ${
            isLight ? "text-black" : "text-white"
          }`}
        >
          <span className="text-primary">food</span>park
        </motion.p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              className={`${
                isLight ? "text-black" : "text-white"
              } hover:text-primary transition-colors`}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link to="/auth/login">
            <Button variant="light">Login</Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/auth/register">
            <Button className="bg-black text-white">Create Account</Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
