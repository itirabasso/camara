import React, { useMemo } from "react";
import { Image } from "semantic-ui-react";

export function Viewfinder({ image }) {

  const source = useMemo(() => "data:image/png;base64," + image, [
    image
  ]);

  return <Image size="large" src={source} />;
}
