export const cardVariants = {
  initial: {
    opacity: 0,
    translateY: "20%",
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  end: {
    opacity: 1,
    translateY: "0%",
    transition: {
      delay: 0.3,
      duration: 0.3,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

export const titleVariants = {
  hover: {
    scale: 1.05
  },
};
