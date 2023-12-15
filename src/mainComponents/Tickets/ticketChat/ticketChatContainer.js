import React from "react";
import TicketChat from "./ticketChat";
import { TicketChatContextProvider } from "./ticketChatContext";

const TicketChatContainer = () => {
  return (
    <TicketChatContextProvider>
      <TicketChat />
    </TicketChatContextProvider>
  );
};
export default TicketChatContainer;
