"use client";

import { HeaderMenuItemsList } from "@/constants";
import { LogoBlack } from "@/src/assets/images";
import { MenuIcon } from "@/src/assets/svgs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      <div className="relative sm:w-[48px] sm:h-[48px] w-[32px] h-[32px]">
        <Image
          src={MenuIcon}
          width={48}
          height={48}
          alt="Menu Icon"
          onClick={handleMenuOpen}
          className="cursor-pointer"
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute py-4 right-0 text-right bg-progray w-full mt-2"
          >
            {HeaderMenuItemsList.map((item, index) => (
              <Link href={item.link} key={index}>
                <motion.p
                  className="font-proquality hover:text-problue active:text-problack text-5xl mt-1 mx-10"
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
