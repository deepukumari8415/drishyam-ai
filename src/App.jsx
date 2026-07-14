import "./index.css";
import Navbar from "./components/Navbar";
import hero from "./components/hero";
import Features from "./components/Features";
import Camera from "./components/Camera";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Camera />
    </div>
  );
}

export default App;