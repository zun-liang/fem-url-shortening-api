import { useEffect } from "react";
import styled from "styled-components";

import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Shortening from "./components/Shortening";
import Statistics from "./components/Statistics";

const AppContainer = styled.div`
  background-color: white;
`;

const App = () => {
  const setAppHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  useEffect(() => {
    window.addEventListener("resize", setAppHeight);
    setAppHeight();
    return () => window.removeEventListener("resize", setAppHeight);
  }, []);

  return (
    <AppContainer>
      <Header />
      <main>
        <Introduction />
        <Shortening />
        <Statistics />
        <Boost />
      </main>
      <Footer />
    </AppContainer>
  );
};

export default App;
