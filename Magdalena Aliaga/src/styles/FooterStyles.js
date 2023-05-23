import styled from "styled-components"
import { Container, Column } from "../globalStyles"
import { Link } from "gatsby"
import { motion } from "framer-motion"

export const FooterCont = styled.nav`
  background-color: rgb(246, 245, 241, 1);
  /* backdrop-filter: blur(8px); */
  box-shadow: 20px 0 30px rgb(0, 0, 0, 0.15);
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

export const Box = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  /* max-width: 1000px; //este te cambia lo cerca que estan el logo y los links */
  max-width: 1200px;
  ${Container}
`

export const FooterLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 50;
  margin-left: 2rem;
`

export const FooterIcon = styled.img`
  margin-right: 0 0.5rem;
  width: 2rem;
`

export const FooterMenu = styled.ul`
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

export const FooterItem = styled.li`
  height: 80px;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`

export const FooterLinks = styled(Link)`
  color: black;
  font-weight: 600;
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

export const FooterColumn = styled(Column)`
  @media screen and (max-width: 999px) {
    align-items: center;
    /* grid-column: 1/-1; */
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
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: rgb(75, 68, 138);
  font-weight: 600;
  outline: none;
  border: 2px solid rgb(75, 68, 138);
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover {
    transition: 0.3s ease;
    background-color: rgb(75, 68, 138);
    color: #fff;
  }
`
