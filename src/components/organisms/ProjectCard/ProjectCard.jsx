import React from "react";
import { Link } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import { COLORS } from "../../../constants/Colors";
import { Tag } from "../../atoms/Tag";

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
    scale: 1.1,
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
        whileHover={{ scale: 1.1, transition: { when: "afterChildren" } }}
        className="h-[75vh] max-h-[75vh] cursor-pointer"
      >
        <Link
          to={uri}
          className="relative inline-block w-[70vw] md:w-[32vw] xl:w-[20vw] max-w-[480px]
            h-[75vh]"
        >
          {/* IMAGE */}
          <div className="absolute h-[68vh] w-[70vw] md:w-[32vw] xl:w-[20vw] max-w-[480px] bg-purple-light">
            {image && (
              <figure key={image.node.databaseId}>
                {/* FIXME: */}
                <GatsbyImage
                  image={image.node.sourceUrl}
                  alt={image.node.altText}
                  objectFit="cover"
                  className="w-full h-full"
                />
              </figure>
            )}
          </div>

          {/* TITLE */}
          <motion.h2
            variants={titleVariants}
            whileHover="hover"
            className="drop-shadow-lg absolute flex justify-center items-center h-full w-[70vw] md:w-[32vw] xl:w-[20vw] max-w-[480px] text-[4.5vh] md:text-[3vh] xl:text-[2.8vw] font-black text-center uppercase font-brother text-white"
          >
            {title}
          </motion.h2>

          {/* TAGS */}
          <div className="absolute flex flex-wrap items-start w-full gap-2 top-[70vh]">
            {tags.nodes.map((tag) => (
              <Tag key={tag.databaseId} label={tag.name} uri={tag.uri} />
            ))}
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
