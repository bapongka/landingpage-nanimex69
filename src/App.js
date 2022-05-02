import './App.css';
import Navigation from './components/Navbar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import "./style/LandingPage.css";

function App() {
  return (
    <div>
      {/* INTRO SECTION */}
      <div className='myBG'>
      <Navigation/>
      <Intro/>
      </div>
      {/* END INTRO */}

      {/* TRENDING SECTION */}
      <div className='trending'>
      <Trending/>
      </div>
      {/* END TRENDING */}
    </div>
  );
}

export default App;
