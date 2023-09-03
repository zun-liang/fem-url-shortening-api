import styled from "styled-components";

import { Button, CommonContainer } from "../assets/CommonStyles";
import DesktopBg from "../assets/images/bg-boost-desktop.svg";
import MobileBg from "../assets/images/bg-boost-mobile.svg";

const Container = styled(CommonContainer)`
  background: url("${MobileBg}"), var(--dark-violet);
  background-repeat: no-repeat;
  background-size: cover;
  height: 18rem;
  gap: 1.5rem;
  @media (min-width: 800px) {
    background: url("${DesktopBg}"), var(--dark-violet);
    background-repeat: no-repeat;
    background-size: cover;
    height: 14rem;
  }
`;
const BoostTitle = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  @media (min-width: 400px) {
    font-size: 1.8rem;
  }
  @media (min-width: 600px) {
    font-size: 2rem;
  }
  @media (min-width: 800px) {
    font-size: 2.2rem;
  }
`;
const BoostButton = styled(Button)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Boost = () => (
  <Container>
    <BoostTitle>Boost your links today</BoostTitle>
    <BoostButton as="a" href="#shortening">
      Get Started
    </BoostButton>
  </Container>
);

export default Boost;
