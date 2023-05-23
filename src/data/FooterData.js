import React from "react"

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"

const iconStyle = Icon => <Icon />

export const footerSocialData = [
  {
    name: "Github",
    icon: iconStyle(FiGithub),
    src: "https://github.com/maguialiaga",
  },
  {
    name: "LinkedIn",
    icon: iconStyle(FiLinkedin),
    src: "https://www.linkedin.com/in/magdalena-aliaga-bb239698/",
  },
  {
    name: "Email",
    icon: iconStyle(FiMail),
    src: "mailto:rummelaudio@gmail.com",
  },
]
