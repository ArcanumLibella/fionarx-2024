import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useState } from "react";
import { useIsMobile } from "../../../utils/useWindowSize";
// import { useOuterClick } from "@/hooks/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";
import { NavButton } from "../../molecules/NavButton";
import { MenuItem } from "../../atoms/MenuItem";

import { GithubIcon, LinkedinIcon, MaltIcon } from "../../../assets/icons";
import { COLORS } from "../../../constants/Colors";

// TODO: Externaliser ces constantes
const menuItemsVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
const socialItemsVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.4,
      staggerDirection: -1,
    },
  },
};
const menuItemVariants = {
  closed: {
    translateX: "-10%",
    opacity: 0,
  },
  open: {
    translateX: "10%",
    opacity: 1,
  },
};

export const Menu = () => {
  // TODO: Externaliser cette query
  const data = useStaticQuery(graphql`
    query MainMenuQuery {
      wp {
        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              label
              path {
                ... on WpPage {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `);

  const menuItems = data.wp.acfOptionsMainMenu.mainMenu.menuItems;
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const innerRef = useOuterClick(() => {
  //   setIsMenuOpen(false);
  // }, "click");

  const openMenuHandler = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuItem = (e) => {
    e.stopPropagation();
    setIsMenuOpen(false);
  };

  return (
    <>
      <NavButton openMenuHandler={openMenuHandler} isMenuOpen={isMenuOpen} />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            // ref={innerRef}
            key="menuAside"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            exit={{ width: "0%", transition: { delay: 0.7, duration: 0.3 } }}
            className="fixed z-40 overflow-hidden xl:max-w-8/12"
          >
            <motion.ul
              className="flex flex-col justify-center w-full h-screen bg-twilight md:ml-20"
              key="menuUl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuItemsVariants}
            >
              {isMobile && (
                <motion.li
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <MenuItem
                    toggleMenuItem={toggleMenuItem}
                    label="Accueil"
                    path="/"
                  />
                </motion.li>
              )}
              {menuItems.map((item) => {
                return (
                  <motion.li
                    key={item.label}
                    variants={menuItemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <MenuItem toggleMenuItem={toggleMenuItem} {...item} />
                  </motion.li>
                );
              })}
            </motion.ul>
            {/* TODO: A refaire plus tard */}
            {isMobile && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={socialItemsVariants}
                className="absolute z-50 flex items-center gap-4 h-14 right-20 bottom-2 "
              >
                <motion.a
                  href="https://www.malt.fr/profile/fionaroux"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  variants={menuItemVariants}
                >
                  <MaltIcon
                    fill={COLORS.purple.DEFAULT}
                    height={32}
                    width={32}
                    className="transition-all duration-300 hover:fill-purple-light"
                  />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/fionaroux/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  variants={menuItemVariants}
                >
                  <LinkedinIcon
                    fill={COLORS.purple.DEFAULT}
                    height={32}
                    width={32}
                    className="transition-all duration-300 hover:fill-purple-light"
                  />
                </motion.a>
                <motion.a
                  href="https://github.com/ArcanumLibella"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  variants={menuItemVariants}
                >
                  <GithubIcon
                    fill={COLORS.purple.DEFAULT}
                    height={32}
                    width={32}
                    className="transition-all duration-300 hover:fill-purple-light"
                  />
                </motion.a>
              </motion.div>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
