/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Button, CommonContainer } from "../assets/CommonStyles";
import DesktopBg from "../assets/images/bg-shorten-desktop.svg";
import MobileBg from "../assets/images/bg-shorten-mobile.svg";
import Result from "./children/Result";

const Container = styled(CommonContainer)`
  background-color: var(--light-gray);
  gap: 1rem;
  width: 100vw;
  height: auto;
  padding: 0 1.5rem;
  @media (min-width: 750px) {
    padding: 0 3rem;
  }
  @media (min-width: 1000px) {
    padding: 0 8.5rem;
  }
`;
const BackgroundContainer = styled.div`
  width: 100vw;
  padding: 0 1.5rem;
  background: linear-gradient(to bottom, white 50%, var(--light-gray) 50%);
  @media (min-width: 750px) {
    padding: 0 3rem;
  }
  @media (min-width: 1000px) {
    padding: 0 8.5rem;
  }
`;
const ShorteningContainer = styled(CommonContainer)`
  background: url("${MobileBg}"), var(--very-dark-violet);
  background-repeat: no-repeat;
  background-size: 75%;
  background-position: top 0 right 0;
  width: 100%;
  height: auto;
  padding: 1.5rem;
  border-radius: 0.6rem;
  gap: 1.5rem;
  @media (min-width: 800px) {
    background: url("${DesktopBg}"), var(--very-dark-violet);
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 30fr 1fr;
    padding: 1.5rem 2rem;
  }
  @media (min-width: 1400px) {
    height: 9rem;
    padding: 1.5rem 3.5rem;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  border: none;
  border-radius: 0.3rem;
  font-size: 1.1rem;
  padding: 0 1rem;
  outline: ${({ $error }) => ($error ? "3px solid var(--red)" : "none")};
  &::placeholder {
    font-family: "Poppins", sans-serif;
    color: var(--grayish-violet);
    font-size: 1.1rem;
  }
  @media (min-width: 800px) {
    grid-row: ${({ $error }) => ($error ? "1 / 2" : "1 / 3")};
    height: 2.5rem;
    font-size: 0.9rem;
    &::placeholder {
      font-size: 0.9rem;
    }
  }
  @media (min-width: 1400px) {
    height: 3.5rem;
    font-size: 1.1rem;
    margin-top: ${({ $error }) => ($error ? "1.3rem" : "0")};
    &::placeholder {
      font-size: 1.1rem;
    }
  }
`;
const ErrorMessage = styled.p`
  display: ${({ $error }) => ($error ? "" : "none")};
  color: var(--red);
  font-style: italic;
  font-weight: 500;
  font-size: 0.9rem;
  align-self: flex-start;
  margin: -1rem 0 -0.5rem;
  @media (min-width: 800px) {
    grid-row: 2 / 3;
    font-size: 0.8rem;
  }
`;
const ShorteningButton = styled(Button)`
  width: 100%;
  border-radius: 0.3rem;
  @media (min-width: 800px) {
    grid-row: ${({ $error }) => ($error ? "1 / 2" : "1 / 3")};
    height: 2.5rem;
    font-size: 0.9rem;
  }
  @media (min-width: 1400px) {
    height: 3.5rem;
    font-size: 1.1rem;
    margin-top: ${({ $error }) => ($error ? "1.3rem" : "0")};
  }
`;
const ClearAllButton = styled(Button)`
  width: 90%;
  border-radius: 0.3rem;
  margin-top: 1rem;
  font-size: 1rem;
  @media (min-width: 800px) {
    width: 50%;
    max-width: 15rem;
    align-self: flex-end;
  }
  @media (min-width: 1400px) {
  }
`;

const Shortening = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => setInput(e.target.value);

  const [error, setError] = useState(null);

  const inputRef = useRef(null);

  const [buttonIndex, setButtonIndex] = useState(null);

  const [shorten, setShorten] = useState(0);
  const handleShorten = () => {
    setShorten((prev) => prev + 1);
    inputRef.current.focus();
    setButtonIndex(null);
    input === "" ? setError("Please add a link") : setError(null);
  };

  let localStorageArray = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    localStorageArray.push(value);
  }
  const [storedItems, setStoredItems] = useState([...localStorageArray]);

  useEffect(() => {
    let fetchWorking = true;
    fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
      .then((res) => res.json())
      .then((data) => {
        if (fetchWorking) {
          if (data.ok) {
            const itemId = data.result.code;
            const newStoredItem = {
              code: itemId,
              originalLink: data.result.original_link,
              shortLink: data.result.full_short_link,
            };
            setStoredItems([newStoredItem, ...storedItems]);
            localStorage.setItem(`${itemId}`, JSON.stringify(newStoredItem));
            setInput("");
          } else if (!data.ok && data.error_code !== 1) {
            setError(`Fail to shorten URL: "${data.error}"`);
          }
        }
      });
    return () => (fetchWorking = false);
  }, [shorten]);

  const handleClearAll = () => {
    localStorage.clear();
    setStoredItems([]);
    setInput("");
  };

  return (
    <Container>
      <BackgroundContainer>
        <ShorteningContainer id="shortening">
          <Input
            type="url"
            placeholder="Shorten a link here..."
            id="input"
            value={input}
            onChange={handleChange}
            ref={inputRef}
            $error={error}
          />
          <ErrorMessage $error={error}>{error}</ErrorMessage>
          <ShorteningButton onClick={handleShorten} $error={error}>
            Shorten It!
          </ShorteningButton>
        </ShorteningContainer>
      </BackgroundContainer>
      <Result
        storedItems={storedItems}
        setStoredItems={setStoredItems}
        buttonIndex={buttonIndex}
        setButtonIndex={setButtonIndex}
      />
      {storedItems.length >= 2 && (
        <ClearAllButton onClick={handleClearAll}>
          Clear All Results!
        </ClearAllButton>
      )}
    </Container>
  );
};

export default Shortening;
