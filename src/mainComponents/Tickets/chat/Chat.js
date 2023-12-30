import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import ContentAlt from "../../../layout/content/ContentAlt";
// import AppContact from "./contact/Contact";
import ChatBody from "./ChatBody";
// import User from "../../../images/avatar/b-sm.jpg";
import { Button, Icon } from "../../../components/Component";
// import { DropdownMenu, DropdownToggle, UncontrolledDropdown, DropdownItem } from "reactstrap";
// import { chatData } from "./ChatData";
// import { ChatContext } from "./ChatContext";
import { Link } from "react-router-dom";
// import { ChannelAsideBody, ChatAsideBody } from "./ChatAsideBody";

const Chat = () => {
  const [mainTab, setMainTab] = useState("Chats");
  const [selectedId, setSelectedId] = useState(2);
  // const [filterTab, setFilterTab] = useState("messages");
  // const [filteredChatList, setFilteredChatList] = useState([]);
  // const [filterText, setFilterText] = useState("");
  // const [favState, setFavState] = useState(false);
  // const [favFilter, setFavFilter] = useState([]);
  // const [favFilterText, setFavFilterText] = useState("");
  const [mobileView, setMobileView] = useState(false);

  // const { chatState, fav } = useContext(ChatContext);


  // Filtering users by search
  // useEffect(() => {
  //   if (filterText !== "") {
  //     const filteredObject = chatData.filter((item) => {
  //       return item.name.toLowerCase().includes(filterText.toLowerCase());
  //     });
  //     setFilteredChatList([...filteredObject]);
  //   } else {
  //     setFilteredChatList([...chatData]);
  //   }
  // }, [filterText, setFilteredChatList]);

  // Filtering favourite users by search
  // useEffect(() => {
  //   if (favFilterText !== "") {
  //     const filteredObject = favData.filter((item) => {
  //       return item.name.toLowerCase().includes(favFilterText.toLowerCase()) && item.fav === false;
  //     });
  //     setFavFilter([...filteredObject]);
  //   } else {
  //     setFavFilter([]);
  //   }
  // }, [favFilterText, favData]);

  // const onInputChange = (e) => {
  //   setFilterText(e.target.value);
  // };

  // const favInputSearchChange = (e) => {
  //   setFavFilterText(e.target.value);
  // };

  // const onFilterClick = (prop) => {
  //   setFilterTab(prop);
  // };

  // const chatItemClick = (id) => {
  //   let data = chat;
  //   const index = data.findIndex((item) => item.id === id);
  //   const dataSet = data.find((item) => item.id === id);
  //   if (dataSet.unread === true) {
  //     data[index].unread = false;
  //     setChat([...data]);
  //   }
  //   setSelectedId(id);
  //   if (window.innerWidth < 860) {
  //     setMobileView(true);
  //   }
  // };

  return (
    <React.Fragment>
      <Head title="Chat / Messenger"></Head>
      <ContentAlt>
        <div className="nk-chat">
          {selectedId !== null ? (
            <ChatBody
              id={selectedId}
              setSelectedId={setSelectedId}
              setMobileView={setMobileView}
              mobileView={mobileView}
            />
          ) : (
            <div className="nk-chat-body">
              <div className="nk-chat-blank">
                <div className="nk-chat-blank-icon">
                  <Icon name="chat" className="icon-circle icon-circle-xxl bg-white"></Icon>
                </div>
                <div className="nk-chat-blank-btn">
                  <Link to={`${process.env.PUBLIC_URL}/app-chat`}>
                    <Button color="primary" disabled={mainTab === "Contact"} onClick={() => setMainTab("Contact")}>
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

export default Chat;
