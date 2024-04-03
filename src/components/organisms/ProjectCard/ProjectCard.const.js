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

export const skeleton =
  <div role="status" className="ProjectCard h-[64vh] max-h-[64vh] w-[74vw] md:w-[32vw] xl:w-[20vw] max-w-[480px] animate-pulse">
    <div class="h-2.5 bg-purple-light"></div>
    <span class="sr-only">Loading...</span>
  </div>