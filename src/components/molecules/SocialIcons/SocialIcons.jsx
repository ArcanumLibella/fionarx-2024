
import React from "react";
import { GithubIcon, InstagramIcon, LinkedinIcon, MaltIcon } from "../../../assets/icons";
import { COLORS } from "../../../constants/Colors";
import { LINKS } from "../../../constants/Links";

const socialIcons = [
  {
    label: 'Linkedin',
    path: LINKS.linkedin,
    icon: <LinkedinIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
  },
  {
    label: 'Malt',
    path: LINKS.malt,
    icon: <MaltIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
  },
  {
    label: 'Github',
    path: LINKS.github,
    icon: <GithubIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
  },
  {
    label: 'Instagram',
    path: LINKS.instagram,
    icon: <InstagramIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
  },
];

export const SocialIcons = ({
  className: additionalStyle,
}) => {
  const renderedSocialIcons = socialIcons.map((icon, index) => {
    return (
      <a
        href={icon.path}
        key={index}
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
