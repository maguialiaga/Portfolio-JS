import styled from "styled-components"
import { motion } from "framer-motion"
import "animate.css"

export const ContentRow = styled.div`
  display: flex;
  /* margin: 0 -5px -5px -5px; */
  margin: 40px 10px 50px 100px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin: 0 -5px -5px -5px;
  }
`

// export const ContentRow = styled(Row)`
//   flex-wrap: wrap;
//   @media screen and (max-width: 820px) {
//     > div {
//       width: 20%;
//     }
//     > div:first-child {
//       width: 100%;
//     }
//   }
//   @media screen and (max-width: 420px) {
//     flex-direction: column;
//     align-items: center;
//     * {
//       width: 100%;
//       text-align: left;
//     }
//   }
// `;

export const ContentColumn = styled(motion.div)`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    > h1,
    p {
      text-align: left;
    }
    display: flex;
    flex-direction: column;
    align-items: left;
  }
  > img {
    width: 300px;
    margin-left: -3px;
  }
`

export const ImgWrapper = styled(motion.div)`
  display: flex;
  justify-content: "flex-end";
  max-height: 700px;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 768px) {
    padding-bottom: 3rem;
  }
`

export const TopLine = styled(motion.div)`
  font-size: 1rem;
  line-height: 16px;
  font-weight: 550;
  letter-spacing: 1.4px;
  margin-bottom: 1.3rem;
  color: #979797;
  @media screen and (max-width: 768px) {
    text-align: left;
  }
`

export const Img = styled(motion.img)`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  /* object-fit: cover; */
  /* max-height: 700px; */
  max-height: 1000px;
  z-index: 1;
`

export const Heading = styled(motion.h2)`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ inverse }) => (inverse ? "#0c4577" : "rgb(75, 68, 138)")};
  @media screen and (max-width: 768px) {
    text-align: left;
  }
`

export const Subtitle = styled(motion.p)`
  /* max-width: 440px; */
  margin-bottom: 35px;
  line-height: 24px;
  color: ${({ inverse }) => (inverse ? "#6a6a6a" : "black")};
`

export const Subtitle2 = styled(motion.p)`
  max-width: 440px;
  margin-bottom: 5px;
  line-height: 24px;
  font-weight: 500;
  color: ${({ inverse }) => (inverse ? "#6a6a6a" : "black")};
`

export const ContentButton = styled(motion.button)`
  height: 3rem;
  padding: 16px 32px;
  /* font-weight: 700; */
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 18px;
  /* letter-spacing: 1.54px; */
  /* text-transform: uppercase; */
  cursor: pointer;
  background: rgb(75, 68, 138);
  color: ${({ inverse }) => (inverse ? "#0c4577" : "white")};
  /* border-radius: 4px; */
  border-radius: 25px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 2px solid
    ${({ inverse }) => (inverse ? "#0c4577" : "rgb(75, 68, 138)")};
  cursor: pointer;
  animation: pulse;
  animation-duration: 1s;
  animation-iteration-count: infinite;

  /* position: relative;
  overflow: hidden; */
  &:before {
    background: ${({ inverse }) => (inverse ? "#0c4577" : "rgb(75, 68, 138)")};
    /* content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1; */
    transition: all 0.6s ease;
    /* width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg); */
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    transition: 0.3s ease;
    background-color: rgb(246, 245, 241, 1);
    color: rgb(75, 68, 138);
  }
`
