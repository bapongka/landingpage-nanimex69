import "./App.css";
import Navigation from "./components/Navbar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import MostViewed from "./components/MostViewed";
import "./style/LandingPage.css";

function App() {
  return (
    <div>
      {/* INTRO SECTION */}
      <div className="myBG">
        <Navigation />
        <Intro />
      </div>
      {/* END INTRO */}

      {/* TRENDING SECTION */}
      <div className="trending">
        <Trending />
        <MostViewed />
      </div>
      {/* END TRENDING */}

      {/* MOST VIEWED SECTION */}
      {/* <div className="mostviewed">
        <MostViewed />
      </div> */}
      {/* END MOST VIEWED */}
    </div>
  );
}

export default App;
