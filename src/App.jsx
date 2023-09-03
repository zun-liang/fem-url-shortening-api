import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Shortening from "./components/Shortening";
import Statistics from "./components/Statistics";

const App = () => (
  <>
    <Header />
    <main>
      <Introduction />
      <Shortening />
      <Statistics />
      <Boost />
    </main>
    <Footer />
  </>
);

export default App;
