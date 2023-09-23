import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Shortening from "./components/Shortening";
import Statistics from "./components/Statistics";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: white;
`;
const App = () => (
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

export default App;
