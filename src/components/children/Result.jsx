/* eslint-disable react/prop-types */
import styled from "styled-components";

import { Button, CommonContainer } from "../../assets/CommonStyles";
import { ReactComponent as IconCloseSvg } from "../../assets/images/icon-close.svg";

const ResultContainer = styled(CommonContainer)`
  background: white;
  padding: 1rem 0 1.5rem;
  border-radius: 0.5rem;
  gap: 0.5rem;
  width: 100%;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: minmax(0, 2fr) 1fr 8rem;
    grid-template-rows: 0.8rem 1fr;
    column-gap: 1.5rem;
    padding: 1.5rem;
  }
  @media (min-width: 1400px) {
    grid-template-columns: minmax(0, 3fr) 1fr 8rem;
  }
`;
const IconClose = styled(IconCloseSvg)`
  transform: scale(0.8);
  align-self: flex-end;
  margin: 0 1rem -1rem 0;
  @media (min-width: 800px) {
    align-self: start;
    justify-self: end;
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    margin: -0.8rem -0.8rem 0 0;
  }
`;
const OriginalLink = styled.p`
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem 1.5rem;
  text-align: center;
  overflow-wrap: break-word;
  @media (min-width: 800px) {
    font-size: 0.9rem;
    padding: 0;
    text-align: left;
    justify-self: start;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  @media (min-width: 1400px) {
    font-size: 1rem;
  }
`;
const Hr = styled.hr`
  width: 100%;
  border: 0.1px solid var(--gray);
  @media (min-width: 800px) {
    display: none;
  }
`;
const ShortLink = styled.p`
  color: var(--cyan);
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem 1.5rem;
  text-align: center;
  overflow-wrap: break-word;
  @media (min-width: 800px) {
    font-size: 0.9rem;
    padding: 0;
    text-align: right;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }
  @media (min-width: 1400px) {
    font-size: 1rem;
  }
`;
const CopyButton = styled(Button)`
  border-radius: 0.5rem;
  width: 90%;
  font-size: 1rem;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor === "Copy" ? "var(--cyan)" : "var(--very-dark-violet)"};
  &:hover {
    background-color: ${({ $backgroundColor }) =>
      $backgroundColor === "Copy"
        ? "var(--light-cyan)"
        : "var(--very-dark-violet)"};
  }
  @media (min-width: 800px) {
    width: 7rem;
    height: 2.2rem;
    font-size: 0.8rem;
    grid-column: 3 / 4;
    grid-row: 1 / 3;
  }
  @media (min-width: 1400px) {
    font-size: 0.9rem;
    height: 2.5rem;
  }
`;

const Result = ({
  storedItems,
  setStoredItems,
  buttonIndex,
  setButtonIndex,
}) => {
  const handleClose = (index) => {
    localStorage.removeItem(`${storedItems[index].code}`);
    const updatedStoredItems = storedItems.toSpliced(index, 1);
    setStoredItems(updatedStoredItems);
  };

  const handleCopy = (index) => {
    setButtonIndex(index);
    const copiedText = storedItems[index].shortLink;
    navigator.clipboard.writeText(copiedText);
  };
  return (
    <>
      {storedItems.map((item, index) => {
        if (item.originalLink !== "")
          return (
            <ResultContainer key={item.code}>
              <IconClose
                onClick={() => {
                  handleClose(index);
                }}
              />
              <OriginalLink>{item.originalLink}</OriginalLink>
              <Hr />
              <ShortLink>{item.shortLink}</ShortLink>
              <CopyButton
                onClick={() => {
                  handleCopy(index);
                }}
                $backgroundColor={buttonIndex === index ? "Copied!" : "Copy"}
              >
                {buttonIndex === index ? "Copied!" : "Copy"}
              </CopyButton>
            </ResultContainer>
          );
      })}
    </>
  );
};

export default Result;
