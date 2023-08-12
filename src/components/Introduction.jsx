import styled from "styled-components"
import { Button, CommonContainer } from "../assets/CommonStyles"
import IllustrationImg from "../assets/images/illustration-working.svg"

const Container = styled(CommonContainer)`
    padding: 0 1.5rem 4rem;
    overflow: hidden;
    text-align: center;
    gap: 2rem;
    @media (min-width: 750px) {
        padding: 0 3rem 4rem;
    }
    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 2fr 3fr;
        grid-template-rows: 2fr 1fr 1fr;
        gap: 0;
        position: relative;
        left: 3rem;
        text-align: left;
        padding: 0 0 4rem;
    }
    @media (min-width: 1000px) {
        left: 8.5rem;
    }
    @media (min-width: 1220px) {
        padding: 2rem 0 4rem;
        overflow: visible;
    }
`
const Illustration = styled.img`
    width: 150%;
    position: relative;
    left: 25%;
    @media (min-width: 450px) {
        width: 100%;
        left: 17%;
    }
    @media (min-width: 600px) {
        width: 80%;
        left: 15%;
    }
    @media (min-width: 750px) {
        width: 60%;
        position: static;
    }
    @media (min-width: 800px) {
        width: 45vw;
        grid-row: 1 / 4;
        grid-column: 3 / 4;
    }
    @media (min-width: 1000px) {
        width: 48vw;
    }
    @media (min-width: 1220px) {
        width: 50vw;
    }
    @media (min-width: 1360px) {
        width: 55vw;
    }
`
const Title = styled.h1`
    color: var(--very-dark-violet);
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    @media (min-width: 800px) {
        width: 45vw;
        grid-row: 1 / 2;
        grid-column: 1 / 3;
        font-size: 2.4rem;
    }
    @media (min-width: 1000px) {
        font-size: 2.7rem;
    }
    @media (min-width: 1220px) {
        font-size: 3rem;
    }
    @media (min-width: 1360px) {
        font-size: 4.5rem;
    }
`
const Intro = styled.p`
    color: var(--grayish-violet);
    margin-top: -1rem;
    @media (min-width: 560px) {
        max-width: 450px;
    }
    @media (min-width: 800px) {
        width: 45vw;
        grid-row: 2 / 3;
        grid-column: 1 / 3;
        font-size: 0.7rem;
        padding-right: 1rem;
        max-width: 360px;
    }
    @media (min-width: 1000px) {
        font-size: 0.9rem;
        max-width: 450px;
    }
    @media (min-width: 1220px) {
        font-size: 1.1rem;
    }
    @media (min-width: 1360px) {
        font-size: 1.2rem;
        max-width: 600px;
    }
`
const IntroButton = styled(Button)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 800px) {
        grid-row: 3 / 4;
        grid-column: 1 / 2;
        width: 7rem;
        height: 2.2rem;
        font-size: 0.8rem;
    }
    @media (min-width: 1000px) {
        width: 8rem;
        height: 2.5rem;
        font-size: 0.9rem;
    }
    @media (min-width: 1220px) {
        width: 10rem;
        height: 3rem;
        font-size: 1rem;
    }
`
const Introduction = () => 
    <Container>
        <Illustration src={IllustrationImg} alt="illustration working" />
        <Title>More than just shorter links</Title>
        <Intro>
            Build your brand’s recognition and get detailed insights on how your links are performing.
        </Intro>
        <IntroButton as="a" href="#shortening">Get Started</IntroButton>
    </Container>

export default Introduction