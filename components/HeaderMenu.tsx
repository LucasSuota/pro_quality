"use client";

import { HeaderMenuItemsList } from "@/constants";
import { MenuIcon } from "@/src/assets/svgs";
import { Transition } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const HeaderMenu = () => {
  const menuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <div>
      <motion.img
        src={MenuIcon}
        width={48}
        height={48}
        alt={"Menu Icon"}
        onClick={handleMenuOpen}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute right-0 text-right bg-progray w-full"
          >
            {HeaderMenuItemsList.map((item, index) => (
              <Link href={item.link} key={index}>
                <motion.p
                  className="font-proquality hover:text-problue text-5xl mx-10"
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  {item.title}
                </motion.p>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderMenu;
