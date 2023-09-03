import styled from "styled-components";

import { CommonContainer } from "../assets/CommonStyles";
import IconBR from "../assets/images/icon-brand-recognition.svg";
import IconDR from "../assets/images/icon-detailed-records.svg";
import IconFC from "../assets/images/icon-fully-customizable.svg";

const Container = styled(CommonContainer)`
  background-color: var(--light-gray);
  text-align: center;
  padding: 5rem 1.5rem 5rem;
  gap: 5rem;
  @media (min-width: 750px) {
    padding: 5rem 3rem 5rem;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1rem 1fr 1rem 1fr;
    grid-template-rows: 1fr 1fr 3fr;
    gap: 0;
  }
  @media (min-width: 1000px) {
    padding: 5rem 8.5rem 5rem;
    grid-template-columns: 1fr 1.5rem 1fr 1.5rem 1fr;
  }
  @media (min-width: 1400px) {
    height: 100vh;
    padding: 2rem 8.5rem 3rem;
  }
`;
const Title = styled.h2`
  color: var(--very-dark-violet);
  margin-bottom: -4rem;
  @media (min-width: 800px) {
    grid-column: 1 / 6;
    grid-row: 1 / 2;
  }
  @media (min-width: 1000px) {
    font-size: 2.2rem;
  }
`;
const Intro = styled.p`
  color: var(--grayish-violet);
  font-size: 0.9rem;
  max-width: 500px;
  @media (min-width: 750px) {
    max-width: 460px;
  }
  @media (min-width: 800px) {
    grid-column: 1 / 6;
    grid-row: 2 / 3;
    margin: 0 auto;
  }
  @media (min-width: 1000px) {
    font-size: 1rem;
  }
  @media (min-width: 1400px) {
    margin-top: -3.5rem;
    max-width: 520px;
  }
`;
const ContainerSmall = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  background-color: white;
  @media (min-width: 800px) {
    border-radius: 0.3rem;
    height: 65%;
    text-align: left;
    margin-top: ${({ $position }) =>
      $position === "middle" ? "3rem" : $position === "low" ? "6rem" : "0"};
  }
  @media (min-width: 1000px) {
    height: 68%;
  }
  @media (min-width: 1400px) {
    height: 70%;
    margin-top: ${({ $position }) =>
      $position === "middle" ? "0rem" : $position === "low" ? "5rem" : "-5rem"};
  }
`;
const Hr = styled.hr`
  border: 5px solid var(--cyan);
  width: 3.5rem;
  margin: -3.5rem 0 -1.5rem;
  transform: rotate(90deg);
  @media (min-width: 800px) {
    transform: rotate(0);
    width: 1rem;
    margin: 0;
  }
  @media (min-width: 1000px) {
    width: 1.5rem;
  }
  @media (min-width: 1400px) {
    margin-top: -5rem;
  }
`;
const IconBox = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--very-dark-blue);
  position: relative;
  top: -2rem;
  margin-bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 800px) {
    left: 15%;
    transform: translateX(-15%);
    width: 3.5rem;
    height: 3.5rem;
  }
  @media (min-width: 1400px) {
    width: 4.6rem;
    height: 4.6rem;
  }
`;
const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  @media (min-width: 1400px) {
    width: 2.3rem;
    height: 2.3rem;
  }
`;
const SubTitle = styled.h3`
  color: var(--very-dark-violet);
  @media (min-width: 800px) {
    font-size: 1rem;
    padding-left: 10%;
  }
  @media (min-width: 1400px) {
    font-size: 1.22rem;
    margin-top: 0.7rem;
  }
`;
const Description = styled.p`
  color: var(--grayish-violet);
  line-height: 1.6;
  width: 80%;
  margin: 0.5rem auto 2rem;
  font-size: 0.8rem;
  @media (min-width: 800px) {
    font-size: 0.7rem;
  }
  @media (min-width: 1400px) {
    font-size: 0.85rem;
    margin-top: 1rem;
    line-height: 1.8;
  }
`;
const Statistics = () => (
  <Container>
    <Title>Advanced Statistics</Title>
    <Intro>
      Track how your links are performing across the web with our advanced
      statistics dashboard.
    </Intro>
    <ContainerSmall>
      <IconBox>
        <Icon src={IconBR} alt="icon brand recognition" />
      </IconBox>
      <SubTitle>Brand Recognition</SubTitle>
      <Description>
        Boost your brand recognition with each click. Generic links don’t mean a
        thing. Branded links help instil confidence in your content.
      </Description>
    </ContainerSmall>
    <Hr />
    <ContainerSmall $position="middle">
      <IconBox>
        <Icon src={IconDR} alt="icon detailed records" />
      </IconBox>
      <SubTitle>Detailed Records</SubTitle>
      <Description>
        Gain insights into who is clicking your links. Knowing when and where
        people engage with your content helps inform better decisions.
      </Description>
    </ContainerSmall>
    <Hr />
    <ContainerSmall $position="low">
      <IconBox>
        <Icon src={IconFC} alt="icon fully customizable" />
      </IconBox>
      <SubTitle>Fully Customizable</SubTitle>
      <Description>
        Improve brand awareness and content discoverability through customizable
        links, supercharging audience engagement.
      </Description>
    </ContainerSmall>
  </Container>
);

export default Statistics;
