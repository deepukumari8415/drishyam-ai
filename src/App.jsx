import Camera from "./components/Camera";
import OCR from "./components/OCR";
import ObjectDetection from "./components/ObjectDetection";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2>Drishyam AI</h2>

        <ul>
          <li>Home</li>
          <li>Camera</li>
          <li>Features</li>
        </ul>
      </nav>


      {/* Hero Section */}
      <section className="hero">

        <h1>Drishyam AI</h1>

        <p>
          Offline Visual Assistant for Blind Users
        </p>

        <span>
          AI powered assistant that helps users
          detect objects, read text and get voice guidance.
        </span>


        <div className="buttons">

          <button onClick={() =>
            document.getElementById("camera").scrollIntoView()
          }>
            Start Camera
          </button>


          <button onClick={() =>
            document.getElementById("ocr").scrollIntoView()
          }>
            Read Text
          </button>


          <button onClick={() =>
            document.getElementById("voice").scrollIntoView()
          }>
            Voice Guide
          </button>

        </div>

      </section>



      {/* Camera Module */}
      <div id="camera">
        <Camera />
      </div>



      {/* OCR Module */}
      <div id="ocr">
        <OCR />
      </div>



      {/* Object Detection Module */}
      <ObjectDetection />



      {/* Features Section */}
      <section className="features">

        <h2>Powerful AI Features</h2>

        <div className="cards">

          <div className="card">
            <h3>🔍 Object Detection</h3>
            <p>
              Detect objects around you using AI assistance.
            </p>
          </div>


          <div className="card">
            <h3>📖 Text Reading</h3>
            <p>
              Convert written text into understandable voice output.
            </p>
          </div>


          <div className="card">
            <h3>🔊 Voice Guidance</h3>
            <p>
              Get audio guidance for better navigation.
            </p>
          </div>

        </div>

      </section>



      {/* Footer */}
      <footer>
        © 2026 Drishyam AI
      </footer>


    </div>
  );
}

export default App;