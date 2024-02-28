
import React from "react";
import { GithubIcon, InstagramIcon, LinkedinIcon, MaltIcon } from "../../../assets/icons";
import { COLORS } from "../../../constants/Colors";

// const socialIcons = [
//   {
//     label: 'Linkedin',
//     path: '/projects',
//     icon: 'Linkedin',
//   },
//   {
//     label: 'Malt',
//     path: '/about',
//     icon: 'Malt',
//   },
//   {
//     label: 'Github',
//     path: '/skills',
//     icon: 'Github',
//   },
//   {
//     label: 'Instagram',
//     path: '/contact',
//     icon: 'Instagram',
//   },
// ];

export const SocialIcons = ({
  className: additionalStyle,
}) => {
  // const renderedSocialIcons = socialIcons.map((icon) => {
  //   return <SocialIcon type={icon.icon} key={icon.label} {...icon} />;
  // });

  return (
    <div className={additionalStyle}>
      {/* {renderedSocialIcons} */}
      <a
        href="https://www.malt.fr/profile/fionaroux"
        target="_blank"
        rel="noreferrer"
        aria-label="Lien vers Malt"
      >
        <MaltIcon
          fill={COLORS.white.DEFAULT}
          className="transition-all duration-300 hover:fill-tomato"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/fionaroux/"
        target="_blank"
        rel="noreferrer"
        aria-label="Lien vers Linkedin"
      >
        <LinkedinIcon
          fill={COLORS.white.DEFAULT}
          className="transition-all duration-300 hover:fill-tomato"
        />
      </a>
      <a
        href="https://github.com/ArcanumLibella"
        target="_blank"
        rel="noreferrer"
        aria-label="Lien vers Github"
      >
        <GithubIcon
          fill={COLORS.white.DEFAULT}
          className="transition-all duration-300 hover:fill-tomato"
        />
      </a>
      <a
        href="https://www.instagram.com/sukhakulii/"
        target="_blank"
        rel="noreferrer"
        aria-label="Lien vers Instagram"
      >
        <InstagramIcon
          fill={COLORS.white.DEFAULT}
          className="transition-all duration-300 hover:fill-tomato"
        />
      </a>
    </div>
  );
};
