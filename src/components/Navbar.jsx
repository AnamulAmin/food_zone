import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuItem,
  NavbarMenu,
  Badge,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

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

  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingNumber, setScrollingNumber] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollingNumber(scrollY);

      // Check scroll direction
      if (scrollY < lastScrollY) {
        // Scrolling up
        setIsSticky(true);
      } else {
        // Scrolling down
        setIsSticky(false);
      }

      // Update last scroll position
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const textColor =
    isLight || scrollingNumber >= 400 ? "text-black" : "text-white";

  return (
    <Navbar
      maxWidth="xl"
      className="bg-transparent"
      height="5rem"
      className={` fixed duration-1000  py-3 bg-white/10 backdrop-blur-xl border-b z-50 ${
        isSticky ? " top-0  " : " -top-full"
      }`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`font-bold text-2xl ${textColor}`}
          >
            <span className="text-primary">food</span>Zone
          </motion.p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              className={`${textColor} hover:text-primary transition-colors ${
                location.pathname ===
                (item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`)
                  ? "font-semibold text-primary"
                  : ""
              }`}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            className={`${textColor} relative`}
          >
            <ShoppingCartIcon className="w-6 h-6" />
            <Badge
              content="5"
              color="primary"
              size="sm"
              className="absolute -top-1 -right-1"
            />
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link to="/auth/login">
            <Button variant="light" className={textColor}>
              Login
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link to="/auth/register">
            <Button className="bg-primary text-white" variant="flat">
              Sign Up
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-6 bg-white/80 backdrop-blur-xl">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              className={`w-full ${
                location.pathname ===
                (item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`)
                  ? "text-primary font-semibold"
                  : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="flex gap-2 mt-4">
          <Link to="/auth/login" className="flex-1">
            <Button variant="light" className="w-full">
              Login
            </Button>
          </Link>
          <Link to="/auth/register" className="flex-1">
            <Button className="bg-primary text-white w-full">Sign Up</Button>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
