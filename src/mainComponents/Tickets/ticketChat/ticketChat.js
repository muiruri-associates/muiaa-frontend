import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import ContentAlt from "../../../layout/content/ContentAlt";
// import AppContact from "./contact/Contact";
import TicketChatBody from "./ticketChatBody";
// import User from "../../../images/avatar/b-sm.jpg";
import { Button, Icon } from "../../../components/Component";
// import { DropdownMenu, DropdownToggle, UncontrolledDropdown, DropdownItem } from "reactstrap";
// import { chatData } from "./ChatData";
// import { ChatContext } from "./ChatContext";
import { Link } from "react-router-dom";
// import { ChannelAsideBody, ChatAsideBody } from "./ChatAsideBody";

const TicketChat = () => {
  const [mainTab, setMainTab] = useState("Chats");
  const [selectedId, setSelectedId] = useState(2);
  const [mobileView, setMobileView] = useState(false);

  return (
    <React.Fragment>
      <Head title="Chat / Messenger"></Head>
      <ContentAlt>
        <div className="nk-chat">
          {selectedId !== null ? (
            <TicketChatBody
              id={selectedId}
              setSelectedId={setSelectedId}
              setMobileView={setMobileView}
              mobileView={mobileView}
            />
          ) : (
            <div className="nk-chat-body">
              <div className="nk-chat-blank">
                <div className="nk-chat-blank-icon">
                  <Icon
                    name="chat"
                    className="icon-circle icon-circle-xxl bg-white"
                  ></Icon>
                </div>
                <div className="nk-chat-blank-btn">
                  <Link to={`${process.env.PUBLIC_URL}/app-chat`}>
                    <Button
                      color="primary"
                      disabled={mainTab === "Contact"}
                      onClick={() => setMainTab("Contact")}
                    >
                      Start Chat
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </ContentAlt>
    </React.Fragment>
  );
};

export default TicketChat;
