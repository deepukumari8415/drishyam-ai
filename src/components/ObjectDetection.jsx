import { useEffect, useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

function ObjectDetection() {

  const videoRef = useRef(null);
  const [model, setModel] = useState(null);
  const [objects, setObjects] = useState([]);

  useEffect(() => {

    const loadModel = async () => {
      const loadedModel = await cocoSsd.load();
      setModel(loadedModel);
    };

    loadModel();

  }, []);


  const startCamera = async () => {

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true
    });

    videoRef.current.srcObject = stream;

  };


  const detectObjects = async () => {

    if (!model) return;

    const predictions = await model.detect(
      videoRef.current
    );

    setObjects(predictions);

    if(predictions.length > 0){

      const name = predictions[0].class;

      const speech = new SpeechSynthesisUtterance(
        `${name} detected`
      );

      window.speechSynthesis.speak(speech);

    }

  };


  return (

    <section className="camera">

      <h2>👁️ AI Object Detection</h2>

      <video
        ref={videoRef}
        autoPlay
        width="320"
      />

      <br/>

      <button onClick={startCamera}>
        Start Camera
      </button>

      <button onClick={detectObjects}>
        Detect Object
      </button>


      {
        objects.map((obj,index)=>(
          <p key={index}>
            {obj.class} - {Math.round(obj.score*100)}%
          </p>
        ))
      }


    </section>

  );
}

export default ObjectDetection;