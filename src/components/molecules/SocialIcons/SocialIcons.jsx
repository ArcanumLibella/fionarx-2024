
import React from "react";
import { GithubIcon, InstagramIcon, LinkedinIcon, MaltIcon } from "../../../assets/icons";
import { COLORS } from "../../../constants/Colors";

const socialIcons = [
  {
    label: 'Linkedin',
    path: 'https://www.linkedin.com/in/fionaroux/',
    icon: <LinkedinIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
  },
  {
    label: 'Malt',
    path: 'https://www.malt.fr/profile/fionaroux',
    icon: <MaltIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
  },
  {
    label: 'Github',
    path: 'https://github.com/ArcanumLibella',
    icon: <GithubIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
  },
  {
    label: 'Instagram',
    path: 'https://www.instagram.com/sukhakulii/',
    icon: <InstagramIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
  },
];

export const SocialIcons = ({
  className: additionalStyle,
}) => {
  const renderedSocialIcons = socialIcons.map((icon) => {
    return (
      <a
        href={icon.path}
        target="_blank"
        rel="noreferrer"
        aria-label={`Lien vers ${icon.label}`}
      >
        {icon.icon}
      </a>
    );
  });

  return (
    <div className={additionalStyle}>
      {renderedSocialIcons}
    </div>
  );
};
