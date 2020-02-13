import { useContext, useState, useEffect } from "react";
import SonyCamera from "sony-camera";
import { AppContext } from "../utils/AppContext";

export function useCamera() {
  const [camera, setCamera] = useState({});
  const [viewfinder, setViewfinder] = useState("");
  const ctx = useContext(AppContext);

  useEffect(() => {
    async function startCamera() {
      console.log("starting camera");
      const cam = new SonyCamera();

      cam.on("update", (param, value) => {
        console.log("updatex", param, value);
      });

      let currentFrame = 0;
      cam.on("liveviewJpeg", (frameNumber, image) => {
        console.log("frame number", frameNumber);
        if (currentFrame > frameNumber) {
          return;
        }
        currentFrame = frameNumber;
        if (image) {
          setViewfinder(image.toString("base64"));
        }
      });
      cam.on("status", message => {
        console.log("status update", message);
        ctx.addMessage(message);
      });

      cam.on("newPhoto", (name, image) => {
        console.log("got a new photo", name);
        // fs.writeFileSync("./photos/" + name, image);
        const photo = new Image();
        photo.src = "data:image/jpg;base64," + image.toString("base64");

        const newTab = window.open("");
        newTab.document.write(photo.outerHTML);
      });

      await cam.connect();
      console.log("connectedddddddddd", cam);
      setCamera(cam);
      return cam;
    }

    startCamera();
  }, []);

  return [camera, viewfinder];
}
