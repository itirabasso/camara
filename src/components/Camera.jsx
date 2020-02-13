import React, { useMemo, useContext } from "react";
import { CameraContext } from "../utils/CameraContext";

import { Grid, Button, List, Dropdown, Label } from "semantic-ui-react";
import { Viewfinder } from "./Viewfinder";

export function Camera() {
  const { camera, viewfinder } = useContext(CameraContext);

  const capture = () => {
    camera.capture();
  };

  const startViewer = () => {
    console.log(camera);
    camera.startViewfinder();
  };

  const stopViewer = () => {
    camera.stopViewfinder();
  };

  const zoomIn = () => {};

  const onSelectSetting = (name, data) => {
    const { value } = data;
    console.log(name, data);
    console.log("set setting", name, "to", value);
    camera.set(name, value);
  };

  const buildSettings = () => {
    return Object.entries(camera.settings || []).map(([name, setting]) => {
      const { available, current } = setting;
      let element;
      if (available === undefined || available.length === 0) {
        element = <Label>{current}</Label>;
      } else {
        const options = (available || []).map((value, i) => ({
          id: "setting-" + i.toString(),
          text: value,
          value: value
        }));
        element = (
          <Dropdown
            id={"param-" + name}
            fluid
            selection
            defaultValue={current}
            options={options}
            onChange={(e, data) => onSelectSetting(name, data)}
          ></Dropdown>
        );
      }
      return (
        <List.Item id={"settingx-" + name}>
          {name}
          {element}
        </List.Item>
      );
    });
  };

  const settingElements = useMemo(() => buildSettings(), [camera.settings]);
  // const imageData = useMemo(() => "data:image/png;base64," + viewfinder, [
  //   viewfinder
  // ]);
  // console.log("render camera");
  return (
    <Grid relaxed columns={16}>
      <Grid.Column width={10}>
        <Viewfinder image={viewfinder} />
      </Grid.Column>

      <Grid.Column width={6}>
        <List>{settingElements}</List>
        <Button onClick={capture}>Shoot</Button>
        <Button onClick={startViewer}>Liveview on</Button>
        <Button onClick={stopViewer}>Liveview off</Button>
      </Grid.Column>
    </Grid>
  );
}
