import { useState } from "react";

function ObjectDetection() {
  const [result, setResult] = useState("");

  const detect = () => {
    setResult("Detected objects: Person, Mobile Phone, Book");
  };

  return (
    <section className="camera">

      <h2>👁️ Object Detection</h2>

      <p>
        AI based object detection assistance.
      </p>

      <button onClick={detect}>
        Detect Objects
      </button>

      <h3>{result}</h3>

    </section>
  );
}

export default ObjectDetection;