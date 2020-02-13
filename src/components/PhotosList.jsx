import React, { useEffect, useState, useMemo } from "react";
import { useCameraContext } from "../utils/CameraContext";
import { List, Button, Grid } from "semantic-ui-react";

export function PhotoList() {
  const [files, setFiles] = useState([]);
  const { camera } = useCameraContext();

  const fetchPhotos = () => {
    console.log("fetching photos...");
    camera.getPhotos().then(photos => setFiles(photos));
  };

  useEffect(() => {
    if (camera === undefined) {
      return;
    }
    fetchPhotos();
  }, []);

  const filesElements = useMemo(
    () => files.map(f => <List.Item>{f}</List.Item>),
    [files]
  );

  return (
    <Grid.Column width={3}>
      <Button onClick={fetchPhotos}>Fetch photos</Button>
      <List>{filesElements}</List>
    </Grid.Column>
  );
}
