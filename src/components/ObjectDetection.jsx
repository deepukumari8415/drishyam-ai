import { useEffect, useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

function ObjectDetection() {

  const videoRef = useRef(null);

  const [model, setModel] = useState(null);
  const [objects, setObjects] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const loadAIModel = async () => {
      const loadedModel = await cocoSsd.load();

      setModel(loadedModel);
      setLoading(false);
    };

    loadAIModel();

  }, []);



  const startCamera = async () => {

    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment"
      }
    });

    videoRef.current.srcObject = stream;

  };



  const detectObjects = async () => {

    if (!model) {
      alert("AI model loading...");
      return;
    }


    if (!videoRef.current) return;


    const predictions = await model.detect(
      videoRef.current
    );


    setObjects(predictions);


    if (predictions.length > 0) {

      const detected = predictions
        .slice(0,3)
        .map(obj => obj.class)
        .join(", ");


      const speech = new SpeechSynthesisUtterance(
        `${detected} detected`
      );


      speech.lang = "en-US";
      speech.rate = 0.9;

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(speech);

    }

    else {

      const speech = new SpeechSynthesisUtterance(
        "No object detected"
      );

      window.speechSynthesis.speak(speech);

    }

  };



  return (

    <section className="camera">

      <h2>
        👁️ AI Object Detection
      </h2>


      {
        loading &&
        <p>
          Loading AI Model...
        </p>
      }


      <video
        ref={videoRef}
        autoPlay
        playsInline
        width="320"
      />


      <br />


      <button onClick={startCamera}>
        📷 Start Camera
      </button>


      <button onClick={detectObjects}>
        🔍 Detect Object
      </button>



      <div>

        {
          objects.map((obj,index)=>(

            <p key={index}>
              {obj.class} -
              {Math.round(obj.score * 100)}%
            </p>

          ))
        }

      </div>


    </section>

  );

}


export default ObjectDetection; 