import styled from "styled-components";

import { ReactComponent as FacebookSvg } from "../assets/images/icon-facebook.svg";
import { ReactComponent as InstagramSvg } from "../assets/images/icon-instagram.svg";
import { ReactComponent as PinterestSvg } from "../assets/images/icon-pinterest.svg";
import { ReactComponent as TwitterSvg } from "../assets/images/icon-twitter.svg";
import { ReactComponent as LogoSvg } from "../assets/images/logo.svg";

const Container = styled.footer`
  background-color: var(--very-dark-violet);
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media (min-width: 750px) {
    padding: 3rem;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: start;
  }
  @media (min-width: 1000px) {
    padding: 4rem 8.5rem 3rem;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  }
`;
const Logo = styled(LogoSvg)`
  path {
    fill: white;
  }
`;
const LinkContainer = styled.div`
  @media (min-width: 800px) {
  }
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const Li = styled.li`
  list-style: none;
  text-align: center;
  @media (min-width: 800px) {
    text-align: left;
  }
`;
const A = styled.a`
  color: ${({ $color }) => ($color ? "white" : "var(--gray)")};
  text-decoration: none;
  font-weight: ${({ $color }) => ($color ? "700" : "500")};
  &:hover {
    color: var(--cyan);
  }
  @media (min-width: 800px) {
    font-size: 0.8rem;
  }
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    gap: 0.8rem;
  }
  @media (min-width: 800px) {
    gap: 1rem;
  }
`;
const FacebookIcon = styled(FacebookSvg)`
  cursor: pointer;
  &:hover {
    path {
      fill: var(--cyan);
    }
  }
  @media (min-width: 800px) {
    transform: scale(0.8);
  }
  @media (min-width: 1000px) {
    transform: scale(1);
  }
`;
const TwitterIcon = styled(TwitterSvg)`
  cursor: pointer;
  &:hover {
    path {
      fill: var(--cyan);
    }
  }
  @media (min-width: 800px) {
    transform: scale(0.8);
  }
  @media (min-width: 1000px) {
    transform: scale(1);
  }
`;
const PinterestIcon = styled(PinterestSvg)`
  cursor: pointer;
  &:hover {
    path {
      fill: var(--cyan);
    }
  }
  @media (min-width: 800px) {
    transform: scale(0.8);
  }
  @media (min-width: 1000px) {
    transform: scale(1);
  }
`;
const InstagramIcon = styled(InstagramSvg)`
  cursor: pointer;
  &:hover {
    path {
      fill: var(--cyan);
    }
  }
  @media (min-width: 800px) {
    transform: scale(0.8);
  }
  @media (min-width: 1000px) {
    transform: scale(1);
  }
`;
const Footer = () => (
  <Container>
    <Logo />
    <LinkContainer>
      <Ul>
        <Li>
          <A href="#" $color="white">
            Features
          </A>
        </Li>
        <Li>
          <A href="#">Link Shortening</A>
        </Li>
        <Li>
          <A href="#">Branded Links</A>
        </Li>
        <Li>
          <A href="#">Analytics</A>
        </Li>
      </Ul>
    </LinkContainer>
    <LinkContainer>
      <Ul>
        <Li>
          <A href="#" $color="white">
            Resources
          </A>
        </Li>
        <Li>
          <A href="#">Blog</A>
        </Li>
        <Li>
          <A href="#">Developers</A>
        </Li>
        <Li>
          <A href="#">Support</A>
        </Li>
      </Ul>
    </LinkContainer>
    <LinkContainer>
      <Ul>
        <Li>
          <A href="#" $color="white">
            Company
          </A>
        </Li>
        <Li>
          <A href="#">About</A>
        </Li>
        <Li>
          <A href="#">Our Team</A>
        </Li>
        <Li>
          <A href="#">Careers</A>
        </Li>
        <Li>
          <A href="#">Contact</A>
        </Li>
      </Ul>
    </LinkContainer>
    <IconContainer>
      <FacebookIcon />
      <TwitterIcon />
      <PinterestIcon />
      <InstagramIcon />
    </IconContainer>
  </Container>
);

export default Footer;
