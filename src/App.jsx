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
        <p>Offline Visual Assistant for Blind Users</p>

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
        <div className="cards">
          <div className="card">Object Detection</div>
          <div className="card">Text Reading</div>
          <div className="card">Voice Support</div>
        </div>
      </section>

      <footer>
        © 2026 Drishyam AI
      </footer>

    </div>
  );
}

export default App;