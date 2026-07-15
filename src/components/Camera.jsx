import { useRef, useState } from "react";

function Camera() {
  const videoRef = useRef(null);
  const [active, setActive] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      videoRef.current.srcObject = stream;
      setActive(true);

    } catch (error) {
      alert("Camera permission denied");
    }
  };

  return (
    <div className="camera">
      <h2>Camera Module</h2>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        width="320"
      ></video>

      <br />

      <button onClick={startCamera}>
        {active ? "Camera Running" : "Start Camera"}
      </button>
    </div>
  );
}

export default Camera;