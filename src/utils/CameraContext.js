import React, { useContext } from "react";

import { useCamera } from "../hooks/useCamera";

export const CameraContext = React.createContext({});

export function useCameraContext() {
  return useContext(CameraContext);
}

export const CameraProvider = ({ children }) => {
  const [camera, viewfinder] = useCamera()

  const context = {
    camera,
    viewfinder
  };

  return (
    <CameraContext.Provider value={context}>{children}</CameraContext.Provider>
  );
};
