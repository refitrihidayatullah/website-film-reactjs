import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Horor from "./components/Horor";
import "./style/landingPage.css";
function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end intro section */}

      {/* trending section */}
      <div className="trending">
        <Trending />
        <Horor />
      </div>
      {/* end trending section */}
    </div>
  );
}

export default App;
