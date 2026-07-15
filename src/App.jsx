function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <h2>Drishyam AI</h2>
        <ul>
          <li>Home</li>
          <li>Camera</li>
          <li>About</li>
        </ul>
      </nav>

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
    <button>Start Camera</button>
    <button>Read Text</button>
    <button>Voice Guide</button>
  </div>
</section>

      <section className="camera">
        <h2>Camera Assistance</h2>
        <p>AI powered visual guidance for users.</p>
        <button>Open Camera</button>
      </section>
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