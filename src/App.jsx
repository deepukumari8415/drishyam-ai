import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
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