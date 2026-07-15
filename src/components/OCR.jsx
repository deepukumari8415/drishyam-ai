import { useState } from "react";
import Tesseract from "tesseract.js";

function OCR() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const readText = async () => {
    if (!image) {
      alert("Please select an image first");
      return;
    }

    setLoading(true);

    const result = await Tesseract.recognize(
      image,
      "eng",
      {
        logger: (m) => console.log(m),
      }
    );

    setText(result.data.text);
    setLoading(false);
  };

  return (
    <section className="camera">

      <h2>📖 Read Text (OCR)</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <br />

      <button onClick={readText}>
        {loading ? "Reading..." : "Read Text"}
      </button>

      <h3>{text}</h3>
      <button
  onClick={() => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  }}
>
  🔊 Speak Text
</button>

    </section>
  );
}

export default OCR;