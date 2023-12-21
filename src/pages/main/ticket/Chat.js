import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
// import ChatContainer from "../../../mainComponents/Tickets/chat1/ChatContainer";
import ChatContainer from "../../../mainComponents/Tickets/chat/ChatContainer";

const Chat = () => {
  return (
    <React.Fragment>
      <Head title="Chat" />
      <Content>
        <ChatContainer />
      </Content>
    </React.Fragment>
  );
};

export default Chat;
