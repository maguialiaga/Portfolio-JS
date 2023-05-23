import React, { useEffect, useState } from "react"
// import { navigate } from "@reach/router";
// import { useLocation } from "react-router-dom";
import logo from "../assets/logo-portfolio.png"

import {
  FooterCont,
  Box,
  FooterLogo,
  FooterIcon,
  FooterMenu,
  FooterItem,
  FooterLinks,
  FooterColumn,
} from "../styles/FooterStyles"
// import { FiMenu, FiX } from "react-icons/fi"
import { IconContext } from "react-icons"

export default function Footer() {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const closeMobileMenu = () => {
    setClick(false)
  }
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#131313" }}>
        <FooterCont active={scroll} click={click}>
          <Box>
            <FooterLogo to="/" onClick={closeMobileMenu}>
              <FooterIcon src={logo} alt="logo" />
            </FooterLogo>
            <FooterColumn>
              <FooterMenu>
                <FooterItem>
                  <FooterLinks>Hola</FooterLinks>
                </FooterItem>
              </FooterMenu>
            </FooterColumn>
          </Box>
        </FooterCont>
      </IconContext.Provider>
    </>
  )
}
