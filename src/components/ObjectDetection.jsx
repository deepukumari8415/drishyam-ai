import { useEffect, useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

function ObjectDetection() {

  const videoRef = useRef(null);

  const [model, setModel] = useState(null);
  const [objects, setObjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cameraMode, setCameraMode] = useState("user");


  // Load AI Model
  useEffect(() => {

    const loadModel = async () => {

      try {

        const loadedModel = await cocoSsd.load();

        setModel(loadedModel);
        setLoading(false);

        console.log("AI Model Loaded");

      } catch (error) {

        console.log("Model Loading Error:", error);
        setLoading(false);

      }

    };


    loadModel();

  }, []);



  // Start Camera
  const startCamera = async () => {

    try {

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: cameraMode
        }
      });


      videoRef.current.srcObject = stream;

    } catch(error) {

      alert("Camera permission denied");

    }

  };



  // Detect Object
  const detectObjects = async () => {


    if(!model){

      alert("AI Model is still loading...");
      return;

    }


    const predictions = await model.detect(
  videoRef.current,
  undefined,
  0.3
);

    setObjects(predictions);



    if(predictions.length > 0){


      const detectedObjects = predictions
      .slice(0,3)
      .map(item => item.class)
      .join(", ");



      const speech = new SpeechSynthesisUtterance(
        `${detectedObjects} detected`
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
        loading ? (
          <p>
            Loading AI Model...
          </p>
        ) : (
          <p>
            AI Model Ready ✅
          </p>
        )
      }



      <video
  ref={videoRef}
  autoPlay
  playsInline
  muted
  width="400"
/>



      <br />



      <button onClick={startCamera}>
        📷 Start Camera
      </button>



      <button onClick={detectObjects}>
        🔍 Detect Object
      </button>
      <button onClick={() => setCameraMode("user")}>
  🤳 Front Camera
</button>

<button onClick={() => setCameraMode("environment")}>
  📷 Back Camera
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