import styled from "styled-components"
import { Container } from "../globalStyles"
import { Link } from "gatsby"
import { motion } from "framer-motion"

export const Nav = styled.nav`
  background-color: rgb(246, 245, 241, 1);
  /* backdrop-filter: blur(8px); */
  box-shadow: 0 20px 30px rgb(0, 0, 0, 0.15);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  /* max-width: 1000px; //este te cambia lo cerca que estan el logo y los links */
  max-width: 1200px;
  ${Container}
`

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 50;
  margin-left: 2rem;
`

export const NavIcon = styled.img`
  margin-right: 0 0.5rem;
  width: 3rem;
`

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 60vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ click }) => (click ? 1 : 0)};
    visibility: ${({ click }) => (click ? "visible" : "hidden")};
    transform: translateY(${({ click }) => (click ? "0" : "-10px")});
    transition: opacity 0.5s ease;
    /* background-color: rgb(0, 0, 0, 0.6); */
    background-color: rgb(246, 245, 241, 1);
  }
  > li:first-child {
    margin-left: auto;
  }
`

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`

export const NavLinks = styled(Link)`
  color: black;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    /* text-decoration: underline; */
    color: rgb(105, 105, 105);
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      /* text-decoration: underline; */
      color: rgb(105, 105, 105);
      transition: all 0.3s ease;
    }
  }
`

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 1rem;
  width: 100%;
  border: none;
  outline: none;
`

export const NavBarBtn = styled(motion.button)`
  /* border-radius: 7px; */
  border-radius: 25px;
  background: rgb(75, 68, 138);
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  outline: none;
  border: 2px solid rgb(75, 68, 138);
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover {
    transition: 0.3s ease;
    background-color: rgb(246, 245, 241, 1);
    border: 2px solid rgb(75, 68, 138);
    color: rgb(75, 68, 138);
  }
`
