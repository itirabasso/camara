import React, { useMemo, useContext } from "react";
import { Grid, List } from "semantic-ui-react";
import { AppContext } from "../utils/AppContext";

export function Status() {
  const { messages } = useContext(AppContext);

  const messagesElements = useMemo(
    () => messages.map(m => <List.Item>{m}</List.Item>),
    [messages]
  );

  return (
    <Grid.Column width={3}>
      <List>{messagesElements}</List>
    </Grid.Column>
  );
}
