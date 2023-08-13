import styled from "styled-components"
import LogoImg from "../assets/images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

const Container = styled.header`
    padding: 2rem 1.5rem 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 750px) {
        padding: 2.5rem 3rem;
    }
    @media (min-width: 1000px) {
        padding: 3rem 8.5rem;
    }
`
const Logo = styled.img`
    width: 6rem;
    @media (min-width: 1000px) {
        margin-right: 2rem;
        width: 7rem;
    }
`
const MenuIcon = styled(FontAwesomeIcon)`
    color: gray;
    font-size: 1.5rem;
    cursor: pointer;
    @media (min-width: 1000px) {
        display: none;
    }
`
const Nav = styled.nav`
    display: ${({$menu}) => $menu ? "" : "none"};
    width: calc(100vw - 3rem);
    background-color: var(--dark-violet);
    border-radius: 1rem;
    padding: 2.5rem 2rem;
    position: absolute;
    top: 5rem;
    z-index: 2;
    @media (min-width: 750px) {
        width: calc(100vw - 6rem);
    }
    @media (min-width: 1000px) {
        display: block;
        background-color: white;
        position: static;
        width: calc(100% - 9rem);
        padding: 0;
    }
`
const Ul = styled.ul`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    @media (min-width: 750px) {
        gap: 1.2rem;
    }
    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 3fr 1fr 1fr;
    }
`
const List = styled.li`
    width: 100%;
    list-style: none;
    text-align: center;
`
const ButtonLike = styled.li`
    width: 100%;
    height: 2.5rem;
    list-style: none;
    text-align: center;
    color: white;
    background-color: var(--cyan);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: var(--light-cyan);
    }
    @media (min-width: 1000px) {
        width: 6rem;
        height: 2.1rem;
        border-radius: 1rem;
    }
`
const A = styled.a`
    text-decoration: none;
    cursor: pointer;
    &:link, &:visited {
        color: white;
    }
    &:hover, &:active {
        color: var(--cyan);
    }
    @media (min-width: 1000px) {
        font-size: 0.9rem;
        font-weight: 700;
        &:link, &:visited {
            color: var(--grayish-violet);
        }
        &:hover, &:active {
            color: var(--very-dark-violet);
        }
    }
`
const ButtonLikeA = styled.a`
    text-decoration: none;
    cursor: pointer;
    &:link, &:visited, &:hover, &:active {
        color: white;
    }
    @media (min-width: 1000px) {
        font-size: 0.8rem;
        font-weight: 700;
    }
`
const Hr = styled.hr`
    width: 100%;
    border: 0.1px solid gray;
    @media (min-width: 1000px) {
        opacity: 0;
    }
`

const Header = () => {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => setMenu(prev => !prev)
    return(
        <Container>
            <Logo src={LogoImg} alt="logo image" />
            <MenuIcon icon={faBars} onClick={toggleMenu}/>
            <Nav $menu={menu}>
                <Ul>
                    <List><A href="#">Features</A></List>
                    <List><A href="#">Pricing</A></List>
                    <List><A href="#">Resources</A></List>
                    <List><Hr /></List>
                    <List><A href="#">Login</A></List>
                    <ButtonLike><ButtonLikeA href="#">Sign Up</ButtonLikeA></ButtonLike>
                </Ul>
            </Nav>
        </Container>
    )
}

export default Header