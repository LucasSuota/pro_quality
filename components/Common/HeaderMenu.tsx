"use client";

import { HeaderMenuItemsList } from "@/constants";
import { Close, MenuIcon } from "@/src/assets/svgs";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HeaderMenu = () => {
  const menuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="relative sm:w-[48px] sm:h-[48px] w-[32px] h-[32px]">
        {isOpen ? (
          <Image
            src={Close}
            width={48}
            height={48}
            alt="Menu Icon"
            onClick={handleMenuOpen}
            className="cursor-pointer"
          />
        ) : (
          <Image
            src={MenuIcon}
            width={48}
            height={48}
            alt="Menu Icon"
            onClick={handleMenuOpen}
            className="cursor-pointer"
          />
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute z-40 py-4 right-0 text-right bg-white w-full sm:mt-2 md:mt-2 lg:mt-2 mt-3"
          >
            {HeaderMenuItemsList.map((item, index) => (
              <Link href={item.link} key={index}>
                <motion.p
                  className="font-proquality hover:text-problue active:text-problack sm:text-5xl text-2xl mt-6 mx-10 "
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
