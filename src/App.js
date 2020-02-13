import React from "react";
import "./App.css";

import { PhotoList } from "./components/PhotosList";
import { CameraProvider } from "./utils/CameraContext";
import { Camera } from "./components/Camera";
import { Status } from "./components/Status";
import { Tab } from "semantic-ui-react";
import { AppProvider } from "./utils/AppContext";

function App() {
  const panes = [
    {
      menuItem: "Camera",
      render: () => <Camera />
    },
    {
      menuItem: "View photos",
      render: () => <PhotoList />
    }
  ];

  return (
    <div>
      <AppProvider>
        <CameraProvider>
          <Tab panes={panes} />
          <Status />
        </CameraProvider>
      </AppProvider>
    </div>
  );
}

export default App;
