import React from 'react';
import { Link } from "gatsby";

import { Blobs } from "../Blobs";
import { Text } from "../../atoms/Text";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen min-h-screen px-4 overflow-hidden text-center lg:py-16 md:items-end md:text-right md:px-8 lg:px-20 bg-midnight">
      <Blobs className="absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[56vw] h-[36vh] lg:w-[48vw] lg:h-[54vh] xl:w-[32vw] xl:h-[56vh]" />
      <Text type="h1" className="mb-4 text-white">Branding & Web Design</Text>
      <Text type="h1" className="mb-4 text-white">Site vitrine & E-commerce</Text>
      <Text type="h1" className="mb-4 text-white">Social Media</Text>
      <Link rel="canonical" to="/a-propos" className="z-10 no-underline mb-4">
        <h1 className="text-[12vw] font-black uppercase cursor-pointer select-none md:text-[10vw] lg-text-[10vh] xl:text-[12vh] font-brother text-white">
          Fiona Roux
        </h1>
      </Link>
      <Text type="h1" className="mb-4 text-white">Applications web et mobile</Text>
      <Text type="h1" className="mb-4 text-white">Automatisation</Text>
      <Text type="h1" className="mb-4 text-white">SEO</Text>
    </div>
  );
};
