import { useState, useCallback } from "react";

export function useMessages() {
  const [messages, setMessages] = useState([]);
  const addMessage = useCallback(
    message => {
      console.log('adding message', message)
      messages.push(message);
      setMessages(messages);
    },
    [setMessages]
  );

  return [messages, addMessage]
}
