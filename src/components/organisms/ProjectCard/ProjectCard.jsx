import React from "react";
import { Link } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";
import { COLORS } from "../../../constants/Colors";
import { TagType } from "../../atoms/TagType";
import { GatsbyImage } from "gatsby-plugin-image";

const cardVariants = {
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

const titleVariants = {
  hover: {
    scale: 1.05,
    color: COLORS.tomato.DEFAULT,
  },
};

export const ProjectCard = ({
  title,
  tags,
  uri,
  image,
}) => {
  // TODO: Ajouter le loading avec un skeleton dans le composant ?
  return (
    <AnimatePresence>
      {/* TODO: Add animation on page loading */}
      <motion.div
        initial="initial"
        animate="end"
        exit={{ scale: 1, transition: { delay: 0.7, duration: 0.3 } }}
        variants={cardVariants}
        whileHover={{ scale: 1.05, transition: { when: "afterChildren" } }}
        className="ProjectCard h-[64vh] max-h-[64vh] cursor-pointer"
      >
        <Link
          to={uri}
          className="relative inline-block w-[74vw] md:w-[32vw] xl:w-[20vw] max-w-[480px] h-full"
        >
          {/* IMAGE */}
          <div className="ProjectCard__image absolute h-[62vh] w-full md:w-[32vw] xl:w-[20vw] max-w-[480px] bg-purple-light">
            {image && (
              <figure className="h-full">
                <GatsbyImage
                  image={image.node.gatsbyImage}
                  alt={image.node.altText}
                  width={image.node.width}
                  height={image.node.height}
                  className="w-full h-full object-cover"
                />
              </figure>
            )}
          </div>

          {/* TITLE */}
          <motion.h2
            variants={titleVariants}
            whileHover="hover"
            className="ProjectCard__title drop-shadow-lg absolute flex justify-center items-center h-full w-full md:w-[32vw] xl:w-[20vw] max-w-[480px] text-[4.5vh] md:text-[3vh] xl:text-[2.8vw] font-black text-center uppercase font-brother text-white"
          >
            {title}
          </motion.h2>

          {/* TAGS */}
          <div className="ProjectCard__tags absolute flex flex-wrap items-start w-full gap-2 bottom-[6%] left-[4%] md:top-[64vh] md:left-0">
            {tags.nodes.map((tag) => (
              <TagType key={tag.databaseId} label={tag.name} slug={tag.slug} />
            ))}
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
