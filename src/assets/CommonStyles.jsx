import styled from "styled-components"

export const Button = styled.button`
    background-color: var(--cyan);
    border-radius: 1.5rem;
    border: none;
    width: 11rem;
    height: 3rem;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: var(--light-cyan);
    }
`
export const CommonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`