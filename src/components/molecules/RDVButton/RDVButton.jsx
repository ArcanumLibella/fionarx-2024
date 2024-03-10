import React from "react";
import { CalendarIcon } from "../../../assets/icons";
import { Text } from "../../atoms/Text";

export const RDVButton = () => {
  // TODO: A transformer en button avec CTA
  return (
    <div className="RDVButton fixed top-4 right-4 md:top-8 md:right-8 lg:top-10 lg:right-10 w-16 h-16 z-100 cursor-pointer">
      <div className="flex flex-col justify-center items-center w-full h-full animate-transform bg-midnight lg:bg-twilight">
        <Text type="paragraph" className="!font-black text-tiny">
          RDV
        </Text>
        <CalendarIcon />
      </div>
    </div>
  )
}